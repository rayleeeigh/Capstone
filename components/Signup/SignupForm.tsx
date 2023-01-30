import React, { useContext, useState } from 'react';
import { Text, Button, Input, Flex, Tabs, TabList, Tab, TabPanels, TabPanel, Select, useToast } from '@chakra-ui/react';
import axios from 'axios';
import { AuthContext } from '../../AuthContext/AuthContext';
import bcrypt from 'bcryptjs'
import Router from 'next/router'

export default function SignupForm() {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState("");
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [birthdate, setBirthdate] = useState("");
	const [type, setType] = useState("1");
	const [gender, setGender] = useState("0");
	const [contactNumber, setContactNumber] = useState("")
	const [position, setPosition] = useState("")
  const [error, setError] = useState("")
  const authContext = useContext(AuthContext)
  const toast = useToast();

  const login = () => {
		let salt = bcrypt.genSaltSync(10);
		let hash = bcrypt.hashSync(password, salt);
		axios.post('api/auth/signup', {username: username , password: hash, firstname: firstname, lastname: lastname, birthdate: birthdate, type: type, created_by: new Date(), updated_at: new Date(), gender: gender, contactNumber: contactNumber, position: position}).then((res) => {
			toast({
				title: 'Success',
				description: "Account Successfully created.",
				status: 'success',
				duration: 5000,
				position: 'top'
			})
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
					<Tab>Other Information</Tab>
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
					<TabPanel px="5vw" textAlign="center">
						<Select mb="2vh" onChange={(e)=>setGender(e.target.value)}>
							<option value="0">Male</option>
							<option value="1">Female</option>
						</Select>
						<Select mb="2vh" onChange={(e)=>setType(e.target.value)}>
							<option value="1">Student</option>
							<option value="2">Teacher</option>
						</Select>
						<Input display={type === "2"? "block": "none"} w="24vw" mb="2vh" placeholder="Position" onChange={(e)=>setPosition(e.target.value)}/>
						<Input w="24vw" mb="2vh" placeholder="Contact Number" onChange={(e)=>setContactNumber(e.target.value)}/>
					</TabPanel>
				</TabPanels>
			</Tabs>
      <Button onClick={login} w="24vw">Signup</Button>
    </Flex>
  );
}