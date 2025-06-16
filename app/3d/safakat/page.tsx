"use client";
import CanteenFPV from "@/components/3d/canteen";
import CanteenSidebar from "@/components/3d/canteen/canteen-sidebar";
import BasicScene from "@/components/3d/fpv/basic-scene";
import MassHousingFPV from "@/components/3d/masshousing";
import MasshousingSidebar from "@/components/3d/masshousing/masshousing-sidebar";
import ResidenceFPV from "@/components/3d/residence";
import ResidenceSidebar from "@/components/3d/residence/residence-sidebar";
import SafakatFPV from "@/components/3d/safakathouse";
import SafakatHouseSidebar from "@/components/3d/safakathouse/safakathouse-sidebar";
import SidebarArchitecture from "@/components/3d/sidebar";
import PageContainer from "@/components/ui-components/page-container";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <PageContainer>
        <SidebarArchitecture title="Safakat">
          <SafakatHouseSidebar />
        </SidebarArchitecture>
        <BasicScene
          camera_position={[-7, 22, -15]}
          showToggleFPV={true}
        >
          <SafakatFPV />
        </BasicScene>
      </PageContainer>
    </>
  );
};

export default page;
