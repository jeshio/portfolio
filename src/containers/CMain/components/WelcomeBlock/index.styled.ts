import styled, { css } from 'styled-components'
import { Button } from '@components/Button'
import { breakpoints, media } from '@helpers/media'

export const SWelcomeBlock = styled.section(
  () => css`
    position: relative;
    margin-top: 10px;

    @media (max-width: ${breakpoints.md - 1}px) {
      padding: 0 10px;
    }

    ${media.md(
      () => css`
        margin-top: 20px;
      `
    )}

    ${media.lg(
      () => css`
        margin-top: 35px;
      `
    )}
  `
)

export const SLandscapeImageWrapper = styled.div(
  () => css`
    position: absolute;
    bottom: 0;
    width: 836px;
    right: calc(-346px + 44%);

    ${media.md(
      () => css`
        width: 1075px;
        right: calc(58% - 591px);
      `
    )}

    ${media.lg(
      () => css`
        width: 1382px;
        right: calc(58% - 755px);
      `
    )}
  `
)

export const SBirdsImageWrapper = styled.div(
  () => css`
    position: absolute;
    width: 86px;
    left: 29px;
    top: 46px;

    ${media.md(
      () => css`
        width: 127px;
        top: 105px;
        left: 69px;
      `
    )}

    ${media.lg(
      () => css`
        width: 154px;
        top: 116px;
        left: 119px;
      `
    )}
  `
)

export const SCloud1ImageWrapper = styled.div(
  () => css`
    position: absolute;
    width: 358px;
    right: calc(-370px + 46%);
    top: 22px;

    ${media.md(
      () => css`
        width: 488px;
        right: calc(-551px + 46%);
        top: 48px;
      `
    )}

    ${media.lg(
      () => css`
        width: 537px;
        right: calc(-551px + 46%);
        top: 48px;
      `
    )}
  `
)

export const SCloud2ImageWrapper = styled.div(
  () => css`
    position: absolute;
    width: 114px;
    left: calc(-153px + 42%);
    top: calc(60% - 60px);
    transform: rotate(12.14deg);

    ${media.md(
      () => css`
        display: none;
      `
    )}
  `
)

export const SContent = styled.div(
  () => css`
    position: absolute;
    top: 25%;
    left: calc(34vw - 77px);
    width: 100%;

    ${media.md(
      () => css`
        top: 24%;
        left: calc(27vw - 98px);
      `
    )}

    ${media.lg(
      () => css`
        top: 26%;
        left: clamp(0px, calc(28vw - 128px), 430px);
      `
    )}
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

    ${media.md(
      () => css`
        font-size: 18px;
        font-family: 'Courgette', cursive;
        text-transform: lowercase;
        left: 210px;
        top: -18px;
      `
    )}

    ${media.lg(
      () => css`
        font-size: 24px;
        left: 268px;
        top: -30px;
      `
    )}
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

    ${media.md(
      () => css`
        font-size: 60px;
      `
    )}

    ${media.lg(
      () => css`
        font-size: 78px;
      `
    )}
  `
)

export const SButton = styled(Button)(
  () => css`
    position: absolute;
    font-size: 1.1875rem;
    bottom: 88px;
    left: calc(50% - 130px);
    width: 260px;
    height: 55px;
    filter: drop-shadow(-3px 25px 44px rgba(32, 99, 114, 0.39));
    transform: matrix(0.98, -0.2, -0.25, 0.97, 0, 0);
    padding: 0;

    ${media.md(
      () => css`
        left: calc(44vw - 227px);
        bottom: 320px;
        font-size: 1.375rem;
      `
    )}

    ${media.lg(
      () => css`
        bottom: 380px;
        font-size: 1.5rem;
      `
    )}

    ${media.xl(
      () => css`
        font-size: 1.8rem;
        left: calc(50% - 346px);
        width: 320px;
        height: 60px;
      `
    )}
  `
)
