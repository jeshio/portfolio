import styled, { css } from 'styled-components'
import { Button } from '@components/Button'
import { breakpoints, media } from '@helpers/media'

export const SOverviewMedium = styled.section(
  ({ theme }) => css`
    padding: var(${theme.cssVarNames.globalBlockPadding});
    background: linear-gradient(135deg, #55baad 5%, rgba(88, 197, 183, 0) 76%);
    position: relative;

    * {
      color: ${theme.colors.white};
    }

    ul {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: #36968a;
      z-index: -1;
    }

    @media (max-width: ${breakpoints.md - 1}px) {
      display: none;
    }
  `
)

export const SBirdsImageWrapper = styled.div(
  () => css`
    position: absolute;
    width: 137px;
    top: 49px;
    right: -11px;

    ${media.lg(
      () => css`
        width: 168px;
      `
    )}

    ${media.xl(
      () => css`
        width: 207px;
        right: -25px;
      `
    )}
  `
)

export const SContent = styled.div(
  () => css`
    position: relative;
    z-index: 1;
    display: flex;
    margin: 110px 0;

    ${media.lg(
      () => css`
        margin: 130px 0 140px;
      `
    )}

    ${media.xl(
      () => css`
        margin: 160px 0 160px;
        padding: 0 50px;
      `
    )}
  `
)

export const STitlesWrapper = styled.div(
  () => css`
    ${media.xl(
      () => css`
        display: flex;
        gap: 15px;
      `
    )}
  `
)

export const SChart = styled.div(
  () => css`
    position: relative;
    flex: 1;
  `
)

export const SYearsList = styled.ul(
  () => css`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;
    display: flex;

    li > div {
      position: absolute;
      bottom: -72px;
    }

    ${media.lg(
      () => css`
        font-size: 20px;
      `
    )}

    ${media.xl(
      () => css`
        font-size: 28px;

        li > div {
          bottom: -92px;
        }
      `
    )}
  `
)

export const SCompaniesList = styled.ul(
  () => css`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;

    && {
      margin-right: 32px;
    }

    li {
      margin-bottom: 40px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    ${media.lg(
      () => css`
        font-size: 20px;
      `
    )}

    ${media.xl(
      () => css`
        font-size: 26px;

        && {
          margin-right: 48px;
        }
      `
    )}
  `
)

export const SWorkingLines = styled(SCompaniesList)(
  () => css`
    && {
      margin-right: 0;
    }

    li {
      display: flex;

      > div {
        position: relative;
      }
    }
  `
)

export const SWorkingLine = styled.div(
  () => css`
    border-bottom: 28px solid #fff;
    position: absolute;
    width: 100%;
    top: -4px;

    ${media.xl(
      () => css`
        border-width: 34px;
      `
    )}
  `
)

export const SRolesList = styled.ul(
  () => css`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    display: flex;

    li::after {
      content: '';
      position: absolute;
      top: -28px;
      border-left: 3px solid #fff;
      bottom: -28px;
    }

    li > div {
      width: 50px;
      position: absolute;
      top: -78px;
    }

    ${media.lg(
      () => css`
        font-size: 16px;
      `
    )}

    ${media.xl(
      () => css`
        font-size: 20px;

        li > div {
          top: -108px;
        }
      `
    )}
  `
)

export const SButton = styled(Button)(
  () => css`
    display: block;
    margin: 50px auto 0;
    filter: drop-shadow(-3px 25px 80px rgba(20, 125, 112, 0.8));
  `
)
