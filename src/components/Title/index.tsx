import React, { ElementType, FC } from 'react'
import { TitleProps } from '@components/Title/types'
import { STitle } from '@components/Title/index.styled'

export const Title: FC<TitleProps> = ({ level, ...htmlProps }) => {
  const Component = `h${level}` as ElementType

  return <STitle as={Component} {...htmlProps} $level={level} />
}

Title.defaultProps = {
  level: 1,
}
