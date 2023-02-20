import styled, { css } from 'styled-components'

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
    height: 40px;
    border: none;
  `
)
