import React, { forwardRef } from 'react'
import { SParagraph } from '@components/Paragraph/index.styled'
import { ParagraphProps } from '@components/Paragraph/types'

export const Paragraph = forwardRef<
  HTMLParagraphElement | null,
  ParagraphProps
>(({ level, ...htmlProps }, ref) => (
  <SParagraph {...htmlProps} ref={ref} $level={level} />
))

Paragraph.defaultProps = {
  level: 1,
}
