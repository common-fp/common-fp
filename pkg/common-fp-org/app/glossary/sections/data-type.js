import { useMemo } from 'react'
import AnchoredHeading from '@/cmpt/anchored-heading'
import InlineCode from '@/cmpt/inline-code'
import SimpleTable from '@/cmpt/simple-table'
import code from '@/built/code-examples/pages/glossary'
import InlineUtility from '@/cmpt/inline-utility'
import CodeBlock from '@/cmpt/code-block'
import { TArray, Collection, TNumber } from '@/cmpt/inline-types'
import { anchor } from '../utils'

const DataTypeSection = () => {
  // SimpleTable manages the key attribute
  /* eslint-disable react/jsx-key */
  const dataTypeExamples = useMemo(
    () => [
      [<InlineUtility name="add" />, <TNumber />],
      [<InlineUtility name="appendOne" />, <TArray />],
      [<InlineUtility name="mapValues" />, <Collection />],
    ],
    []
  )
  /* eslint-enable react/jsx-key */

  return (
    <section>
      <AnchoredHeading level={2} id={anchor.dataType} text="Data Type" />
      <p>
        {`
        The "data type" of a function is the last argument's type. For example
        `}
      </p>
      <SimpleTable headers={['Utility', 'Data Type']} data={dataTypeExamples} />
      <p>
        {`To explain, let's use `}
        <InlineCode>mapValues</InlineCode>
        {` to scream some words`}
      </p>

      <CodeBlock debugId="data-type-1" jsTs={code.dataType1} />

      <p>
        {`In Common FP, I consider `}
        <InlineCode>scream</InlineCode> to be the first argument to mapValues
        and <InlineCode>words</InlineCode> the last.
        {` Let's reorder the code to better see what I mean:`}
      </p>

      <CodeBlock debugId="data-type-2" jsTs={code.dataType2} />

      <p>
        {`
        Though I don't suggest writing code that way, as it's harder
        to understand
        `}
      </p>

      <h3>Why is the Data Type Important?</h3>

      <p>
        {`
        In functional programming, we place the "data argument" last to allow
        for composable functions. By labeling each utility with its data type,
        you can more easily see how to compose them.
      `}
      </p>
    </section>
  )
}

export default DataTypeSection
