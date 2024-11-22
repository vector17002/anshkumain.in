import React from 'react'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div id='contacts' className='mt-10 w-full flex flex-col gap-5  text-neutral-500 dark:text-neutral-400 font-medium text-sm'>
      <Separator className='mt-20 bg-neutral-500 dark:bg-neutral-500'/>
      <div className='flex justify-around items-start'>
        <div className='flex flex-col items-start gap-5'>
          <Link href={'/'}>
            Home
          </Link>
          <Link href={'/#projects'}>
            Projects
          </Link>
          <Link href={'/#skills'}>
            Skills
          </Link>
          <Link href={'/#experience'}>
            Experience
          </Link>
        </div>
        <div className='flex flex-col items-start gap-5'>
          <Link href={'https://github.com/vector17002'} target='_blank'>
            Github
          </Link>
          <Link href={'https://www.linkedin.com/in/ansh-kumain/'} target='_blank'>
            LinkedIn
          </Link>
          <Link href={'https://x.com/ansh_kumain'} target='_blank'>
            Twitter
          </Link>
          <Link href={'https://leetcode.com/vector17002'} target='_blank'>
            Leetcode
          </Link>
        </div>
        <div className='flex flex-col items-start gap-5'>
            <a href='https://mail.google.com/mail/?view=cm&to=anshk17002@gmail.com' target='_blank' className='flex gap-2 items-center'> <MdEmail className='h-4 w-4'/>
              <p>Email me</p> </a>
              <a href='https://wa.me/9625400635' target='_blank' className='flex gap-2 items-center'> <BsWhatsapp className='h-4 w-4'/>
              <p>Whatsapp me</p> </a>
        </div>
      </div>
    </div>
  )
}

export default Footer