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
            <SFields items={['E-mail', 'gojeshio@gmail.com']} noPoints />
            <SFields
              items={['Phone Number', '+7 952 700-00-70', '+998 91-797-76-15']}
              noPoints
            />
            <SFields
              items={['Links', 'DOWNLOAD RESUME', 'LinkedIn', 'GitHub']}
              noPoints
            />
          </SFieldsWrapper>
        </SContactsContent>
        <SContactsShadow />
      </SContactsInner>
    </SContacts>
  )
}
