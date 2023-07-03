import styled, { css } from 'styled-components'
import { Button } from '@components/Button'
import { breakpoints } from '@helpers/media'

export const SOverviewMedium = styled.section(
  ({ theme }) => css`
    padding: var(${theme.cssVarNames.globalBlockPadding});
    background: linear-gradient(135deg, #55baad 5%, rgba(88, 197, 183, 0) 76%);
    position: relative;
    margin: var(${theme.cssVarNames.globalBlockMargin});

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

export const SContent = styled.div(
  () => css`
    position: relative;
    z-index: 1;
    display: flex;
    margin: 110px 0;
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
      bottom: -68px;
    }
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
  `
)

export const SButton = styled(Button)(
  () => css`
    padding: 0 55px;
    display: block;
    margin: 50px auto 0;
    filter: drop-shadow(-3px 25px 80px rgba(20, 125, 112, 0.8));
  `
)
