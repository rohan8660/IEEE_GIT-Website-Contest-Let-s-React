import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Paper,
  Divider,
  Button,
} from "@material-ui/core";
import Event from "./Event";

const useStyles = makeStyles((theme) => ({
  headings: {
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
  imageContainer: {
    width: 250,
    height: 150,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    borderRadius: 10,
  },
  paperContainer: {
    width: 250,
    height: 350,
    "&:hover": {
      background: theme.palette.secondary.light,
    },
    margin: "20px 20px 20px 40px",
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
}));

function MobEvents(props) {
  const styles = useStyles();
  return (
    <Fragment>
      <Grid container className={styles.root}>
        <Typography variant="h4" className={styles.headings}>
          Our Upcoming Events
        </Typography>
        <Typography paragraph style={{ padding: 5 }}>
          Sit dolor exercitation elit esse magna sint dolor mollit quis labore.
          Officia sunt do voluptate aliqua voluptate dolor voluptate aute amet
          incididunt mollit non. Officia sit ipsum fugiat elit ea aliquip
          exercitation laboris do. Irure ex duis ea cillum aliqua. Exercitation
          reprehenderit veniam enim velit aliqua qui cillum ipsum cupidatat.
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
            <>
              <Grid item key={id} style={{ width: "100%" }}>
                <Paper
                  variant="elevation"
                  elevation={3}
                  className={styles.paperContainer}
                >
                  <Typography
                    component="div"
                    className={styles.imageContainer}
                  >
                    <Typography
                      component="img"
                      src={require(`../../Assets/${image1}.jpg`)}
                      className={styles.imageStyle}
                    />
                  </Typography>
                  <Typography
                    component="div"
                    className={styles.contentContainer}
                  >
                    <Typography variant="h5" className={styles.subHeading}>
                      {name1}
                    </Typography>
                    <Divider />
                    <Typography component="div">
                      <Typography paragraph className={styles.description}>
                        {description1}
                      </Typography>
                    </Typography>
                    <Button
                      variant="outlined"
                      color="default"
                      className={styles.buttonStyle}
                      href={link1}
                    >
                      Check Out
                    </Button>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item key={id} style={{ width: "100%" }}>
                <Paper
                  variant="elevation"
                  elevation={3}
                  className={styles.paperContainer}
                >
                  <Typography
                    component="div"
                    className={styles.imageContainer}
                  >
                    <Typography
                      component="img"
                      src={require(`../../Assets/${image2}.jpg`)}
                      className={styles.imageStyle}
                    />
                  </Typography>
                  <Typography
                    component="div"
                    className={styles.contentContainer}
                  >
                    <Typography variant="h5" className={styles.subHeading}>
                      {name2}
                    </Typography>
                    <Divider />
                    <Typography component="div">
                      <Typography paragraph className={styles.description}>
                        {description2}
                      </Typography>
                    </Typography>
                    <Button
                      variant="outlined"
                      color="default"
                      className={styles.buttonStyle}
                      href={link2}
                    >
                      Check Out
                    </Button>
                  </Typography>
                </Paper>
              </Grid>
              <Grid item key={id} style={{ width: "100%" }}>
                <Paper
                  variant="elevation"
                  elevation={3}
                  className={styles.paperContainer}
                >
                  <Typography
                    component="div"
                    className={styles.imageContainer}
                  >
                    <Typography
                      component="img"
                      src={require(`../../Assets/${image3}.jpg`)}
                      className={styles.imageStyle}
                    />
                  </Typography>
                  <Typography
                    component="div"
                    className={styles.contentContainer}
                  >
                    <Typography variant="h5" className={styles.subHeading}>
                      {name3}
                    </Typography>
                    <Divider />
                    <Typography component="div">
                      <Typography paragraph className={styles.description}>
                        {description3}
                      </Typography>
                    </Typography>
                    <Button
                      variant="outlined"
                      color="default"
                      className={styles.buttonStyle}
                      href={link3}
                    >
                      Check Out
                    </Button>
                  </Typography>
                </Paper>
              </Grid>
            </>
          )
        )}
      </Grid>
    </Fragment>
  );
}

export default MobEvents;
