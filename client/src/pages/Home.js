import { Box } from '@mui/system';
import Navbar from '../components/styled/Navbar';
import Announcements from '../components/announcement/Announcements';

export default function Home() {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          height: '100vh',
          width: '100%',
          backgroundColor: 'ghostwhite',
        }}>
        <Announcements />
      </Box>
    </>
  );
}
