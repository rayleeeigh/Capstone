import React, { useContext, useState } from 'react';
import { Text, Button, Input, Flex, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useCookies } from "react-cookie"
import bcrypt from 'bcryptjs'
import Router from 'next/router'

export default function SignupForm() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [birthdate, setBirthdate] = useState("");
  const [error, setError] = useState("")
  const authContext = useContext(AuthContext)
  const { setUser } = authContext;
  const [cookies, setCookie] = useCookies(['user']);

  const login = () => {
		let salt = bcrypt.genSaltSync(10);
		let hash = bcrypt.hashSync(password, salt);
    axios.post('api/auth/signup', {username: username , password: hash, firstname: firstname, lastname: lastname, birthdate: birthdate, created_by: new Date(), updated_at: new Date()}).then((res) => {
      Router.push('/Login')
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
			px="4"
    >
      <Text mb="4vh">Create your school account here</Text>
      <Text mb="4vh" color="red">{error}</Text>
      <Tabs isFitted variant='enclosed' w="100%">
				<TabList>
					<Tab>Account Credentials</Tab>
					<Tab>Basic Information</Tab>
					{/* <Tab>Contact Information</Tab> */}
				</TabList>

				<TabPanels>
					<TabPanel textAlign="center">
						<Input w="24vw" mb="2vh" placeholder="Student ID" onChange={(e)=>setUsername(e.target.value)}/>
						<Input type="password" w="24vw" mb="2vh" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
					</TabPanel>
					<TabPanel textAlign="center">
						<Input w="24vw" mb="2vh" placeholder="First Name" onChange={(e)=>setFirstname(e.target.value)}/>
						<Input w="24vw" mb="2vh" placeholder="Last Name" onChange={(e)=>setLastname(e.target.value)}/>
						<Input type="date" w="24vw" mb="2vh" onChange={(e)=>setBirthdate(e.target.value)}/>
					</TabPanel>
					{/* <TabPanel textAlign="center">
						<Input w="24vw" mb="2vh" placeholder="Student ID" onChange={(e)=>setUsername(e.target.value)}/>
						<Input type="password" w="24vw" mb="2vh" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
					</TabPanel> */}
				</TabPanels>
			</Tabs>
      <Button onClick={login} w="24vw">Signup</Button>
    </Flex>
  );
}