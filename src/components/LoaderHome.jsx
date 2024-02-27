import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'

export const LoaderHome = () => {
  return (
    <>
        <div className='w-6/12 h-auto bg-blue-chill-100 rounded-xl p-4 flex flex-col gap-2 justify-center items-center'>
        <h2 className='text-blue-chill-950 font-bold text-center'>We are traveling all over the world collecting information from all countries...</h2>
        <MagnifyingGlass className="h-4"></MagnifyingGlass>
        </div>
    </>
  )
}
