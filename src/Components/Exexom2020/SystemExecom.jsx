import React from "react";
import {
  Container,
  Paper,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";
import profile from "./Profile";

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
  },
  cardRepeater: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "40%",
    justifyContent: "space-around",
  },
  imgContainer: {
    width: 200,
    height: 200,
    padding: 10,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
}));

function SystemExecom(props) {
  const styles = useStyles();

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" color="initial" style={{ padding: 10 }}>
        Meet Our Execom Members of IEEE-GIT
      </Typography>
      <Paper
        variant="elevation"
        elevation={3}
        className={styles.paperContainer}
      >
        {profile.map(
          ({
            name1,
            name2,
            role1,
            role2,
            image1,
            image2,
            description2,
            description1,
            id,
          }) => (
            <Typography
              component="div"
              className={styles.cardRepeater}
              key={id}
            >
              <Typography component="div" className={styles.cardContainer}>
                <Typography component="div" className={styles.imgContainer}>
                  <Typography
                    className={styles.imageStyle}
                    component="img"
                    src={require(`../../Assets/${image1}.jpg`)}
                  ></Typography>
                </Typography>
                <Typography component="div">
                  <Typography vairant="h3">{name1}</Typography>
                  <Typography variant="subtitle2">{role1}</Typography>
                  <Divider color="primary" />
                  <Typography component="p">{description1}</Typography>
                </Typography>
              </Typography>
              <Typography component="div" className={styles.cardContainer}>
                <Typography component="div" className={styles.imgContainer}>
                  <Typography
                    className={styles.imageStyle}
                    component="img"
                    src={require(`../../Assets/${image2}.jpg`)}
                  ></Typography>
                </Typography>
                <Typography component="div">
                  <Typography vairant="h3">{name2}</Typography>
                  <Typography variant="subtitle2">{role2}</Typography>
                  <Divider color="primary" />
                  <Typography component="p">{description2}</Typography>
                </Typography>
              </Typography>
            </Typography>
          )
        )}
      </Paper>
    </Container>
  );
}

export default SystemExecom;
