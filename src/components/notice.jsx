import React from 'react'
import { Icon } from '@iconify/react';

export default function Notice({ title, detail }) {
  return (
    <div className='flex justify-center items-center gap-5 border border-yellow-600 px-6 sm:px-24 py-3 sm:py-5'>
      <div className='flex justify-center '>
        <Icon icon="fluent:megaphone-loud-16-regular" className='text-5xl text-yellow-600' />
      </div>
      <div className=''>
        <b>{title}</b> 
        <p>{detail}</p>
      </div>
    </div>
  )
}
