import React from "react";
import Seo from "components/utils/Seo";
import { useParams, useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import {
  Typography,
  TextField,
  Link,
  Box,
  FormControl,
} from "@material-ui/core";
import { useSignupStyles, useAuthStyles } from "./styles";

interface Params {
  type: string | "signup" | "signin";
}

const SignupForm = (): JSX.Element => {
  const { signupContainer } = useSignupStyles();

  const history = useHistory();

  return (
    <Box className={signupContainer}>
      <TextField
        id="signup-email"
        label="Email"
        variant="outlined"
        size="small"
      />
      <TextField
        id="signup-username"
        label="Username"
        variant="outlined"
        size="small"
      />
      <TextField
        id="signup-password"
        label="Password"
        variant="outlined"
        type="password"
        size="small"
      />
      <TextField
        id="signup-repeat-password"
        label="Repeat password"
        type="password"
        variant="outlined"
        size="small"
      />
      <Link onClick={() => history.push("/auth/signin")}>
        Already have account?
      </Link>
    </Box>
  );
};

const SigninForm = (): JSX.Element => {
  const history = useHistory();

  return (
    <>
      <Link onClick={() => history.push("/auth/signup")}>
        Create a account?
      </Link>
    </>
  );
};

export default function Auth() {
  const { type }: Params = useParams();
  const { authContainer, authFormContainer } = useAuthStyles();
  return (
    <>
      <Seo title="Auth" />
      <Container maxWidth="sm" className={authContainer}>
        <Card className={authFormContainer}>
          <FormControl>
            <Typography variant="h4">
              {type === "signup" ? "Create Account" : "Hello Again"}
            </Typography>
            {type === "signin" && <SigninForm />}
            {type === "signup" && <SignupForm />}
          </FormControl>
        </Card>
      </Container>
    </>
  );
}
