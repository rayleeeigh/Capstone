import React, { useContext, useState } from 'react';
import { Text, Button, Input, Flex } from '@chakra-ui/react';
import axios from 'axios';
import Router from 'next/router'
import { AccountInterface } from '../../interfaces/AccountInterface';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useCookies } from "react-cookie"

function LoginForm() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("")
  const authContext = useContext(AuthContext)
  const { setUser } = authContext;
  const [cookies, setCookie] = useCookies(['user']);

  const login = () => {
    axios.post('api/auth/login', {username: username , password: password}).then((res) => {
      if (Object.keys(res.data)[0] === "error") {
        setError(res.data.error)
      }
      else{
        setUser(res.data[0])
        setCookie("user", JSON.stringify(res.data[0]), {
          path: "/",
          maxAge: 3600,
          sameSite: false,
        })
        Router.push('/Announcement')
      }
    });
  }

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
      <Text mb="4vh" color="red">{error}</Text>
      <Input w="24vw" mb="4vh" placeholder="Student ID" onChange={(e)=>setUsername(e.target.value)}/>
      <Input type="password" w="24vw" mb="4vh" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      <Button onClick={login} w="24vw">Login</Button>
    </Flex>
  );
}

export default LoginForm;
