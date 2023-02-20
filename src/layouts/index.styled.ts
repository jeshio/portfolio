import styled, { createGlobalStyle, css } from 'styled-components'
import PlainImage from '../images/background-plain.svg'

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    min-width: 360px;
    max-width: 767px;
  }
  
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    position: relative;
  }
`

export const SLayout = styled.div(
  () => css`
    z-index: 1;
    position: relative;
  `
)

export const SPlainImage1 = styled.div(
  () => css`
    background: url('${PlainImage}');
    width: 1075px;
    height: 860px;
    position: absolute;
    left: 88px;
    top: -175px;
  `
)

export const SPlainImage2 = styled.div(
  () => css`
    background: url('${PlainImage}');
    position: absolute;
    width: 1174px;
    height: 939px;
    left: 23px;
    top: -174px;
    opacity: 0.3;
  `
)

export const SPlainImage3 = styled.div(
  () => css`
    background: url('${PlainImage}');
    position: absolute;
    width: 1399px;
    height: 1420px;
    left: -201px;
    top: -225px;
    opacity: 0.1;
  `
)

export const SBackground = styled.div(
  () => css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
  `
)

export const SLeftBackground = styled(SBackground)(
  () => css`
    background: linear-gradient(to bottom, #54a395, #01525e);
  `
)

export const SRightBackground = styled(SBackground)(
  () => css`
    background: linear-gradient(to bottom, #f46736, #8d2a24);
    left: 50%;
  `
)
