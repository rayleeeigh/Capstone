import { Box, Grid } from "@mui/material";
import styled from "styled-components";

export const MainGrid = styled(Grid)`
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const ContentBox = styled(Box)`
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  padding: 50px 20px 50px 20px;
  box-shadow: 0px 1px 1px gray;
  background-color: "black";
  width: 100%;
`;

export const FlexibleBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 1;
  margin: 1;
  border-radius: 1;
`;
