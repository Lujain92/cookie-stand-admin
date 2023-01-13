"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Main from "./components/main"
import Login from './components/login';
import {useContext} from 'react';
import { AuthContext } from './contexts/Auth';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {tokens} = useContext(AuthContext);

  return (<>  {tokens ? <Main/> : <Login/>}</>

  )
}
