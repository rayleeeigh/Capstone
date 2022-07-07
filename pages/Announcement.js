import { Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Layout from "../layouts/layout";

export default function Announcement() {
  const [announcements, setAnnouncements] = useState([{id:1},{id:1},{id:1}]);
  useEffect(() => {
    axios.get('api/get').then(function (response) {
      console.log(response.data)
    })
  }, [])

  return (announcements.length === 0 )?
  <div></div>
  :
  <Layout>
      <Flex mt='4vh' w='80vw' h='80vh' bg='white' boxShadow='lg' alignItems='center' flexDirection='column'>
        <Heading py='4vh'>Announcements</Heading>
      </Flex>
  </Layout>
}
