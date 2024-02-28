import React, { useEffect } from 'react'
import { OneCountry } from './OneCountry';
import { CountriesList } from './CountriesList';
import { Message } from './Message';

export const CountryHandler = React.memo(({countryList, inputValue}) => {

  const filteredCountries = countryList.filter(country => country.name.common.toLowerCase().startsWith(inputValue.toLowerCase( )));
  //console.log(filteredCountries);

  //si hay menos de 10 mostrarlos, y que al hacer click se abra el pais
  //si hay solo uno, mostrar el nombre, capital, poblacion, region, y el clima

  const oneCountry = (country) => {

  }

  const manyCountries = (filter) => {

    if (filter.length === 1) {
      return <OneCountry></OneCountry>
    } else {
      if (filter.length < 10) {
        return <CountriesList></CountriesList>
      } else {
        return <Message message={"We found to many countries, please be more clear..."}></Message>
      }
    }

  }

  useEffect(() => {
    manyCountries(filteredCountries)
  
  }, [filteredCountries])
  


  return (
    <>
    {manyCountries(filteredCountries)}
    </>
  )
}
)