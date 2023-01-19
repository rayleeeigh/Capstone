import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React, { useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { AccountInterface } from '../interfaces/AccountInterface';
import { CookiesProvider } from "react-cookie"
import parseCookies from '../lib/auth'

export default function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<AccountInterface>({} as AccountInterface)
  return (
    <ChakraProvider>
      <CookiesProvider>
        <AuthContext.Provider value={{user, setUser}}>
          <Component {...pageProps} />
        </AuthContext.Provider>
      </CookiesProvider>
    </ChakraProvider>
  );
}
