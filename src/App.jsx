import { useApi } from './hooks/useApi'
import { LoaderHome } from './components/LoaderHome';
import { MagnifyingGlass } from 'react-loader-spinner';
import { FormSearch } from './components/FormSearch';
import { AboutMe } from './components/AboutMe';
import { Title } from './components/Title';
import { useState } from 'react';

export const App = () => {

  const {data, isLoading, errors} = useApi("https://jsonplaceholder.typicode.com/users")

  const [inputValue, setInputValue] = useState({})
  console.log(inputValue);
  return (
    <>
    <div className='bg-blue-chill-600 h-screen w-full flex flex-col justify-center items-center gap-4'>
      <Title></Title>
      <div className='w-full h-auto flex flex-col gap-2 justify-center items-center'>
        <FormSearch setInputValue={setInputValue} isLoading={isLoading}></FormSearch>
        <LoaderHome isLoading={isLoading}></LoaderHome>
      </div>
      <AboutMe></AboutMe>
    </div>
    </>

  )
}
