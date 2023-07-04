import styled, { css } from 'styled-components'
import { TitleProps } from './types'
import { media } from '@helpers/media'

export const STitle = styled.h1<{
  $level: TitleProps['level']
}>(
  ({ $level = 1, theme }) => css`
    font-size: ${() => {
      switch ($level) {
        case 2:
          return 'clamp(1.625rem, 3vw, 2.625rem)'
        case 3:
          return 'clamp(1.125rem, 2vw, 2rem)'
        default:
          return '3rem'
      }
    }};
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    text-transform: ${$level > 2 ? 'lowercase' : 'uppercase'};
    margin: 0 0 3px;
    color: ${theme.colors.blue800};

    ${media.xl(
      () => css`
        margin: 0 0 9px;
      `
    )}
  `
)
