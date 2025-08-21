/**
 * I'm unsure how to structure this inside of react so we're goin old school
 */

import dedent from 'dedent'
import { waitMs } from './index'
import { transitionDurSlowSeconds } from './style-variables'
import log from './log'
import currentlyHoveredElement from './currently-hovered-element'

let notifyContainer
let queue = []
let queueRunning = false
let currentNotification
const delayBetweenNotificationsMs = 500
const closeSvg = getCloseSvg()

const notify = notification => {
  const isDuplicateNotification =
    areNotificationsEqual(queue.at(-1), notification) ||
    areNotificationsEqual(currentNotification, notification)
  if (isDuplicateNotification) return

  notifyContainer ??= initNotifyContainer()
  queue.push(notification)
  if (!queueRunning) runQueue()
}

async function runQueue() {
  try {
    queueRunning = true
    while (queue.length) {
      currentNotification = queue.shift()
      const { durationSeconds, message, type } = currentNotification
      const notification = document.createElement('div')
      notification.classList.add('notification', type)

      const content = document.createElement('div')
      content.classList.add('content')
      content.innerHTML = message

      const close = document.createElement('button')
      close.classList.add('close')
      close.innerHTML = closeSvg
      const notificationCloseClicked = new Promise(resolve => {
        close.onclick = () => {
          resolve()
        }
      })
      notification.appendChild(content)
      notification.appendChild(close)

      notifyContainer.appendChild(notification)
      await waitMs(10)
      notification.classList.add('appear')

      const ensureNotHovering = makeEnsureNotHovering(notification)
      const waitFor = [notificationCloseClicked]
      if (durationSeconds)
        waitFor.push(waitMs(durationSeconds * 1000).then(ensureNotHovering))

      await Promise.race(waitFor)

      notification.classList.remove('appear')
      notification.classList.add('dismiss')
      await waitMs(transitionDurSlowSeconds * 1000)
      notification.remove()
      await waitMs(delayBetweenNotificationsMs)
    }
  } catch (err) {
    log.error('error running queue\n', err)
    queue = []
    log.error('queue has been emptied\n', err)
  } finally {
    currentNotification = undefined
    queueRunning = false
  }
}

function initNotifyContainer() {
  const el = document.createElement('div')
  el.id = 'notifier'
  document.body.appendChild(el)

  document.addEventListener('keydown', async evt => {
    if (evt.code.toLowerCase() === 'escape') {
      const close = el.querySelector('button.close')
      close?.click()
    }
  })

  return el
}

function getCloseSvg() {
  return dedent(`
    <svg version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="m92.593 0 7.4074 7.4074-92.593 92.593-7.4074-7.4074z" stroke-width="1.3115"/>
      <path d="m1e-6 7.4074 7.4074-7.4074 92.593 92.593-7.4074 7.4074z" stroke-width="1.3115"/>
    </svg>
  `)
}

function areNotificationsEqual(left, right) {
  return (
    left &&
    right &&
    left.type === right.type &&
    left.message === right.message &&
    left.duration === right.duration
  )
}

function makeEnsureNotHovering(notification) {
  return () => {
    if (!notification.contains(currentlyHoveredElement)) return

    return new Promise(resolve => {
      const waitThenResolve = async _evt => {
        notification.removeEventListener('mouseout', waitThenResolve)
        await waitMs(500)
        resolve()
      }
      notification.addEventListener('mouseout', waitThenResolve)

      // since it's technically possible for currentlyHoveredElement to be out
      // of date, let's double check it here
      setTimeout(() => {
        if (!notification.contains(currentlyHoveredElement)) {
          resolve()
        }
      }, 100)
    })
  }
}

export default notify
