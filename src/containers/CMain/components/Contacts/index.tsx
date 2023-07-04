import React, { FC } from 'react'
import {
  SContacts,
  SContactsContent,
  SContactsExtraBackground,
  SContactsInner,
  SContactsShadow,
  SFields,
  SFieldsWrapper,
} from '@containers/CMain/components/Contacts/index.styled'
import { Title } from '@components/Title'
import { Paragraph } from '@components/Paragraph'

export const Contacts: FC = () => {
  return (
    <SContacts id="contacts">
      <SContactsInner>
        <SContactsContent>
          <SContactsExtraBackground />
          <Title level={2}>Contacts</Title>
          <Paragraph>
            Thank you for taking the time to visit my site. I am confident that
            my skills and experience make me an excellent fit for your next web
            development project. Please feel free to explore my work and contact
            me if you have any questions or would like to discuss potential
            collaboration opportunities.
          </Paragraph>
          <SFieldsWrapper>
            <SFields
              items={[
                'E-mail',
                <a href="mailto:gojeshio@gmail.com" target="_blank">
                  gojeshio@gmail.com
                </a>,
              ]}
              noPoints
            />
            <SFields
              items={[
                'Phone Number',
                <a href="tel:+79527000070" target="_blank">
                  +7 952 700-00-70
                </a>,
                <a href="tel:+998917977615" target="_blank">
                  +998 91-797-76-15
                </a>,
              ]}
              noPoints
            />
            <SFields
              items={[
                'Links',
                'DOWNLOAD RESUME',
                <a
                  href="https://www.linkedin.com/in/georgey-ivanov-4bb287114"
                  target="_blank"
                >
                  LinkedIn
                </a>,
                <a href="https://github.com/jeshio" target="_blank">
                  GitHub
                </a>,
              ]}
              noPoints
            />
          </SFieldsWrapper>
        </SContactsContent>
        <SContactsShadow />
      </SContactsInner>
    </SContacts>
  )
}
