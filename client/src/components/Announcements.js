import {
  Avatar,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AnnouncementCard from "./announcement/AnnouncementCard";

function Announcements() {
  return (
    <Container sx={{ justifyContent: "center" }}>
      <Stack spacing={5} sx={{ padding: "20px" }}>
        <Typography variant='h2' textAlign={"center"} fontWeight='bold'>
          Announcements
        </Typography>
        <Stack>
          <Box sx={{ padding: "2%" }}>
            <AnnouncementCard />
          </Box>
          <Box sx={{ padding: "2%" }}>
            <AnnouncementCard />
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Announcements;
