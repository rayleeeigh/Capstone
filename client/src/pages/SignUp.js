import * as React from "react";
import { Typography, Stack, Avatar} from "@mui/material";
import StepperSignup from "../components/Signup/StepperSignup";

export default function SignUp() {
  const [value, setValue] = React.useState(null);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
        <>
        <Stack
          sx={{
            my: 8,
            mx: 32,
            display: "flex",
            justifyContent: "center",
          }}
        >
            <Stack sx={{display: "flex", alignItems: "center", flexDirection: "column"}}>
              <Avatar
                src='https://i.ibb.co/xFWmPt9/logo.png'
                sx={{ width: 80, height: 80 }}
              />
              <Typography component='h1' variant='h5'>
                Buyong High School Admission Page
              </Typography>
            </Stack>
            <StepperSignup/>
        </Stack>
        </>
  );
}
