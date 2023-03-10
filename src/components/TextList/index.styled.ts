import styled, { css } from 'styled-components'

export const STextList = styled.ul<{
  $noPoints: boolean
}>(
  ({ theme, $noPoints }) => css`
    color: ${theme.colors.blue800};
    font-family: 'Roboto Slab', serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 225%;
    letter-spacing: 0.02em;
    margin: 0;
    padding: 0 0 0 20px;

    ${$noPoints &&
    css`
      list-style: none;
      padding-left: 0;
    `}
  `
)

export const STextListItem = styled.li(() => css``)
