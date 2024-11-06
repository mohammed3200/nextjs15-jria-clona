import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DottedSeparator } from './dotted-separator'
import { Navigation } from './navigation'
import { WorkspaceSwitcher } from './workspace-switcher'


export const Sidebar = () => {
  return (
    <aside className='h-full bg-neutral-100 p-4 w-full'>
        <Link href="/" className="flex flex-row items-center px-4 gap-2">
            <Image
                src="/logo.svg"
                alt='logo'
                width={63}
                height={63}
            />
            <p className="text-black lg:text-lg text-center font-black lg:-ml-4  ">Leadership Dashboard</p>
        </Link>
        <DottedSeparator className="my-4" />
        <WorkspaceSwitcher />
        <DottedSeparator className="my-4" />
        <Navigation />
    </aside>
  )
}
