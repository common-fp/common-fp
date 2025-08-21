const returnAsIs = returnFirstArg

type Attributes = {
  prefix: string
  weight: number
  damage: number
  speed: number
}

type Modify = (attrs: Attributes) => Attributes

const craftSword = (modify: Modify = returnAsIs) => {
  const defaultAttributes = {
    prefix: '',
    weight: 5,
    damage: 7,
    speed: 3,
  }
  const attrs = modify(defaultAttributes)
  return {
    name: 'sword',
    ...attrs,
  }
}

const lighten: Modify = attrs => ({
  prefix: 'light',
  weight: attrs.weight - 2,
  damage: attrs.damage - 2,
  speed: attrs.speed + 2,
})

const sword = craftSword()
console.log(sword)

const lightSword = craftSword(lighten)
console.log(lightSword)
