import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface LayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <div className='w-full h-[calc(100vh-56px)]  border-x mx-auto  bg-white flex shadow mt-[56px]'>
        <div className='w-64 shrink-0 h-full border-r '>
          <div className='text-xl h-14 px-4 flex items-center font-semibold  border-b'>
            {/* UI Library */}
            </div>
          <div className='p-4 space-y-2'>

            <Link href={'/ui-lib'} className='py-1 px-2 text-sm border rounded hover:bg-gray-100 block'>
              Blocks
            </Link>
            <Link href={'/ui-lib/inputs'} className='py-1 px-2 text-sm border rounded hover:bg-gray-100 block'>
              Inputs
            </Link>
            <Link href={'/ui-lib/modal'} className='py-1 px-2 text-sm border rounded hover:bg-gray-100 block'>
              Modal
            </Link>
            <Link href={'/ui-lib/table'} className='py-1 px-2 text-sm border rounded hover:bg-gray-100 block'>
              Table
            </Link>
            <Link href={'/ui-lib/popover'} className='py-1 px-2 text-sm border rounded hover:bg-gray-100 block'>
              Popover
            </Link>
          </div>
        </div>
        <div className='w-[calc(100vw-256px)] h-[calc(100vh-56px)] flex    bg-white '>
          
            {children}
            {/* <PageHeader/> */}
        </div>
       </div>
    );
}