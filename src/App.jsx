import React, { Fragment } from 'react'
import { useApi } from './hooks/useApi'
import { LoaderHome } from './components/LoaderHome';
import { MagnifyingGlass } from 'react-loader-spinner';
import { LoadedSucessHome } from './components/LoadedSucessHome';

export const App = () => {

  const {data, isLoading, errors} = useApi("https://jsonplaceholder.typicode.com/users")

  
  return (
    <>
    <div className='bg-blue-chill-600 h-screen w-full flex flex-col justify-center items-center gap-4'>
      <div className='w-full h-auto flex justify-center items-center text-center'>
          <h2 className='text-2xl font-bold text-blue-chill-50'>Country Guide</h2>
      </div>
      <div className='w-full h-auto flex flex-col gap-2 justify-center items-center'>
        <form className='w-6/12 h-20 flex justify-center items-center' action="">
          <input disabled={isLoading ? true : false} placeholder='Search for a country' className='w-full rounded-xl p-2 shadow-md border-0 focus:outline-none focus:border-2 focus:border-blue-chill-950 disabled:bg-gray-300 disabled:cursor-not-allowed' type="text" />
        </form>
        {isLoading ? <LoaderHome></LoaderHome> : <LoadedSucessHome></LoadedSucessHome> }
      </div>

      <div className='h-28 flex flex-col text-center justify-center items-center p-2'>
        <a className='font-semibold text-blue-chill-50 underline decoration-dotted decoration-blue-chill-50 decoration-2' href='https://github.com/AlejandroPGz'>Alejandro Paradiso Dev</a>
        <a className='font-medium text-blue-chill-50'  href="https://github.com/AlejandroPGz">GitHub</a>
        <a  className='font-medium text-blue-chill-50' href="https://alejandropgz.github.io/Primer_Portafolio/">PortFolio</a>
      </div>

    </div>
    </>

  )
}
