import { useEffect } from 'react'
import { useColorMode } from '@yamada-ui/react';
import { Logs } from './contents/Logs.tsx'
import { Footer } from './contents/Footer.tsx'
import { Header } from './contents/Header.tsx'


export const App = () => {
  const { changeColorMode } = useColorMode()

  useEffect(() => {
    changeColorMode("light");
  }, []);

  return (
    <>
      <Header />
      <Logs />
      <Footer />
    </>
  )
}