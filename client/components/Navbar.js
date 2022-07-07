import { Flex, Text, Select, Spacer, Box } from "@chakra-ui/react";


export default function Navbar(){
    return (
        <Flex w='100vw' h='8vh' boxShadow='lg' justifyContent='center' alignItems='center' bg='white'>
            <Flex>
                Buyong National High School
            </Flex>
            <Spacer/>
            <Flex alignItems='center'>
                <Text mx='2vw'>Home</Text>
                <Text mx='2vw'>About Us</Text>
                <Select mx='2vw' w='10vw'>
                    <option>Student Task</option>
                    <option>Teacher Task</option>
                    <option>Admin Task</option>
                </Select>
            </Flex>
        </Flex>
    )
}