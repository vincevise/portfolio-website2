"use client";
import { motion } from "framer-motion";

import AestheticScene from "@/components/3d/aesthetic";
import ContactGrid from "@/components/main-page/contact-grid";
import CvSection from "@/components/main-page/cv-section";
import BangaloreMap from "@/components/main-page/geo-location";
import ObjectSection from "@/components/main-page/object-section";
import SkillSection from "@/components/main-page/skill-section";
import ItemContainer from "@/components/ui-components/item-container";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

// Explicitly define the component return type
export default function Page(): React.ReactElement {
  return (
    <React.StrictMode>
      <div
        className="px-4 lg:px-10  space-y-4 mt-12 py-8"
        // style={backgroundgrid}
      >
        <div className="w-full  max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
          <div className="w-full col-span-12 grid sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 gap-6">
            <div className="col-span-6 grid grid-cols-3 lg:grid-cols-6  gap-6">
              <ItemContainer>
                <div className="w-full h-full flex flex-col gap-2 justify-between items-start text-left  p-4">
                  <Image
                    src={"/dp2.png"}
                    alt="my dp"
                    className="w-28  h-auto object-contain"
                    width={100}
                    height={100}
                  />
                  <p className="">
                    I'm <strong>Vuram Vincent</strong> , a developer with an
                    architectural background from Bangalore. I'm interested in
                    Full Stack Development, UI/UX Design, Architecture, Creative
                    Coding, Spatial Design, and Art.
                  </p>
                </div>
              </ItemContainer>
                <BangaloreMap />
              <ContactGrid/>
            </div>

            <CvSection />
          </div>
          <div className="col-span-12 lg:col-span-3 group relative">
            <Link className="w-full block h-full relative " href={"/work"}>
            <motion.div whileHover={{ scale: 1.1 }} className="cursor-pointer">
              <div className="text-xl font-medium text-black absolute top-6 left-6">
                  WORK
              </div>
              
                <Image
                  alt="urban"
                  className="w-full h-full object-contain p-6 group-hover:p-0 transition-all duration-300"
                  width={300}
                  height={300}
                  src={"/3d/urban/urban.png"}
                />
            </motion.div>
            </Link>
          </div>

           <SkillSection/>

          <ObjectSection/>
          <div className="col-span-12 contianer-border-style">
            <AestheticScene />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
