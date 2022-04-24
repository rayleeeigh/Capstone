import styled from "styled-components";
import { TextField } from "@mui/material";
import MuiPhoneNumber from 'material-ui-phone-number';

export const ITextField = styled(TextField)`
  width: 20vw;
`;

export const PTextField = styled(TextField)`
  width: 30vw;
`;

export const PhoneNumber = styled(MuiPhoneNumber)`
  border: solid 1px silver;
  padding: 10px;
  border-radius: 5px;
  margin-top: 16px; 
`;