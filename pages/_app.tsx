import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React, { useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { AccountInterface } from '../interfaces/AccountInterface';
import { CookiesProvider } from "react-cookie"
import parseCookies from '../lib/auth'
import StudentInterface from '../interfaces/StudentInterface';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<AccountInterface>({} as AccountInterface)
  const [userInfo, setUserInfo] = useState<StudentInterface>({} as StudentInterface)
  return (
    <ChakraProvider>
      <CookiesProvider>
        <AuthContext.Provider value={{user, setUser, userInfo, setUserInfo}}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </CookiesProvider>
    </ChakraProvider>
  );
}
