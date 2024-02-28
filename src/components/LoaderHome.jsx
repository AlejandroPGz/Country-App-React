import React, { useEffect, useRef } from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'
import { Bounce, Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notifySucess = () => {
  toast.success(`🛩️ We've done our research, now you can search for any country you want. Try it with "Venezuela "!`, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
}

export const LoaderHome = React.memo(({isLoading}) => {
  console.log("redibujo");
    const toastId = React.useRef(null);
    const notifySearch = () => {
      toastId.current = toast.info(`🧭 We are traveling all over the world collecting information from all countries...`, {
        position: "top-center",
        autoClose: false,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: 0,
        theme: "light",
        transition: Flip,
        });
    }

    return (
    <>
    {isLoading 
    ?
    <ToastContainer>
    {notifySearch()}
    {console.log(toastId.current)}
    </ToastContainer>
    :
    <ToastContainer>
      {setTimeout(() => {
        toast.dismiss(toastId.current)
      }, 2000)}
      {
      setTimeout(() => {
        notifySucess()        
      }, 2500)
      }
    </ToastContainer>
  }
    </>
  )
}
)
{/* <div id='divSucess' className='w-6/12 h-auto bg-blue-chill-100 rounded-2xl p-4 flex flex-col gap-2 justify-center items-center shadow-2xl animate-entrar transition duration-1000 ease-in'>
        <h2 className='text-blue-chill-950 font-bold text-center'>We've done our research, now you can search for any country you want. Try it with "Venezuela"</h2>
        <svg viewBox="0 0 1024 1024" className="h-20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M200.5 484.7H77.4l-0.9-168h43.8z" fill="#bfe0e2"></path><path d="M897 652.7H245.5c-92.8 0-168-75.2-168-168h725.6c93.4 0 146.4 51.7 146.4 115.4 0 29-23.5 52.6-52.5 52.6z" fill="#f2f9f9"></path><path d="M124.4 600.7c30.6 31.8 73.5 51.6 121.2 51.6H897c28.7 0 52-23 52.5-51.6H124.4z" fill="#FFACC2"></path><path d="M776.5 513.7h32v42h-32z" fill="#FFFFFF"></path><path d="M808.5 562.7h-32c-4.4 0-8-3.1-8-7v-42c0-3.9 3.6-7 8-7h32c4.4 0 8 3.1 8 7v42c0 3.8-3.5 7-8 7z m-24-14h16v-28h-16v28z" fill="#9A2D2F"></path><path d="M214.5 555.7h-20c-3.3 0-6-2.7-6-6v-30c0-3.3 2.7-6 6-6h20c3.3 0 6 2.7 6 6v30c0 3.3-2.6 6-6 6z" fill="#FFFFFF"></path><path d="M214.5 562.7h-20c-7.7 0-14-5.5-14-12.2V519c0-6.8 6.3-12.2 14-12.2h20c7.7 0 14 5.5 14 12.2v31.5c0 6.7-6.2 12.2-14 12.2z m-18-14h16v-28h-16v28zM731.5 521.7h-4c-3.3 0-6 2.7-6 6v8c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-8c0-3.3-2.6-6-6-6zM700.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM669.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM638.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM607.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM577.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM546.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM515.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM298.5 521.7h-4c-3.3 0-6 2.2-6 5v10c0 2.8 2.7 5 6 5h4c3.3 0 6-2.2 6-5v-10c0-2.8-2.6-5-6-5zM267.5 521.7h-4c-3.3 0-6 2.7-6 6v8c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6v-8c0-3.3-2.6-6-6-6z" fill="#9A2D2F"></path><path d="M950.5 821.7c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.5 8-8 8zM950.5 771.7c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.5 8-8 8zM241.6 259.6c-12.9 0-19.2-10.1-23.8-17.4-4.3-6.9-6.5-9.9-10.2-9.9s-5.9 3-10.2 9.9c-4.6 7.3-10.9 17.4-23.8 17.4s-19.2-10.1-23.8-17.4c-4.3-6.9-6.5-9.9-10.2-9.9s-5.9 3-10.2 9.9c-4.6 7.3-10.9 17.4-23.8 17.4s-19.2-10.1-23.8-17.4c-4.3-6.9-6.5-9.9-10.2-9.9-4.4 0-8-3.6-8-8s3.6-8 8-8c12.9 0 19.2 10.1 23.8 17.4 4.3 6.9 6.5 9.9 10.2 9.9s5.9-3 10.2-9.9c4.6-7.3 10.9-17.4 23.8-17.4s19.2 10.1 23.8 17.4c4.3 6.9 6.5 9.9 10.2 9.9 3.7 0 5.9-3 10.2-9.9 4.6-7.3 10.9-17.4 23.8-17.4s19.2 10.1 23.8 17.4c4.3 6.9 6.5 9.9 10.2 9.9 4.4 0 8 3.6 8 8s-3.6 8-8 8zM263.5 209.6c-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-5 0-7.5 3-12.7 10.2-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2s-7.5 3-12.7 10.2c-5.1 7.2-12 17-25.7 17-13.8 0-20.7-9.8-25.7-17-5.1-7.3-7.7-10.2-12.7-10.2-4.4 0-8-3.6-8-8s3.6-8 8-8c13.8 0 20.7 9.8 25.7 17 5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 5 0 7.5-3 12.7-10.2 5.1-7.2 12-17 25.7-17s20.7 9.8 25.7 17c5.1 7.3 7.7 10.2 12.7 10.2 4.4 0 8 3.6 8 8s-3.5 8-8 8z" fill="#9A2D2F"></path><path d="M350.1 82m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#bfe0e2"></path><path d="M350.1 122c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z m0-64c-13.2 0-24 10.8-24 24s10.8 24 24 24 24-10.8 24-24-10.7-24-24-24zM926.5 957.7h-824c-4.4 0-8-3.6-8-8s3.6-8 8-8h824c4.4 0 8 3.6 8 8s-3.5 8-8 8z" fill="#9A2D2F"></path><path d="M233 492.7c4 9.7 20 21.4 47.5 19.2 65.5-5.2 131.9-13.6 204-9.2 136.5 8.2 231.1 1.5 272.6-2 15.8-1.3 48.4-3.5 62.9-7.4-5.5-0.4-11.1-0.6-16.9-0.6H233z" fill="#FFFFFF"></path><path d="M656.3 652.2H456.4l-194.1-203h56.3z" fill="#FFACC2"></path><path d="M701.3 684.7h-70c-8.8 0-16-7.2-16-16v-28c0-8.8 7.2-16 16-16h70c8.8 0 16 7.2 16 16v28c0 8.8-7.2 16-16 16z" fill="#CAE8FF"></path><path d="M916.5 512.4c-27.9-23.3-67.1-35.7-113.4-35.7H379.9l-57.1-34.4c-1.2-0.7-2.7-1.1-4.1-1.1h-56.3c-3.2 0-6.1 1.9-7.4 4.9-1.3 2.9-0.6 6.4 1.6 8.7l21 22h-72.2l-78-163.8c-1.4-2.6-4.1-4.2-7-4.2H76.5c-2.1 0-4.2 0.8-5.7 2.4-1.5 1.5-2.3 3.6-2.3 5.7l0.9 168c0 0.4 0 0.8 0.1 1.2 0.7 96.5 79.4 174.8 176 174.8h361.8v8c0 13.2 10.8 24 24 24h70c13.2 0 24-10.8 24-24v-8H897c33.4 0 60.6-27.2 60.6-60.6-0.1-34.6-14.6-65.8-41.1-87.9z m-113.4-19.7c42.5 0 78.2 11 103.1 31.9 20.9 17.5 33.1 41.4 35 68.1H572.8l-85.7-51.5c2-0.8 3.4-2.5 3.4-4.5v-10c0-2.8-2.7-5-6-5h-4c-3.3 0-6 2.2-6 5v6.9l-68-40.9h396.6z m-718.5-168h31l71.6 152H85.4l-0.8-152z m1.1 168H292.8l28.9 30.2c-1.3 0.9-2.1 2.3-2.1 3.8v10c0 2.8 2.7 5 6 5h4c3.1 0 5.6-1.9 5.9-4.4l53 55.4H127.6c-24.4-26.7-40-61.6-41.9-100z m222.6 151.6h-62.8c-37.2 0-72.3-12.5-100.7-35.6h258.8l34.2 35.7-129.5-0.1z m299-3.6v3.5H459.8L281 457.2h35.4l292.2 175.7c-0.8 2.4-1.3 5-1.3 7.8z m102 28c0 4.4-3.6 8-8 8h-70c-4.4 0-8-3.6-8-8v-28c0-4.4 3.6-8 8-8h70c4.4 0 8 3.6 8 8v28zM897 644.3l-171.7 0.4v-4c0-13.2-10.8-24-24-24h-70c-4.6 0-8.9 1.3-12.6 3.6l-19.3-11.6h341.1c-4.1 20.2-22.2 35.6-43.5 35.6z" fill="#9A2D2F"></path></g></svg>
     </div> */}

    //  <div className='w-6/12 h-auto rounded-xl p-4 flex flex-col gap-2 justify-center items-center'>
    // <h2 className='text-blue-chill-50 font-bold text-center'>We are traveling all over the world collecting information from all countries...</h2>
    // <MagnifyingGlass className="h-4"></MagnifyingGlass>
    // </div> 