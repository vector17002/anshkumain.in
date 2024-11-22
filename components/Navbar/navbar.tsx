import React from 'react'
import { ModeToggle } from '../theme-toggle'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center max-w-4xl w-full py-5 px-8 mt-0 mb-0 md:mt-4 md:mb-10 mx-auto bg-slate-50 dark:bg-zinc-900 bg-opacity-60 sticky-nav'>
        <ModeToggle/>
        <div className='hidden sm:block rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-900/90 dark:text-zinc-200 dark:ring-white/10 gap-5'>
           <Link href={'/#home'} className='relative px-3 inline-block py-2 mx-2 text-sm bg-inherit text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-slate-100'>
             Home
           </Link>
           <Link href={'/#projects'} className='relative px-3 inline-block py-2 text-sm bg-inherit text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-slate-100 mx-2'>
            Projects
           </Link>
           <Link href={'#skills'} className='relative px-3 inline-block py-2 text-sm bg-inherit text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-slate-100 mx-2'>
            Skills
           </Link>
           <Link href={'/#contacts'} className='relative px-3 inline-block py-2 text-sm bg-inherit text-gray-700 dark:text-gray-200 transition-all delay-150 hover:text-gray-900 dark:hover:text-gray-900 hover:bg-slate-100 mx-2'>
            Contact
           </Link>
        </div>
        <div className='flex sm:hidden gap-6 text-gray-500'>
            <Link href={'/#skills'} className='font-semibold'>Skills</Link>
            <Link href={'/#projects'} className='font-semibold'>Projects</Link>
        </div>
    </div>
  )
}

export default Navbar