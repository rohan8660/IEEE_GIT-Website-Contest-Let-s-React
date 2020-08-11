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
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container className={classes.root}>
          <Typography variant="h4" className={classes.headings}>
            Our Upcoming Events
          </Typography>
          <Typography paragraph style={{ textAlign: "center" }}>
            Sit dolor exercitation elit esse magna sint dolor mollit quis
            labore. Officia sunt do voluptate aliqua voluptate dolor voluptate
            aute amet incididunt mollit non. Officia sit ipsum fugiat elit ea
            aliquip exercitation laboris do. Irure ex duis ea cillum aliqua.
            Exercitation reprehenderit veniam enim velit aliqua qui cillum ipsum
            cupidatat.
          </Typography>
          {Event.map(
            ({
              name1,
              name2,
              name3,
              image1,
              image2,
              image3,
              description1,
              description2,
              description3,
              id,
              link1,
              link2,
              link3,
            }) => (
              <Grid component="div" className={classes.mainContainer} key={id}>
                <Grid item lg>
                  <Paper
                    variant="elevation"
                    elevation={3}
                    className={classes.paperContainer}
                  >
                    <Typography
                      component="div"
                      className={classes.imageContainer}
                    >
                      <Typography
                        component="img"
                        src={require(`../../Assets/${image1}.jpg`)}
                        className={classes.imageStyle}
                      />
                    </Typography>
                    <Typography
                      component="div"
                      className={classes.contentContainer}
                    >
                      <Typography variant="h5" className={classes.subHeading}>
                        {name1}
                      </Typography>
                      <Divider />
                      <Typography component="div">
                        <Typography paragraph className={classes.description}>
                          {description1}
                        </Typography>
                      </Typography>
                      <Button
                        variant="outlined"
                        color="default"
                        className={classes.buttonStyle}
                        href={link1}
                      >
                        Check Out
                      </Button>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item lg>
                  <Paper
                    variant="elevation"
                    elevation={3}
                    className={classes.paperContainer}
                  >
                    <Typography
                      component="div"
                      className={classes.imageContainer}
                    >
                      <Typography
                        component="img"
                        src={require(`../../Assets/${image2}.jpg`)}
                        className={classes.imageStyle}
                      />
                    </Typography>
                    <Typography
                      component="div"
                      className={classes.contentContainer}
                    >
                      <Typography variant="h5" className={classes.subHeading}>
                        {name2}
                      </Typography>
                      <Divider />
                      <Typography component="div">
                        <Typography paragraph className={classes.description}>
                          {description2}
                        </Typography>
                      </Typography>
                      <Button
                        variant="outlined"
                        color="default"
                        className={classes.buttonStyle}
                        href={link2}
                      >
                        Check Out
                      </Button>
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item lg>
                  <Paper
                    variant="elevation"
                    elevation={3}
                    className={classes.paperContainer}
                  >
                    <Typography
                      component="div"
                      className={classes.imageContainer}
                    >
                      <Typography
                        component="img"
                        src={require(`../../Assets/${image3}.jpg`)}
                        className={classes.imageStyle}
                      />
                    </Typography>
                    <Typography
                      component="div"
                      className={classes.contentContainer}
                    >
                      <Typography variant="h5" className={classes.subHeading}>
                        {name3}
                      </Typography>
                      <Divider />
                      <Typography component="div">
                        <Typography paragraph className={classes.description}>
                          {description3}
                        </Typography>
                      </Typography>
                      <Button
                        variant="outlined"
                        color="default"
                        className={classes.buttonStyle}
                        href={link3}
                      >
                        Check Out
                      </Button>
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            )
          )}
        </Grid>
      </Fragment>
    );
  }
}

SystemEvents.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles)(SystemEvents);
