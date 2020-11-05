import { makeStyles } from "@material-ui/core/styles";

export const useAuthStyles = makeStyles({
  authContainer: {
    heigh: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  authFormContainer: {
    padding: "5rem",
  },
});

export const useSigninStyles = makeStyles({
  signupContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    maxWidth: "25rem",
  },
});

export const useSignupStyles = makeStyles({
  signupContainer: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "25rem",
  },
});
