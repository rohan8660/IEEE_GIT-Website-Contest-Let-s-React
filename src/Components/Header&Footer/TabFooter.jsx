import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Link,
  Divider,
  Tooltip,
} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import PhonelinkRingIcon from "@material-ui/icons/PhonelinkRing";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const useStyles = makeStyles((theme) => ({
  footerGrid: {
    width: "100%",
    height: 190,
    backgroundColor: theme.palette.primary.main,
  },
  footerContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  socialIconContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  socialIcon: {
    padding: 5,
    color: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.primary.light,
    },
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  infoLinksContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
  },
  linkButton: {
    padding: 5,
    "&:hover": {
      color: theme.palette.primary.light,
    },
    fontSize: 14,
  },
  linkIcon: {
    paddingTop: 10,
    paddingRight: 10,
  },
  linkIconContainer: {
    display: "flex",
  },
}));

function TabFooter(props) {
  const styles = useStyles();
  return (
    <Grid container className={styles.footerGrid}>
      <Typography component="div" className={styles.footerContainer}>
        <Typography component="div">
          <Typography
            variant="h6"
            style={{ fontSize: 20, padding: 5 }}
            color="secondary"
          >
            Visit
          </Typography>
          <Typography component="div" className={styles.socialIconContainer}>
            <Tooltip title="Facebook">
              <FacebookIcon color="secondary" className={styles.socialIcon} />
            </Tooltip>
            <Tooltip title="Instagram">
              <InstagramIcon color="secondary" className={styles.socialIcon} />
            </Tooltip>
            <Tooltip title="Twitter">
              <TwitterIcon color="secondary" className={styles.socialIcon} />
            </Tooltip>
            <Tooltip title="LinkedIn">
              <LinkedInIcon color="secondary" className={styles.socialIcon} />
            </Tooltip>
            <Tooltip title="YouTube">
              <YouTubeIcon color="secondary" className={styles.socialIcon} />
            </Tooltip>
          </Typography>
          <Typography component="div" className={styles.linkContainer}>
            <Link
              href="#"
              underline="none"
              color="secondary"
              className={styles.linkButton}
            >
              IEEE.org
            </Link>
            <Link
              href="#"
              underline="none"
              color="secondary"
              className={styles.linkButton}
            >
              R10 Sections -IEEE
            </Link>
            <Link
              href="#"
              underline="none"
              color="secondary"
              className={styles.linkButton}
            >
              IEEE Indian Council
            </Link>
          </Typography>
        </Typography>
        <Typography component="div">
          <Typography
            variant="h6"
            style={{ fontSize: 20, padding: 5 }}
            color="secondary"
          >
            Information
          </Typography>
          <Typography component="div" className={styles.infoLinksContainer}>
            <Link
              href="/About"
              underline="none"
              color="secondary"
              className={styles.linkButton}
            >
              About
            </Link>
            <Link
              href="/Contacts"
              underline="none"
              color="secondary"
              className={styles.linkButton}
            >
              Contacts
            </Link>
            <Link
              href="/Events"
              underline="none"
              color="secondary"
              className={styles.linkButton}
            >
              Events
            </Link>
          </Typography>
        </Typography>
        <Typography component="div">
          <Typography
            variant="h6"
            style={{ fontSize: 20, padding: 5 }}
            color="secondary"
          >
            Reach us on
          </Typography>
          <Typography
            component="div"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space between",
            }}
          >
            <Typography component="div" className={styles.linkIconContainer}>
              <MailIcon color="secondary" className={styles.linkIcon} />
              <Link
                href="#"
                underline="none"
                color="secondary"
                className={styles.linkButton}
              >
                something@gmail.com
              </Link>
            </Typography>
            <Typography component="div" className={styles.linkIconContainer}>
              <PhonelinkRingIcon
                color="secondary"
                className={styles.linkIcon}
              />
              <Link
                href="#"
                underline="none"
                color="secondary"
                className={styles.linkButton}
              >
                098724537
              </Link>
            </Typography>
            <Typography component="div" className={styles.linkIconContainer}>
              <PhoneIcon color="secondary" className={styles.linkIcon} />
              <Link
                href="#"
                underline="none"
                color="secondary"
                className={styles.linkButton}
              >
                9449123456
              </Link>
            </Typography>
          </Typography>
        </Typography>
      </Typography>
      <Divider
        style={{ backgroundColor: "#fff", borderRadius: "50%" }}
        color="secondary"
      />
      <Typography
        component="div"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <Typography color="secondary" variant="subtitle2">
          &copy; 2020 Let's React
        </Typography>
      </Typography>
    </Grid>
  );
}

export default TabFooter;
