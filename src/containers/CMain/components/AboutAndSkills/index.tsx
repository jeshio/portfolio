import React from 'react'
import {
  SAbout,
  SAboutAndSkills,
  SButton,
  SCloud2ImageWrapper,
  SSkills,
  SSkillsTitle,
  STextList,
} from './index.styled'
import { Title } from '@components/Title'
import { Paragraph } from '@components/Paragraph'
import { StaticImage } from 'gatsby-plugin-image'

export const AboutAndSkills = () => {
  return (
    <SAboutAndSkills id="about">
      <SAbout>
        <SCloud2ImageWrapper>
          <StaticImage
            src="../../images/cloud-2.png"
            alt="Small Cloud"
            placeholder="blurred"
            breakpoints={[115]}
            quality={90}
          />
        </SCloud2ImageWrapper>
        <Title level={2}>About</Title>
        <Paragraph>
          Hello and welcome! My name is Georgey Ivanov and I am a seasoned
          Frontend Developer with 8 years of experience in the industry.
          Throughout my career, I have honed my skills in web technologies such
          as React, JavaScript, TS, Redux, Webpack and other, and have a passion
          for creating engaging, user-friendly web applications.
        </Paragraph>
      </SAbout>
      <SSkills>
        <SSkillsTitle level={2}>Skills</SSkillsTitle>
        <STextList
          items={[
            <div>
              <strong>JavaScript</strong> - 10 years
            </div>,
            <div>
              <strong>React</strong> - 8 years
            </div>,
            <div>
              <strong>Redux</strong> - 6 years
            </div>,
            <div>
              <strong>NodeJS Express</strong> - 5 years
            </div>,
            <div>
              <strong>TypeScript, Apollo GraphQL Client /Server</strong> - 4
              years
            </div>,
          ]}
        />
        <SButton to="#overview">Check it</SButton>
      </SSkills>
    </SAboutAndSkills>
  )
}
