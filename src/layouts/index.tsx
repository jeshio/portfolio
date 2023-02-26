import React, { FC, ReactNode } from 'react'
import {
  GlobalStyles,
  SBottomPlainImage1,
  SBottomPlainImage2,
  SLayout,
  SLeftBackground,
  SPlainImage1,
  SPlainImage2,
  SPlainImage3,
  SRightBackground,
} from './index.styled'
import { ThemeProvider } from 'styled-components'
import { theme } from '@configs/theme'
import { Helmet } from 'react-helmet'

export const Layout: FC<{
  children: ReactNode
}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <meta
        name="viewport"
        content="user-scalable=no, width=device-width, initial-scale=1.0"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Helmet>
    <GlobalStyles />
    <SLayout>
      {children}
      <SPlainImage3 />
      <SPlainImage2 />
      <SPlainImage1 />
      <SLeftBackground />
      <SRightBackground />
      <SBottomPlainImage1 />
      <SBottomPlainImage2 />
    </SLayout>
  </ThemeProvider>
)

export default Layout
