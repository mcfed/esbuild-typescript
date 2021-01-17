import React, { ReactNode } from 'react'
import { RFBreadcrumbs } from './breadcrumbs'
import { RFContent } from './content'
import { Header } from './header'
import { RFLayout } from './Layout'
import { RFSider} from './sider'



export interface PWorkBench{
    children:ReactNode
}

export default function WorkBench(props: PWorkBench) {
  return (
      <RFLayout direction="column">
        <Header title="sdfs"></Header>
        <RFLayout direction="row">
          <RFSider menu={[]}></RFSider>
          <RFLayout direction="column">
            <RFBreadcrumbs></RFBreadcrumbs>
            <RFContent></RFContent>
          </RFLayout>
        </RFLayout>
      </RFLayout>
  )
}
