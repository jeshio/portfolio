import React, { forwardRef } from 'react'
import { TextListProps } from '@components/TextList/types'
import { STextList, STextListItem } from '@components/TextList/index.styled'

export const TextList = forwardRef<HTMLUListElement, TextListProps>(
  ({ items, ...htmlProps }, ref) => {
    return (
      <STextList {...htmlProps} ref={ref}>
        {items.map((item, index) => (
          <STextListItem key={index}>{item}</STextListItem>
        ))}
      </STextList>
    )
  }
)
