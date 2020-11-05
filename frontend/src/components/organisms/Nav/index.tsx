import React from "react";
import { useHistory } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";

import { useNavStyles } from "./styles";

export default function Nav(): JSX.Element {
  const { navBarContainer, navDisplayFlex, navbarDisplayFlex } = useNavStyles();

  const history = useHistory();

  return (
    <AppBar position="static" color="transparent" className={navBarContainer}>
      <Toolbar>
        <Container className={navbarDisplayFlex}>
          <Typography variant="h5">Discord</Typography>
          <List component="nav" className={navDisplayFlex}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => history.push("/auth/signup")}
            >
              Sign Up
            </Button>
            <Button
              color="secondary"
              onClick={() => history.push("/auth/signin")}
            >
              Sign In
            </Button>
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
