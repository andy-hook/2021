import React from 'react'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { Theme } from '../../style/theme'
import {
  baseText,
  setCropAndLineHeight,
  TextSize,
} from '../../style/typography'

type TextParagraphProps = {
  children: React.ReactNode
  color?: keyof Theme['foreground']
  size: TextSize
}

function TextParagraph({
  children,
  color = 'medium',
  size = 'md',
  ...props
}: TextParagraphProps): JSX.Element {
  const { foreground } = useTheme()

  return (
    <p
      css={`
        ${baseText.size[size]}
        ${baseText.weight.regular}
        ${setCropAndLineHeight('base', 'longform')}

        color: ${foreground(color)};
      `}
      {...props}
    >
      {children}
    </p>
  )
}

export default TextParagraph
