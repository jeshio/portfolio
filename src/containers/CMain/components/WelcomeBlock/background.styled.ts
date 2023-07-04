import styled, { css } from 'styled-components'
import { media } from '@helpers/media'

export const SBackgroundContainer = styled.div(
  () => css`
    position: relative;
    overflow: hidden;
    height: calc(100vh - 10px);
    min-height: 575px;
    max-height: 670px;
    border-radius: 40px 40px 0 0;

    ${media.md(
      () => css`
        height: calc(100vh - 20px);
        min-height: 732px;
        max-height: 837px;
      `
    )}

    ${media.lg(
      () => css`
        height: calc(100vh - 35px);
        min-height: 850px;
        max-height: 1020px;
      `
    )}

    ${media.xl(
      () => css`
        min-height: 900px;
        max-height: 1100px;
      `
    )}
  `
)

export const SRadialDummy = styled.div(
  () => css`
    position: absolute;
    width: 268%;
    height: 1262px;
    left: -93px;
    top: -32px;
    background: radial-gradient(
      48% 41% at 4% 4%,
      #0e4c64 0%,
      rgba(163, 223, 191, 0) 100%
    );
  `
)

export const SRadialDummy2 = styled.div(
  () => css`
    position: absolute;
    width: 190%;
    height: 642px;
    left: -13px;
    top: -32px;
    background: radial-gradient(
      59% 40% at 37% 12%,
      rgba(13, 54, 70, 0.291) 0%,
      rgba(29, 78, 86, 0) 100%
    );

    ${media.lg(
      () => css`
        height: 1090px;
      `
    )}
  `
)

export const SLinearDummy = styled.div(
  () => css`
    position: absolute;
    width: 190%;
    left: -13px;
    bottom: 50px;
    top: -32px;
    background: linear-gradient(
      272deg,
      rgba(150, 244, 198, 0.1) 19.9%,
      rgba(75, 164, 155, 0.1) 95.2%
    );
  `
)

export const SBackground = styled.div(
  () => css`
    background: linear-gradient(145.35deg, #349fa3 -15.06%, #96ffd3 26.83%);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 60px;
    z-index: -1;

    &::after {
      content: '';
      position: absolute;
      width: 190%;
      height: 642px;
      left: -13px;
      top: -32px;
      background: linear-gradient(
        165.69deg,
        #23a8a0 13.94%,
        rgba(163, 223, 191, 0) 46.89%
      );
    }

    ${media.lg(
      () => css`
        &::after {
          height: 850px;
        }
      `
    )}
  `
)
