import styled, { css } from 'styled-components'
import { TextList } from '@components/TextList'
import { Title } from '@components/Title'
import { Button } from '@components/Button'

export const SAboutAndSkills = styled.div(() => css``)

export const SAbout = styled.div(
  () => css`
    padding: 40px 20px;
    background: linear-gradient(
      143deg,
      rgba(250, 248, 243, 0.8) 14%,
      rgba(255, 255, 255, 0) 94%
    );
    position: relative;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: #eceae4;
      z-index: -1;
    }
  `
)

export const SSkills = styled.div(
  () => css`
    padding: 40px 20px;
    position: relative;
    background: linear-gradient(297deg, rgba(79, 70, 81, 0) 60%, #674a6a 102%);

    &::before {
      content: '';
      position: absolute;
      z-index: -2;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(319deg, #4f3a52 34%, #654766 95%);
    }

    &::after {
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(
        37deg,
        rgba(93, 71, 96, 0) 38%,
        rgba(35, 26, 61, 0.4) 95%
      );
    }
  `
)

export const SSkillsTitle = styled(Title)(
  ({ theme }) => css`
    color: ${theme.colors.white};
    margin-bottom: 20px;
  `
)

export const STextList = styled(TextList)(
  ({ theme }) => css`
    color: ${theme.colors.white};
    list-style-type: disclosure-closed;
    font-size: 1rem;

    > * {
      padding-left: 7px;
    }

    * {
      font-weight: 300;
    }
  `
)

export const SCloud2ImageWrapper = styled.div(
  () => css`
    position: absolute;
    width: 89px;
    left: -25px;
    bottom: -28px;
    transform: rotate(12.14deg);
    z-index: 1;
  `
)

export const SButton = styled(Button)(
  () => css`
    padding: 0 55px;
    display: block;
    margin: 30px auto 0;
    filter: drop-shadow(10px 15px 40px rgba(22, 19, 22, 0.3));
  `
)
