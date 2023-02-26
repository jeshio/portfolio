import styled, { css } from 'styled-components'
import { Button } from '@components/Button'

export const SOverview = styled.section(
  ({ theme }) => css`
    padding: 40px 20px 50px;
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
  `
)

export const SDiagram = styled.div(
  () => css`
    position: relative;
    margin-top: 55px;
    z-index: 1;
  `
)

export const SYearsList = styled.ul(
  () => css`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 20px;

    > * {
      &:nth-child(1) {
        margin-bottom: 60px;
      }

      &:nth-child(2) {
        margin-bottom: 40px;
      }

      &:nth-child(3) {
        margin-bottom: 40px;
      }

      &:nth-child(4) {
        margin-bottom: 40px;
      }

      &:nth-child(5) {
        margin-bottom: 60px;
      }
    }
  `
)

export const SCompanyLine = styled.div(
  ({ theme }) => css`
    width: 25px;
    width: clamp(25px, 10vw, 60px);
    height: 1px;
    background: ${theme.colors.white};
    position: absolute;
    margin-top: 2px;
  `
)

export const SCompaniesList = styled.ul(
  () => css`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
    position: absolute;
    top: -18px;
    left: 60px;
    right: 60px;
    container-type: inline-size;

    > * {
      &:nth-child(1) {
        margin-bottom: 114px;
        margin-left: 2cqw;

        ${SCompanyLine} {
          height: 120px;
        }
      }

      &:nth-child(2) {
        margin-bottom: 72px;
        margin-left: calc(min(81px + 27cqw, 61cqw) - 75px);

        ${SCompanyLine} {
          &:nth-child(1) {
            height: 54px;
          }

          &:nth-child(2) {
            margin-top: 139px;
            height: 30px;
          }
        }
      }

      &:nth-child(3) {
        margin-bottom: 71px;
        margin-left: calc(min(66px + 60cqw, 84cqw) - 75px);

        ${SCompanyLine} {
          height: 43px;
        }
      }

      &:nth-child(4) {
        margin-left: calc(98cqw - 65px);

        ${SCompanyLine} {
          height: 75px;
        }
      }
    }
  `
)

export const SRolesList = styled.ul(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 60px;
    right: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;

    && {
      padding-top: 3px;
    }

    hr {
      border-top: 2px solid ${theme.colors.white};
      margin: 0;
    }

    li > div {
      position: relative;
    }

    li > div > div {
      max-width: 70px;
      text-align: right;
      position: absolute;
      right: 0;
      top: -36px;
    }

    li {
      &:nth-child(1) {
        margin-bottom: 130px;
      }

      &:nth-child(2) {
        margin-bottom: 88px;
      }

      &:nth-child(3) {
        margin-bottom: 87px;
      }

      &:nth-child(4) {
        margin-bottom: 45px;
      }
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
