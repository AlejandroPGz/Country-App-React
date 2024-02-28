/* eslint-disable react/display-name */
import React from 'react'
import { useApi } from '../hooks/useApi';
import { MagnifyingGlass } from 'react-loader-spinner';

export const OneCountry = React.memo(({country}) => {

  const latitud = country.latlng[0]
  const longitud = country.latlng[1]

  const {data, isLoading, errors} = useApi(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${import.meta.env.VITE_KEY_API}&units=metric`)
  
  let grades = undefined;
  if ( data && data.main.temp > 20) {
    grades = "text-red-300"
  } else {
    grades = "text-blue-300"
  }

  return (
    <>
    <div
    className='w-4/5 h-auto bg-blue-chill-900 rounded-xl flex flex-col md:flex-row'
    >
    <img className='w-full md:w-3/5 h-36 md:h-full rounded-xl object-cover' src={`${country.flags.svg }`} alt="" />
    <div className='w-full md:w-2/5 p-1 h-auto flex flex-col gap-2 justify-center items-center'>
      <h2 className='font-semibold text-blue-chill-50 text-xl underline-offset-4 underline decoration-wavy decoration-blue-chill-400'>{country.name.common}</h2>
      <span className='text-left font-medium text-blue-chill-50 text-lg'>Capital: <span className='font-semibold'>{country.capital[0]}</span> </span>
      <span className='text-left font-medium text-blue-chill-50 text-lg'>Region: <span className='font-semibold'>{country.region}</span> </span>
      <span className='text-left font-medium text-blue-chill-50 text-lg'>Population: <span className='font-semibold'>{parseInt(country.population).toLocaleString()}</span> </span>
    
    <div className='w-full md:w-2/5 h-auto flex flex-col justify-center items-center gap-2'>
      <h2 className='text-lg font-semibold text-blue-chill-100 underline-offset-4 underline decoration-wavy'>Current Weather:</h2>
      {isLoading 
      ?
      <MagnifyingGlass></MagnifyingGlass> 
      : 
      <>
      <span className='text-2xl font-semibold text-blue-chill-100'>{data.weather[0].description}</span>
      <div className='flex flex-row justify-center items-center'>
      <span className={`text-3xl font-bold ${grades}`}>{data.main.temp}°C</span>
      <img className='h-16' src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="" />
      </div></>
      
      }

    
    </div>
    </div>
    </div>
    </>
  )
}
)