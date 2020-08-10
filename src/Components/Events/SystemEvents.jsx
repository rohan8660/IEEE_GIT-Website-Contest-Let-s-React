import React, { Component, Fragment } from "react";
import {
  Grid,
  Typography,
  Paper,
  Divider,
  Button,
  withStyles,
} from "@material-ui/core";
import Event from "./Event";
import PropTypes from "prop-types";

const useStyles = (theme) => ({
  headings: {
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
  imageContainer: {
    width: 400,
    height: 300,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    borderRadius: 10,
  },
  paperContainer: {
    width: 400,
    height: 500,
    "&:hover": {
      background: theme.palette.secondary.light,
    },
    margin: 20,
    borderRadius: 10,
  },
  subHeading: {
    padding: 5,
    fontWeight: "bold",
  },
  description: {
    padding: 5,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonStyle: {
    borderRadius: 15,
    margin: 5,
  },
});

class SystemEvents extends Component {
  state = {
    finalArray: [],
    isOpened:false
  };
  componentDidMount(){
   this.setState({isOpened:true})

  };
  componentDidUpdate(){
    const { classes } = this.props;
    var myArray1 = [];
    var myArray2 = [];

    for (let i = 0; i < Event.length; i++) {
      myArray1.push(
        <Grid item key={Event[i].id} lg>
          <Paper
            variant="elevation"
            elevation={3}
            className={classes.paperContainer}
          >
            <Typography component="div" className={classes.imageContainer}>
              <Typography
                component="img"
                src={require(`../../Assets/${Event[i].image}.jpg`)}
                className={classes.imageStyle}
              />
            </Typography>
            <Typography component="div" className={classes.contentContainer}>
              <Typography variant="h5" className={classes.subHeading}>
                {Event[i].name}
              </Typography>
              <Divider />
              <Typography component="div">
                <Typography paragraph className={classes.description}>
                  {Event[i].description}
                </Typography>
              </Typography>
              <Button
                variant="outlined"
                color="default"
                className={classes.buttonStyle}
              >
                Check Out
              </Button>
            </Typography>
          </Paper>
        </Grid>
      );
    }
    for (let j = 0; j < Event.length; j += 3) {
      myArray2.push(
        <Grid component="div" className={classes.mainContainer} key={j}>
          {myArray1[j]}
          {myArray1[j + 1]}
          {myArray1[j + 2]}
        </Grid>
      );
    }
    this.setState({ finalArray: myArray2 });
  }


  render() {
    const { classes } = this.props;
    return <Fragment>{this.state.finalArray}</Fragment>;
  }
}

SystemEvents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SystemEvents);
