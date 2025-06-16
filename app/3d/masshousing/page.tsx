"use client";
import CanteenFPV from "@/components/3d/canteen";
import CanteenSidebar from "@/components/3d/canteen/canteen-sidebar";
import BasicScene from "@/components/3d/fpv/basic-scene";
import MassHousingFPV from "@/components/3d/masshousing";
import MasshousingSidebar from "@/components/3d/masshousing/masshousing-sidebar";
import SidebarArchitecture from "@/components/3d/sidebar";
import PageContainer from "@/components/ui-components/page-container";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <PageContainer>
        <SidebarArchitecture title="Mass Housing">
          <MasshousingSidebar />
        </SidebarArchitecture>
        <BasicScene
          camera_position={[20, 80, 40]}
          showToggleFPV={false}
        >
          <MassHousingFPV />
        </BasicScene>
      </PageContainer>
    </>
  );
};

export default page;
