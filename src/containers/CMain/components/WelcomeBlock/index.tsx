import React from 'react'
import {
  SBirdsImageWrapper,
  SButton,
  SCloud1ImageWrapper,
  SCloud2ImageWrapper,
  SContent,
  SLandscapeImageWrapper,
  SNameText,
  SRoleText,
  SWelcomeBlock,
} from './index.styled'
import { StaticImage } from 'gatsby-plugin-image'
import {
  SBackgroundContainer,
  SBackground,
  SLinearDummy,
  SRadialDummy,
  SRadialDummy2,
} from './background.styled'

export const WelcomeBlock = () => (
  <SWelcomeBlock>
    <SBackgroundContainer>
      <SBackground />
      <SRadialDummy />
      <SRadialDummy2 />
      <SLinearDummy />
    </SBackgroundContainer>
    <SCloud1ImageWrapper>
      <StaticImage
        src="../../images/cloud-1.png"
        alt="Big Cloud"
        placeholder="blurred"
        breakpoints={[358]}
        quality={90}
      />
    </SCloud1ImageWrapper>
    <SBirdsImageWrapper>
      <StaticImage
        src="../../images/birds.png"
        alt="Birds"
        placeholder="blurred"
        breakpoints={[358]}
        quality={90}
      />
    </SBirdsImageWrapper>
    <SCloud2ImageWrapper>
      <StaticImage
        src="../../images/cloud-2.png"
        alt="Small Cloud"
        placeholder="blurred"
        breakpoints={[115]}
        quality={90}
      />
    </SCloud2ImageWrapper>
    <SLandscapeImageWrapper>
      <StaticImage
        src="../../images/landscape.png"
        alt="Senior Frontend Developer Landscape"
        placeholder="blurred"
        breakpoints={[836]}
        quality={100}
      />
    </SLandscapeImageWrapper>
    <SContent>
      <SRoleText>senior frontend developer</SRoleText>
      <SNameText>Georgey Ivanov</SNameText>
    </SContent>
    <SButton>Take a look→</SButton>
  </SWelcomeBlock>
)
