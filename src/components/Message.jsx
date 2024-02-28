import React from 'react'

export const Message = React.memo(({message}) => {
    console.log("dibujando mensaje");
    console.log(message);
  return (
   <>
   <div className='h-auto flex flex-col gap-6 justify-center items-center'>
   <h2 className='text-2xl font-semibold text-blue-chill-50'>{message}</h2>
   <img className='h-20 w-20 animate-bounce' src="./public/imgs/thinking.png" alt="" />
   </div>
   </>
  )
}
)