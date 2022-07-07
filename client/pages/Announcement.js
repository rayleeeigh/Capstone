import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layouts/layout";

export default function Announcement() {
  const [announcements, setAnnouncements] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000').then(function (response) {
      setAnnouncements(response.data)
    })
  }, [])

  return (announcements.length === 0 )?
  <div></div>
  :
  <Layout>
      <Flex mt='4vh' w='80vw' h='80vh' bg='white' boxShadow='lg' alignItems='center' flexDirection='column'>
        <Heading py='4vh'>Announcements</Heading>
          {announcements.map((res)=>(
            <Flex my='2vh' w='64vw' bg='gray.100' h='12vh'>
              a
            </Flex>
          ))}
      </Flex>
  </Layout>
}
