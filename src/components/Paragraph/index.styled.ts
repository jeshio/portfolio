import styled, { css } from 'styled-components'
import { ParagraphProps } from '@components/Paragraph/types'
import { media } from '@helpers/media'

export const SParagraph = styled.p<{
  $level: ParagraphProps['level']
}>(
  ({ theme }) => css`
    color: ${theme.colors.blue800};
    font-family: 'Roboto Slab', serif;
    font-size: clamp(0.875rem, 3vw, 1rem);
    font-weight: 300;
    line-height: 141%;
    letter-spacing: 0.04em;
    margin: 20px 0;

    @container (width < 50ch) {
      font-size: 0.875rem;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }

    ${media.md(
      () => css`
        font-size: clamp(1rem, 3vw, 1.25rem);
        margin: 30px 0;
      `
    )}
  `
)
