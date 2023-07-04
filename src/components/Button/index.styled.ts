import styled, { css, DefaultTheme } from 'styled-components'
import { media } from '@helpers/media'
import { Link } from 'gatsby'

const ButtonStyle = ({ theme }: { theme: DefaultTheme }) => css`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  width: fit-content;
  text-align: center;
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
  text-decoration: unset;

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

export const SLink = styled(Link)(ButtonStyle)

export const SButton = styled.button(ButtonStyle)
