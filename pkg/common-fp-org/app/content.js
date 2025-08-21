import dedent from 'dedent'
import CodeBlock from '@/cmpt/code-block'
import InlineUtility from '@/cmpt/inline-utility'
import MoreInfo, { MoreInfoDetails, MoreInfoMain } from '@/more-info'
import AnchoredHeading from '@/cmpt/anchored-heading'
import useTrackAnchorsOnScroll from '@/hooks/use-track-anchors-on-scroll'
import code from '@/built/code-examples/pages/home'

import './content.scss'

const anchor = {
  andUse: 'and-use',
  getStarted: 'get-started',
  whatIsIt: 'what-is-it',
  whoIsntThisFor: 'who-isnt-this-for',
  whoIsThisFor: 'who-is-this-for',
  whyBuildIt: 'why-build-it',
  withArraysAndSets: 'with-arrays-and-sets',
  withMap: 'with-map',
}

const installSh = dedent(`
  npm i common-fp

  # using typescript?
  npm i common-fp-types
`)

const Content = () => {
  useTrackAnchorsOnScroll(anchor)

  const inlineMapValues = <InlineUtility name="mapValues" />

  return (
    <div className="page-content home">
      <h1>Common FP</h1>
      <p className="tagline">Functional programming for the commoner</p>

      <AnchoredHeading level={2} id={anchor.whatIsIt} text="What Is It?" />
      <p>An opinionated utility library with a few goals</p>
      <ul className="goals">
        <li>Utilities are built with multiple data types in mind</li>
        <li>Functional without the jargon</li>
        <li>Friendly errors</li>
      </ul>

      <AnchoredHeading level={2} id={anchor.getStarted} text="Get Started" />
      <ol className="get-started">
        <li>
          Install
          <CodeBlock debugId="install" sh={installSh} />
        </li>

        <li id={anchor.andUse}>
          And use
          <CodeBlock debugId="and-use" jsTs={code.andUse} />
          <div id={anchor.withMap} className="code-description">
            You can also pass a Map
          </div>
          <CodeBlock debugId="with-map" jsTs={code.withMap} />
          <div id={anchor.withArraysAndSets} className="code-description">
            mapValues works with arrays and Sets as well
          </div>
          <CodeBlock debugId="arrays-and-sets" jsTs={code.arraysAndSets} />
        </li>
      </ol>

      <AnchoredHeading level={2} id={anchor.whyBuildIt} text="Why Build It?" />
      <p>
        {`
        I wanted a utility library that worked with data types generically.
        Years ago I built a crude personal version I really liked.  Common FP is
        a refined and expanded version that hopefully others find helpful.
        `}
      </p>

      <AnchoredHeading
        level={2}
        id={anchor.whoIsThisFor}
        text="Who Is This For?"
      />
      <p>Common FP is for people who</p>
      <ul role="list" className="who-is-this-for">
        <li>
          <MoreInfo>
            <MoreInfoMain>
              Want utilities that work with data types generically.
            </MoreInfoMain>
            <MoreInfoDetails>
              For example, {inlineMapValues} allows us to map over the values of
              an array, object, Map, or Set and return a new instance of the
              data type passed in.
            </MoreInfoDetails>
          </MoreInfo>
        </li>
        <li>
          <MoreInfo>
            <MoreInfoMain>
              Are interested in some functional concepts...
            </MoreInfoMain>
            <MoreInfoDetails>
              <p>...but not interested in diving in the deep end.</p>
              <p>
                {`
                Helpful concepts like immutability are common in JavaScript and
                can be used without currying, knowing what an
                "identity function" is, or learning any theory. Those things may
                be useful for people wanting to learn them but pose a barrier
                for those who don't.
                `}
              </p>
            </MoreInfoDetails>
          </MoreInfo>
        </li>
        <li>
          <MoreInfo>
            <MoreInfoMain>
              Have run into limitations with chaining.
            </MoreInfoMain>
            <MoreInfoDetails>
              Chaining feels natural until you want to call a function outside
              the prototype. Then you either need to modify the prototype and
              account for collisions or use a different approach, such as
              function composition.
            </MoreInfoDetails>
          </MoreInfo>
        </li>
        <li>
          <MoreInfo>
            <MoreInfoMain>Enjoy code they can read and understand</MoreInfoMain>
            <MoreInfoDetails>
              <p>
                {`
                Common FP is intended to be read as well as used. Most
                JavaScript devs should be able to browse the utilities to
                understand how they work.  My goal is to provide a positive
                debugging experience.
                `}
              </p>
            </MoreInfoDetails>
          </MoreInfo>
        </li>
      </ul>

      <AnchoredHeading
        level={2}
        id={anchor.whoIsntThisFor}
        text="Who Isn't This For?"
      />
      <p>
        Common FP is not for everyone. You may prefer other libraries if you
      </p>
      <ul role="list" className="who-isnt-this-for">
        <li>
          <MoreInfo>
            <MoreInfoMain>
              Are content with your current utilities.
            </MoreInfoMain>
            <MoreInfoDetails>
              {`
              Common FP may feel odd and unnecessary to you.  That's fine!  Keep
              writing code in a way that's comfortable for you and your team.
              `}
            </MoreInfoDetails>
          </MoreInfo>
        </li>
        <li>
          <MoreInfo>
            <MoreInfoMain>
              Are already familiar with functional programming.
            </MoreInfoMain>
            <MoreInfoDetails>
              If{' '}
              <a href="https://ramdajs.com/" target="_blank" rel="noreferrer">
                Ramda
              </a>{' '}
              or{' '}
              <a
                href="https://sanctuary.js.org/"
                target="_blank"
                rel="noreferrer"
              >
                Sanctuary
              </a>{' '}
              makes sense to you, then Common FP may feel watered down and
              missing what you like about functional programming.
            </MoreInfoDetails>
          </MoreInfo>
        </li>
        <li>
          <MoreInfo>
            <MoreInfoMain>Prefer less opinionated code.</MoreInfoMain>
            <MoreInfoDetails>
              {`
              Common FP is opinionated and will throw errors when you use it in
              an unintended way.  For example,
              `}
              {inlineMapValues}
              {`
              requires you to pass a function, whereas Lodash provides a
              default.  Calling mapValues without a function doesn't make sense
              to me; thus, I enforce that convention.  This is one opinion of
              many that won't be shared by everyone - which is okay :)
              `}
            </MoreInfoDetails>
          </MoreInfo>
        </li>
      </ul>
    </div>
  )
}

export default Content
