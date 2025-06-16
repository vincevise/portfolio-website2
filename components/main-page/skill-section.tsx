import React from 'react'
import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa'
import { GrMysql } from 'react-icons/gr'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { SiAdobeillustrator, SiAdobephotoshop, SiAdobexd, SiJavascript, SiMongodb, SiPostgresql } from 'react-icons/si'

type Props = {}

const SkillSection = (props: Props) => {
  return (
    <div className="col-span-12 lg:col-span-6 flex   bg-white contianer-border-style p-4  ">
                <div className="w-[40%]">
                  <div className="text-lg lg:text-2xl md:col-span-2   text-left p-2 text-gray-800">
                    Skills
                  </div>
                </div>
                <div className="grid grid-cols-4  gap-2 w-[60%]">
                  {/* Frontend Skills */}
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <SiJavascript className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <RiNextjsFill className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <FaReact className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <FaNodeJs className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <RiTailwindCssFill className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <FaAws className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <SiPostgresql className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <SiMongodb className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <GrMysql className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <SiAdobephotoshop className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <SiAdobeillustrator className="w-full h-full" />
                  </div>
                  <div className="aspect-square border rounded-lg flex items-center justify-center p-5">
                    <SiAdobexd className="w-full h-full" />
                  </div>
                </div>
              </div>
  )
}

export default SkillSection