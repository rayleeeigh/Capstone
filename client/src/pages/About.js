import React from "react";
import Navbar from "../components/styled/Navbar";
import { Body } from "../components/styled/Body";
import { Logo, Cover, Content } from "../components/About/About.style";
import { Grid } from "@mui/material";

export default function About() {
  return (
    <>
      <Navbar />
      <Body>
        <Cover>
          <Grid item xs={12}>
            <Logo src='https://i.ibb.co/xFWmPt9/logo.png' />
          </Grid>
          <Grid item xs={12}>
            <Content>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              convallis rutrum diam. Nullam efficitur leo in semper feugiat.
              Fusce urna diam, hendrerit et magna ac, auctor iaculis enim. In
              hac habitasse platea dictumst. Aliquam sit amet viverra est.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Curabitur suscipit dui et efficitur
              dapibus. Duis eget mi sed lacus faucibus varius et ac mauris.
              Etiam pretium mollis ligula. Duis porttitor est ac quam faucibus,
              eu dictum tortor hendrerit. Mauris vitae eleifend ex. Nulla et
              posuere ante. Praesent eget diam nec lacus dictum fringilla non at
              massa. Aenean scelerisque cursus mi, eu euismod tortor aliquet sit
              amet.
            </Content>
          </Grid>
        </Cover>
      </Body>
    </>
  );
}
