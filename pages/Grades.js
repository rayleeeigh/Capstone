import { Flex, Heading } from "@chakra-ui/react";
import DataTable from "../components/DataTable";
import Layout from "../layouts/layout";

export default function Grades() {

  return(
    <Layout>
        <Flex mt='4vh' w='80vw' h='80vh' bg='white' px='12' boxShadow='lg' alignItems='center' flexDirection='column'>
            <Heading py='4vh'>Grades</Heading>
            <DataTable/>
        </Flex>
    </Layout>
  )
}
