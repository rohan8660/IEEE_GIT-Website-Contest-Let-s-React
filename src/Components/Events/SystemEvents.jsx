import React, { Component, Fragment } from "react";
import {
  Grid,
  Typography,
  Paper,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  withStyles,
} from "@material-ui/core";
import Event from "./Event";
import PropTypes from "prop-types";

const useclasses = (theme) => ({
  headings: {
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
  mainContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 40,
    padding: 10,
  },
  sizeProp: {
    maxWidth: 345,
    borderRadius:20
  },
});

class SystemEvents extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid container>
          <Typography variant="h4" className={classes.headings}>
            Our Upcoming Events
          </Typography>
          <Typography paragraph style={{ textAlign: "center" }}>
            ...............................................................
            ...............................................................
            Theses are the dummy up coming events.. Later can be
            added.
            ...............................................................
            ...............................................................
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
              <Typography
                component="div"
                className={classes.mainContainer}
                key={id}
              >
                <Paper elevation={3} style={{borderRadius:20}}>
                  <Card className={classes.sizeProp}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image={require(`../../Assets/${image1}.jpg`)}
                        title={name1}
                      />
                      <CardContent>
                        <Typography gutterBottom style={{ height: 50,fontWeight:"bold" }}>
                          {name1}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          noWrap={true}
                          style={{ height: 30 }}
                        >
                          {description1}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" href={link1}>
                        Check out
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
                <Paper elevation={3} style={{borderRadius:20}}>
                  <Card className={classes.sizeProp}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image={require(`../../Assets/${image2}.jpg`)}
                        title={name2}
                      />
                      <CardContent>
                        <Typography gutterBottom style={{ height: 50,fontWeight:"bold" }}>
                          {name2}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          noWrap={true}
                          style={{ height: 30 }}
                        >
                          {description2}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" href={link2}>
                        Check out
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
                <Paper elevation={3} style={{borderRadius:20}}>
                  <Card className={classes.sizeProp}>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        height="100%"
                        width="100%"
                        image={require(`../../Assets/${image3}.jpg`)}
                        title={name3}
                      />
                      <CardContent>
                        <Typography gutterBottom style={{ height: 50,fontWeight:"bold" }}>
                          {name3}
                        </Typography>
                        <Typography
                          variant="body2"
                          component="p"
                          noWrap={true}
                          style={{ height: 30 }}
                        >
                          {description3}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary" href={link3}>
                        Check out
                      </Button>
                    </CardActions>
                  </Card>
                </Paper>
              </Typography>
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

export default withStyles(useclasses)(SystemEvents);
