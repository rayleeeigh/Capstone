import React, { useContext, useState } from 'react';
import { Text, Button, Input, Flex } from '@chakra-ui/react';
import axios from 'axios';
import Router from 'next/router';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useCookies } from 'react-cookie';
import Link from 'next/link';
import { AccountInterface } from '../../interfaces/AccountInterface';
import { userType } from '../../constants/userType';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(['']);
  const authContext = useContext(AuthContext);
  const { setUser } = authContext;
  const [cookies, setCookie] = useCookies(['user']);

  const login = () => {
    axios
      .post('api/auth/login', { username: username, password: password })
      .then((res) => {
        if (Object.keys(res.data)[0] === 'error') {
          setError(res.data.error);
        } else {
          const userData: AccountInterface = res.data[0];
          setUser(res.data[0]);
          console.log(res.data[0]);
          setCookie('user', JSON.stringify(userData), {
            path: '/',
            maxAge: 3600,
            sameSite: false,
          });
          Router.push(
            userData.type === userType.admin ? 'admin/Home' : '/Announcements'
          );
        }
      });
  };

  return (
    <Flex
      w="36vw"
      h="64vh"
      bg="white"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text mb="4vh">Login to your account</Text>
        {error.map((data, index)=>{
          return (
            <Text key={index} color="red">
              {data}
            </Text>
          );
        })}
      <Input
        w="24vw"
        mb="2vh"
        mt="4vh"
        placeholder="School ID"
        onChange={(e) => setUsername(e.target.value)}
        isRequired
      />
      <Input
        type="password"
        w="24vw"
        mb="4vh"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        isRequired
      />
      <Button onClick={login} w="24vw">
        Login
      </Button>
      <Link href="/Signup">
        <Button mt="4" w="24vw">
          Signup
        </Button>
      </Link>
    </Flex>
  );
}

export default LoginForm;
