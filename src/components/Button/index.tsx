import React, { forwardRef } from 'react'
import { SButton, SLink } from '@components/Button/index.styled'
import { ButtonProps } from '@components/Button/types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ to, ...htmlProps }, ref) => {
    if (to) {
      return (
        <SLink
          to={to}
          {...(htmlProps as unknown[])}
          innerRef={ref as unknown as React.Ref<HTMLAnchorElement>}
        />
      )
    }

    return <SButton type="button" {...htmlProps} ref={ref} />
  }
)
