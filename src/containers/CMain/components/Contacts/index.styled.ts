import styled, { css } from 'styled-components'
import { TextList } from '@components/TextList'

export const SContacts = styled.section(
  ({ theme }) => css`
    margin: 0 auto 30px;
    position: relative;

    * {
      color: ${theme.colors.white};
    }
  `
)

export const SContactsInner = styled.div(
  () => css`
    position: relative;
    margin: 0 10px;
  `
)

export const SContactsContent = styled.div(
  () => css`
    border-radius: 0 0 40px 40px;
    overflow: hidden;
    padding: 40px 20px 50px;
    background: linear-gradient(345deg, #3c2a3f 5%, rgba(93, 70, 97, 0) 113%);
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background: linear-gradient(304deg, #59405e 40%, rgba(93, 70, 97, 0) 87%);
    }
  `
)

export const SContactsExtraBackground = styled.div(
  () => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: #624d66;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(287deg, #3c2a3f 14%, rgba(93, 70, 97, 0) 68%);
    }
  `
)

export const SContactsShadow = styled.div(
  () => css`
    position: absolute;
    top: 80%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    border-radius: 0 0 40px 40px;
    box-shadow: 0 35px 100px rgba(0, 0, 0, 0.6);
  `
)

export const SFieldsWrapper = styled.div(
  () => css`
    display: grid;
    grid-gap: 35px;
    grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
    margin-top: 45px;
  `
)

export const SFields = styled(TextList)(
  () => css`
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;

    li {
      &:first-child {
        font-weight: 600;
      }
    }

    li + li {
      margin-top: 14px;
    }
  `
)
