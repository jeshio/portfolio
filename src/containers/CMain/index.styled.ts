import styled, { css } from 'styled-components'

export const SCMain = styled.div(
  ({ theme }) => css`
    filter: drop-shadow(0px 0px 100px rgba(0, 0, 0, 0.17));
    margin: 0 auto;
    max-width: var(${theme.cssVarNames.globalBlockMaxWidth});
    padding: var(${theme.cssVarNames.globalBlockMargin});
  `
)
