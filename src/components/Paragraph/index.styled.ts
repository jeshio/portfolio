import styled, { css } from 'styled-components'
import { ParagraphProps } from '@components/Paragraph/types'

export const SParagraph = styled.p<{
  $level: ParagraphProps['level']
}>(
  ({ theme }) => css`
    color: ${theme.colors.blue800};
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    font-size: 0.875rem;
    line-height: 141%;
    letter-spacing: 0.04em;
    margin: 20px 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  `
)
