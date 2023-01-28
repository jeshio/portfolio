import React, {FC, ReactNode} from 'react'
import {SLayout} from './index.styled'

export const Layout: FC<{
  children: ReactNode
}> = ({children}) => <SLayout>{children}</SLayout>

export default Layout
