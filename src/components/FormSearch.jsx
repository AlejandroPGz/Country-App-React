import React, { useEffect } from 'react'
import { useForm } from '../hooks/useInputSearch';

export const FormSearch = ({isLoading, setInputValue}) => {

    const initialForm = {
        country: '',
    }

    const {formState, country, onInputChange} = useForm(initialForm)
    useEffect(() => {
      setInputValue(country)    
    }, [country])

    const onSubmit = (event) => {
        event.preventDefault()
        setInputValue(country)
    }

  return (
   <>
        <form onSubmit={onSubmit} className='w-6/12 h-auto p-2 flex justify-center items-center' action="">
          <input autoComplete='off' name='country' value={country} onChange={onInputChange} id='country' disabled={isLoading ? true : false} placeholder='Search for a country' className='w-full rounded-xl p-2 shadow-md border-0 focus:outline-none focus:border-2 focus:border-blue-chill-950 disabled:bg-gray-300 disabled:cursor-not-allowed' type="text" />
        </form>
   </>
  )
}