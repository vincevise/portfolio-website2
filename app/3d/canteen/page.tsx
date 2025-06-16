'use client'
import CanteenFPV from '@/components/3d/canteen'
import CanteenSidebar from '@/components/3d/canteen/canteen-sidebar'
import BasicScene from '@/components/3d/fpv/basic-scene'
import SidebarArchitecture from '@/components/3d/sidebar'
import PageContainer from '@/components/ui-components/page-container'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
    <PageContainer>
      <SidebarArchitecture title='Canteen'>
        <CanteenSidebar/>
      </SidebarArchitecture>
     <BasicScene camera_position={[-7, 22, -15]} showToggleFPV={true}>
      <CanteenFPV/>
     </BasicScene>
    </PageContainer>
    </>
  )
}

export default page