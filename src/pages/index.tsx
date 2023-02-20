import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import { CMain } from '@containers/CMain'

const IndexPage: React.FC<PageProps> = () => {
  return <CMain />
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
