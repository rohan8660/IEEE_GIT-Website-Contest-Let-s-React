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
    justifyContent: "space-between",
  },
  formContainer: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    height: 700,
  },
}));

function SystemContacts(props) {
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
            <Typography component="h1" variant="h4">
              Contact Us
            </Typography>
            <FormControl required margin="normal">
              <TextField label="Full Name"  />
            </FormControl>
            <FormControl required margin="normal">
              <TextField label="Email"  type="email"/>
            </FormControl>
            <FormControl required margin="normal">
              <TextField label="Contact Number"  />
            </FormControl>
            <FormControl required margin="normal">
              <TextField label="Message"  />
            </FormControl>
            <Button type="submit" variant="contained" color="primary" onClick={()=>window.alert("We will reach as soon as posible. Thank You!!")}>
              Submit
            </Button>
          </Typography>
        </Typography>
        <Typography component="div" className={styles.formContainer}>
          <Lottie options={defaultOptions} height={600} width={600} />
        </Typography>
      </Grid>
    </Fragment>
  );
}

export default SystemContacts;
