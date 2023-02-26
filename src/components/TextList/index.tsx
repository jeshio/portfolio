import React, { forwardRef } from 'react'
import { TextListProps } from '@components/TextList/types'
import { STextList, STextListItem } from '@components/TextList/index.styled'

export const TextList = forwardRef<HTMLUListElement, TextListProps>(
  ({ items, noPoints = false, ...htmlProps }, ref) => {
    return (
      <STextList {...htmlProps} $noPoints={noPoints} ref={ref}>
        {items.map((item, index) => (
          <STextListItem key={index}>{item}</STextListItem>
        ))}
      </STextList>
    )
  }
)

TextList.defaultProps = {
  noPoints: false,
}
