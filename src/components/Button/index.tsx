import React, { forwardRef } from 'react'
import { SButton } from '@components/Button/index.styled'
import { ButtonProps } from '@components/Button/types'
import { Link } from 'gatsby'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ to, ...htmlProps }, ref) => {
    if (to) {
      return (
        <Link to={to}>
          <SButton as="span" {...htmlProps} ref={ref} />
        </Link>
      )
    }

    return <SButton type="button" {...htmlProps} ref={ref} />
  }
)
