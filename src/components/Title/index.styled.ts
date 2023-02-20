import styled, { css } from 'styled-components'
import { TitleProps } from './types'

export const STitle = styled.h1<{
  $level: TitleProps['level']
}>(
  ({ $level, theme }) => css`
    font-size: ${() => {
      switch ($level) {
        case 2:
          return '1.625rem'
        case 3:
          return '1.5rem'
        case 4:
          return '1.25rem'
        case 5:
          return '1rem'
        case 6:
          return '0.875rem'
        default:
          return '3rem'
      }
    }};
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    text-transform: uppercase;
    margin: 0;
    color: ${theme.colors.blue800};
  `
)
