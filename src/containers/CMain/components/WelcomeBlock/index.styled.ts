import styled, { css } from 'styled-components'
import { Button } from '@components/Button'

export const SWelcomeBlock = styled.section(
  () => css`
    position: relative;
    margin: 10px 10px 0;
  `
)

export const SLandscapeImageWrapper = styled.div(
  () => css`
    position: absolute;
    bottom: 0;
    width: 836px;
    right: calc(-346px + 44%);
  `
)

export const SBirdsImageWrapper = styled.div(
  () => css`
    position: absolute;
    width: 86px;
    left: 29px;
    top: 46px;
  `
)

export const SCloud1ImageWrapper = styled.div(
  () => css`
    position: absolute;
    width: 358px;
    right: calc(-370px + 46%);
    top: 22px;
  `
)

export const SCloud2ImageWrapper = styled.div(
  () => css`
    position: absolute;
    width: 114px;
    left: calc(-153px + 42%);
    top: calc(60% - 60px);
    transform: rotate(12.14deg);
  `
)

export const SContent = styled.div(
  () => css`
    position: absolute;
    top: 25%;
    left: calc(-152px + 55%);
    width: 100%;
  `
)

export const SRoleText = styled.h1(
  ({ theme }) => css`
    position: absolute;
    left: 0;
    top: 0;
    font-family: 'Condiment', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 26px;
    letter-spacing: 0.135em;
    text-transform: uppercase;
    color: ${theme.colors.white};
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    transform: matrix(0.98, -0.21, -0.01, 1, 0, 0);
  `
)

export const SNameText = styled.h2(
  ({ theme }) => css`
    position: absolute;
    left: 0;
    top: 0;
    font-family: 'Condiment', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 42px;
    line-height: 64px;
    color: ${theme.colors.white};
    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-12deg);
  `
)

export const SButton = styled(Button)(
  () => css`
    position: absolute;
    font-size: 1.1875rem;
    bottom: 88px;
    left: 50%;
    margin-left: -130px;
    width: 260px;
    height: 55px;
    filter: drop-shadow(-3px 25px 44px rgba(32, 99, 114, 0.39));
    transform: matrix(0.98, -0.2, -0.25, 0.97, 0, 0);
  `
)
