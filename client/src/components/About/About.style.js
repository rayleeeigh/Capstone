import styled from "styled-components";
import { Avatar, Grid, Box } from "@mui/material"

export const Logo = styled(Avatar)`
  margin: auto;
  width: 12rem;
  height: 12rem;
`;

export const Cover = styled(Grid)`
  padding-top: 4rem;
  background-image : url(https://i.ibb.co/jfHBvTs/about.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  width: 100%;
`;

export const Content = styled(Box)`
  margin-top: 4rem;
  background-color: white;
  width: 100%;
  height: 100%;
  padding: 4rem;
  bottom: 0;
`;