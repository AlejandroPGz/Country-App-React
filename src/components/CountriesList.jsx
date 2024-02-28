/* eslint-disable react/display-name */
import React, { useState } from 'react'

export const CountriesList = React.memo(({countriesList}) => {
    console.log("dibujando lista de paises");
    const [oneCountry, setOneCountry] = useState()
    console.log(oneCountry);
    if (oneCountry) {
      const country = countriesList.filter(country => country.name.common === oneCountry)
      console.log(country);
    }
  return (
    <>
    {oneCountry 
    
    ? 
    
    <div
    className='w-4/5 h-oneCountryTlf bg-blue-chill-900 rounded-xl'
    >
      
    </div>
    
    : 
    
    <div 
    className='w-4/5 p-4 h-auto bg-blue-200 bg-opacity-40 rounded-xl flex flex-col md:flex-row flex-wrap gap-4 justify-center items-center'
    >
    {
      countriesList.map(country => {
        console.log(country);
        return (
          <div onClick={() => setOneCountry(country.name.common)} 
          key={country.name.official}
          name={country.name.common}
          className='h-40 w-56 bg-blue-chill-500 rounded-xl flex flex-col hover:scale-110 transition-all hover:cursor-pointer'
          >
          <h1 className='w-full h-8 text-lg font-bold text-blue-chill-50 text-center'>{country.name.common}</h1>
          <img className='w-full h-32 rounded-xl object-cover' src={`${country.flags.svg }`} alt="" />
          </div>
        )
      })
      
    }
    </div>
    
    }
    </>
  )
}
)
