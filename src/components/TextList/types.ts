import { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react'

export type TextListProps = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: (string | ReactElement)[]
  noPoints?: boolean
}
