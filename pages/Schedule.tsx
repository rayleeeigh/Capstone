import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import Layout from '../layouts/layout';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import moment from 'moment';
import { userType } from '../constants/userType';
import parseCookies from '../lib/auth';
import { hasAccess } from '../constants/routes';



export default function Schedule() {
  return (
    <Layout>
      <Flex
        mt="4vh"
        w="80vw"
        h="80vh"
        bg="white"
        boxShadow="lg"
        alignItems="center"
        flexDirection="column"
      >
        <Heading py="4vh">Schedule</Heading>
        <Box w="50rem" overflow="scroll">
          <FullCalendar
            expandRows={true}
            initialView="timeGridWeek"
            plugins={[timeGridPlugin]}
            buttonText={{ today: 'Today' }}
            headerToolbar={{
              start: '',
              center: '',
              end: '',
            }}
            allDaySlot={false}
            height="30rem"
            weekends={false}
            events={[
              {
                title: 'test',
                id: '1',
                backgroundColor: 'orange',
                start: moment()
                  .startOf('week')
                  .add(1, 'days')
                  .hour(6)
                  .minutes(30)
                  .toISOString(),
                end: moment()
                  .startOf('week')
                  .add(1, 'days')
                  .hour(9)
                  .minutes(30)
                  .toISOString(),
                allDay: false,
              },
            ]}
            slotMinTime={{
              hour: 6,
            }}
            slotMaxTime={{
              hour: 18,
            }}
            dayHeaderFormat={{
              weekday: 'long',
            }}
          />
        </Box>
      </Flex>
    </Layout>
  );
}


export async function getServerSideProps({ req, resolvedUrl }) {
  const cookies = await parseCookies(req);

  if (cookies.user == null) {
    return {
      redirect: {
        destination: '/Login',
        permanent: false,
      },
    };
  }else{
    const user = JSON.parse(cookies.user);
    const res = hasAccess(resolvedUrl, user.type)
    if(!res.hasAccess){
      return {
        redirect: {
          destination: res.path,
          permanent: false,
        },
      };
    }
  }

  return {
    props: { cookies },
  };
}
