"use client";

import Chip from "@/components/ui-components/chip";
import ChipsInputSearch from "@/components/ui-components/inputs/chips-input-search";
import ItemContainer from "@/components/ui-components/item-container";
import Image from "next/image";
import React from "react";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS

const objects = [ 
    {src:'/objects/origami-1.png',label:'1 ADS-1', className:'w-full h-full object-contain'},
    {src:'/objects/origami-2.png',label:'1 ADS-2', className:'w-full h-full object-contain'},
    {src:'/objects/origami-3.png',label:'1 ADS-3', className:'w-full h-full object-contain'},
    {src:'/objects/origami-4.png',label:'1 ADS-4', className:'w-full h-full object-contain'},

    // the smoke
    {src:'/objects/abd-1.png',label:'2 BD-1', className:'w-full h-full object-contain p-3'},
     {src:'/objects/bd-8.png',label:'2 BD-2', className:'w-full h-full object-contain p-4'},
    {src:'/objects/bd-9.png',label:'2 BD-3', className:'w-full h-full object-contain p-5'},

    {src:'/objects/bd-1.png',label:'1 BD-1', className:'w-full h-full object-contain p-7'},
    {src:'/objects/bd-3.png',label:'1 BD-2', className:'w-full h-full object-contain'},
    {src:'/objects/bd-2.png',label:'1 BD-3', className:'w-full h-full object-contain p-4'},
    {src:'/objects/bd-10.png',label:'1 BD-10', className:'w-full h-full object-contain p-4'},
    {src:'/objects/bd-5.png',label:'1 BD-4', className:'w-full h-full object-contain p-4'},
    {src:'/objects/bd-6.png',label:'1 BD-5', className:'w-full h-full object-contain p-4'},
    {src:'/objects/bd-7.png',label:'1 BD-6', className:'w-full h-full object-contain p-4'},
   
    {src:'/objects/blocks-1.png',label:'BLOCKS 1', className:'w-full h-full object-contain'},
    {src:'/objects/blocks-2.png',label:'BLOCKS 2', className:'w-full h-full object-contain p-6'},
    {src:'/objects/blocks-3.png',label:'BLOCKS 3', className:'w-full h-full object-contain p-2'},
    {src:'/objects/blocks-4.png',label:'BLOCKS 4', className:'w-full h-full object-contain p-4'},
   
]

 

// Explicitly define the component return type
export default function Page(): React.ReactElement {
  return (
    <React.StrictMode>
      <div
        className="px-10 lg:px-0 space-y-4 mt-12 py-8"
        // style={backgroundgrid}
      >
        

        <div className="w-full px-4 max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12">
          {objects.map((x)=>{
            return (<div className="aspect-square rounded-lg bg-black  flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-3 p-4 relative" key={`object-key-${x.label}`}>
                {/* <Chip value=""/> */}
                <div className='inline-block absolute left-3 top-3 bg-white border border-gray-500 text-sm rounded-md px-[10px] py-[3px] z-[40]'>
              {x.label}
          </div>
                <Image src={x.src} className={x.className} alt={x.src} width={100} height={100} />
            </div>)
          })}
        </div>
      </div>
    </React.StrictMode>
  );
}