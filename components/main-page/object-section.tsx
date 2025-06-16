import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdOutlineArrowOutward } from 'react-icons/md'

type Props = {}

const ObjectSection = (props: Props) => {
  return (
    <div className="contianer-border-style col-span-12 lg:col-span-3 bg-white relative group">
            <Link
              href={"/objects"}
              className="p-1.5 bg-white shadow-lg border border-slate-400 text-gray-500 hover:text-gray-800 rounded-full absolute bottom-3 left-3 transform 
  translate-x-[-150%] 
  translate-y-[150%] 
  group-hover:translate-x-0 
      group-hover:translate-y-0 
      hover:border-gray-900 
  transition-all duration-500 drop-shadow-lg "
              // onClick={()=>{
              //   console.log('on click triggering')
              //   if(onClick){
              //     onClick()
              //   }
              //   if(href){
              //     console.log('pusing')
              //     router.push(href)
              //   }
              // }}
            >
              <MdOutlineArrowOutward className="w-6 h-6" />
            </Link>
            <div className="grid grid-cols-4 gap-2 p-3">
              <div className=" col-span-2   aspect-square p-4 border rounded-md cursor-pointer hover:bg-gray-200 ">
                <Image
                  alt="origami-1"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  src={"/main-page/origami-1.png"}
                />
              </div>
              <div className=" col-span-2   aspect-square p-4 border rounded-md cursor-pointer hover:bg-gray-200">
                <Image
                  alt="origami-2"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  src={"/main-page/origami-2.png"}
                />
              </div>
              <div className=" col-span-2   aspect-square p-4 border rounded-md cursor-pointer hover:bg-gray-200">
                <Image
                  alt="origami-3"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  src={"/main-page/origami-3.png"}
                />
              </div>
              <div className=" col-span-2   aspect-square p-4 border rounded-md cursor-pointer hover:bg-gray-200">
                <Image
                  alt="origami-4"
                  width={200}
                  height={200}
                  className="w-full h-full object-contain"
                  src={"/main-page/origami-4.png"}
                />
              </div>
            </div>
          </div>
  )
}

export default ObjectSection