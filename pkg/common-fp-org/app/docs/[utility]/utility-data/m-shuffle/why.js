import code from '@/built/code-examples/api/m-shuffle'
import CodeBlock from '@/cmpt/code-block'

const Why = () => {
  const clue = (
    <a target="_blank" href="https://en.wikipedia.org/wiki/Cluedo">
      Clue
    </a>
  )

  return (
    <>
      <p>
        {`
        Sometimes we want to mutate an array by ordering it randomly. Below, we
        have groups of cards for a quick version of
        `}
        {clue}.
        {`
        Let's shuffle each group to start the game.
        `}
      </p>
      <CodeBlock debugId="m-shuffle/clue" jsTs={code.clue} />
    </>
  )
}

export default Why
