import styled, { css } from 'styled-components'
import { media } from '@helpers/media'

export const SButton = styled.button(
  ({ theme }) => css`
    display: block;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 22px;
    letter-spacing: 0.135em;
    background: ${theme.colors.orange100};
    color: ${theme.colors.white};
    border-radius: 2px;
    text-transform: uppercase;
    border: none;
    padding: 10px 50px;
    cursor: pointer;

    ${media.md(
      () => css`
        font-size: 1.25rem;
        padding: 14px 66px;
      `
    )}

    ${media.xl(
      () => css`
        font-size: 1.5rem;
        padding: 20px 66px;
      `
    )}
  `
)
