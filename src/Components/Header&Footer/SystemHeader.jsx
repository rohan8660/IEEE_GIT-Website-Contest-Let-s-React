import React, { Fragment } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Tooltip,
  InputBase,
  fade,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  toolBar: {
    minHeight: 50,
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    padding: 5,
    paddingLeft: 10,
  },
  navContainer: {
    width: "55%",
    display: "flex",
    justifyContent: "space-between",
  },
  navButton: {
    fontSize: 14,
    color: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: "transparent",
      color:theme.palette.primary.light
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    marginRight: 20,
  },
}));

function SystemHeader(props) {
  const styles = useStyles();

  return (
    <Fragment>
      <AppBar position="static" color="primary">
        <Toolbar className={styles.toolBar}>
          <Typography variant="h6" component="h1" className={styles.logo}>
            Logo
          </Typography>
          <Typography component="div" className={styles.navContainer}>
            <Button
              variant="text"
              component={Link}
              to={"/"}
              className={styles.navButton}
            >
              Home
            </Button>
            <Button
              variant="text"
              component={Link}
              to={"/Execom2020"}
              className={styles.navButton}
            >
              Execom2020
            </Button>

            <Button
              variant="text"
              component={Link}
              to={"/Events"}
              className={styles.navButton}
            >
              Events
            </Button>

            <Button
              variant="text"
              component={Link}
              to={"/Timeline"}
              className={styles.navButton}
            >
              Timeline
            </Button>

            <Button
              variant="text"
              component={Link}
              to={"/Contacts"}
              className={styles.navButton}
            >
              Contacts
            </Button>
            <Typography className={styles.search} component="div">
              <Typography className={styles.searchIcon} component="div">
                <SearchIcon />
              </Typography>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: styles.inputRoot,
                  input: styles.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}

export default SystemHeader;
