import { DetailedHTMLProps, HTMLAttributes } from 'react'

export type ButtonProps = DetailedHTMLProps<
  HTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  to?: string
}
