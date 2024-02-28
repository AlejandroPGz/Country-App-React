import React from 'react'

export const Title = React.memo(() => {
  console.log("redibujando");
  return (
   <>
    <div className='w-full h-auto flex justify-center items-center text-center'>
        <h2 className='text-2xl font-bold text-blue-chill-50'>Country Guide</h2>
    </div>
   </>
  )
}
)