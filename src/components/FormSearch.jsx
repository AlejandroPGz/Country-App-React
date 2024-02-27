import React from 'react'
import { useForm } from '../hooks/useInputSearch';

export const FormSearch = ({isLoading}) => {

    const initialForm = {
        country: '',
    }

    const {formState, country, onInputChange} = useForm(initialForm)

    const onSubmit = (event) => {
        event.preventDefault()
    }

  return (
   <>
        <form onSubmit={onSubmit} className='w-6/12 h-20 flex justify-center items-center' action="">
          <input name='country' value={country} onChange={onInputChange} id='country' disabled={isLoading ? true : false} placeholder='Search for a country' className='w-full rounded-xl p-2 shadow-md border-0 focus:outline-none focus:border-2 focus:border-blue-chill-950 disabled:bg-gray-300 disabled:cursor-not-allowed' type="text" />
        </form>
   </>
  )
}
