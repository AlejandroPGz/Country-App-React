import { useApi } from './hooks/useApi'
import { LoaderHome } from './components/LoaderHome';
import { MagnifyingGlass } from 'react-loader-spinner';
import { FormSearch } from './components/FormSearch';
import { AboutMe } from './components/AboutMe';
import { Title } from './components/Title';
import { useState } from 'react';
import { CountryHandler } from './components/CountryHandler';

export const App = () => {

  const {data, isLoading, errors} = useApi("https://restcountries.com/v3.1/all")
  let countryListApi = data
  const [inputValue, setInputValue] = useState({})
  return (
    <>
    <div className='bg-blue-chill-600 min-h-screen max-h-none w-full flex flex-col justify-center items-center gap-4'>
      <Title></Title>
      <div className='w-full h-auto flex flex-col gap-2 justify-center items-center'>
        <FormSearch setInputValue={setInputValue} isLoading={isLoading}></FormSearch>
        <LoaderHome isLoading={isLoading}></LoaderHome>
      </div>
      {
      data && inputValue ? <CountryHandler countryList={countryListApi} inputValue={inputValue}></CountryHandler>
        :
        ""
      }
      <AboutMe></AboutMe>
    </div>
    </>

  )
}
