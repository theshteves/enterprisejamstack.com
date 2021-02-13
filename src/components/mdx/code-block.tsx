import * as React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import theme from './code-theme'

const CodeBlock: React.FC = ({codeString, language}: any) => {
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre
          className={`${className} sm:mx-0 -mx-5 sm:rounded-md rounded-none`}
          style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({line, key: i})} style={{fontSize: '90%'}}>
              {line.map((token, key) => (
                <span {...getTokenProps({token, key})} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

export default CodeBlock
