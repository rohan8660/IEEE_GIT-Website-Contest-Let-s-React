import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Drawer,
  Tooltip,
  fade,
  InputBase,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import clsx from "clsx";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import TimelineIcon from "@material-ui/icons/Timeline";
import ContactsIcon from "@material-ui/icons/Contacts";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const useStyles = makeStyles((theme) => ({
  toolBar: {
    minHeight: 50,
    margin: 0,
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {},
  navContainer: {},
  navButton: {},
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
    width: "50%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
    marginRight: 20,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

function MobHeader(props) {
  const [open, setOpen] = useState(false);
  const styles = useStyles();
  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar className={styles.toolBar}>
        <Typography
          component="div"
          style={{ display: "flex", flexDirection: "row", padding: 0 }}
        >
          <IconButton onClick={() => handleDrawerToggle()}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer
            classes={{ paper: styles.mobNavMenu }}
            anchor="left"
            open={open}
            onClose={handleDrawerToggle}
          >
            <Typography
              component="div"
              className={clsx(styles.list)}
              role="presentation"
            >
              <List>
                <ListItem button component={Link} to="/" onClick={() => handleDrawerToggle()} >
                  <ListItemIcon>
                    <HomeRoundedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/EXECOM2020" onClick={() => handleDrawerToggle()} >
                  <ListItemIcon>
                    <ImportContactsIcon />
                  </ListItemIcon>
                  <ListItemText primary="EXECOM2020" />
                </ListItem>
                <ListItem button component={Link} to="/Events" onClick={() => handleDrawerToggle()} >
                  <ListItemIcon>
                    <EmojiEventsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Events" />
                </ListItem>
                <ListItem button component={Link} to="/Timeline" onClick={() => handleDrawerToggle()} >
                  <ListItemIcon>
                    <TimelineIcon />
                  </ListItemIcon>
                  <ListItemText primary="Timeline" />
                </ListItem>
                <ListItem button component={Link} to="/Contacts" onClick={() => handleDrawerToggle()} >
                  <ListItemIcon>
                    <ContactsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contacts" />
                </ListItem>
              </List>
            </Typography>
          </Drawer>
          <Typography style={{ fontSize: 16, padding: 10, fontWeight: "600" }}>
            Logo
          </Typography>
        </Typography>
        <Tooltip title="Search">
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
        </Tooltip>
      </Toolbar>
    </AppBar>
  );
}

export default MobHeader;
