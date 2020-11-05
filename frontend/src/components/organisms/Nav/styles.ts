import { makeStyles } from "@material-ui/core/styles";

export const useNavStyles = makeStyles({
  navBarContainer: {
    boxShadow: `none`,
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    alignItems: `center`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `flex-`,
  },
  navLink: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
});
