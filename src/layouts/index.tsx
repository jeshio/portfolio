import React, { FC, ReactNode } from 'react'
import {
  GlobalStyles,
  SLayout,
  SLeftBackground,
  SPlainImage1,
  SPlainImage2,
  SPlainImage3,
  SRightBackground,
} from './index.styled'
import { ThemeProvider } from 'styled-components'
import { theme } from '@configs/theme'

export const Layout: FC<{
  children: ReactNode
}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <SLeftBackground />
    <SRightBackground />
    <SPlainImage3 />
    <SPlainImage2 />
    <SPlainImage1 />
    <SLayout>{children}</SLayout>
  </ThemeProvider>
)

export default Layout
