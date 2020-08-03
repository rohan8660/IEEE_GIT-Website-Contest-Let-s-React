import React, { Fragment } from "react";
import {
  makeStyles,
  Grid,
  CssBaseline,
  FormControl,
  Typography,
  Button,
  Input,
  TextField,
} from "@material-ui/core";
import Lottie from "react-lottie";
import animationData from "../../Assets/Lottie/27620-contact-us.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "100%",
  },
  formContainer: {
    width: "100%",
    display: "flex",
  },
}));

function MobContacts(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const styles = useStyles();
  return (
    <Fragment>
      <Grid container className={styles.root}>
      <Lottie options={defaultOptions} height={300} width={300} />
        <Typography component="div" className={styles.formContainer}>
          <Typography
            component="form"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: 20,
            }}
            autoComplete="off"
          >
            <Typography component="h6" variant="h4">
              Contact Us
            </Typography>
            <FormControl required margin="normal">
              <TextField label="Full Name" autoFocus />
            </FormControl>
            <FormControl required margin="normal">
              <TextField label="Email" autoFocus type="email" />
            </FormControl>
            <FormControl required margin="normal">
              <TextField label="Contact Number" autoFocus />
            </FormControl>
            <FormControl required margin="normal">
              <TextField label="Message" autoFocus />
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Typography>
        </Typography>
      </Grid>
    </Fragment>
  );
}

export default MobContacts;
