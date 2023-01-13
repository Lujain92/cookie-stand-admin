'use client'
import './globals.css'
import Header from './components/Header'
import ThemeWrapper from './contexts/theme'
import Footer from './components/Footer'
import { AuthWrapper } from './contexts/Auth'

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
     
      <AuthWrapper><ThemeWrapper>
        <body  className='bg-[#EFE2B2] dark:bg-[#808080]' >
      <Header />
        {children}
      
        <Footer/>
      </body>
      </ThemeWrapper>
</AuthWrapper>
      
      
    </html>
  )
}
