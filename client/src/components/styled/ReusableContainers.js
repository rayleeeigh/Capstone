import { Box, Container, Grid } from "@mui/material";
import styled from "styled-components";

export const ColumnFlexBox = styled(Box)`
  display: inline-flex;
  margin: 1;
  padding: 1;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
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

export const MainContainer = styled(Container)`
  padding: 2%;
  text-align: center;
`;
