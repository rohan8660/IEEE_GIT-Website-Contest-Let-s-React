import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Paper,
  Divider,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import Event from "./Event";

const useStyles = makeStyles((theme) => ({
  headings: {
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
  sizeProp: {
    maxWidth: 245,
    margin: "auto",
    marginBottom: 30,
  },
}));

function MobEvents(props) {
  const styles = useStyles();
  return (
    <Fragment>
      <Grid container>
        <Typography variant="h4" className={styles.headings}>
          Our Upcoming Events
        </Typography>
        <Typography paragraph style={{ padding: 5 }}>
          ...............................................................
          ............................................................... Theses
          are the dummy up coming events.. Later can be added.
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
            <Typography component="div" key={id} style={{ width: "100%" }}>
              <Paper elevation={3} className={styles.sizeProp}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100%"
                      width="100%"
                      image={require(`../../Assets/${image1}.jpg`)}
                      title={name1}
                    />
                    <CardContent>
                      <Typography gutterBottom style={{ height: 50 }}>
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
              <Paper elevation={3} className={styles.sizeProp}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100%"
                      width="100%"
                      image={require(`../../Assets/${image2}.jpg`)}
                      title={name2}
                    />
                    <CardContent>
                      <Typography gutterBottom style={{ height: 50 }}>
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
              <Paper elevation={3} className={styles.sizeProp}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="100%"
                      width="100%"
                      image={require(`../../Assets/${image3}.jpg`)}
                      title={name3}
                    />
                    <CardContent>
                      <Typography gutterBottom style={{ height: 50 }}>
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

export default MobEvents;
