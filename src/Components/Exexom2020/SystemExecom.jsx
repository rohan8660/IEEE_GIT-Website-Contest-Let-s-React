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
  var myArray1 = [];
  var myArray2 = [];
  for (let i = 0; i < profile.length; i++) {
    myArray1.push(
      <Typography
        component="div"
        className={styles.cardContainer}
        key={Math.random()}
      >
        <Typography component="div" className={styles.imgContainer}>
          <Typography
            className={styles.imageStyle}
            component="img"
            src={require(`../../Assets/${profile[i].image}.jpg`)}
          ></Typography>
        </Typography>
        <Typography component="div">
          <Typography vairant="h3">{profile[i].name}</Typography>
          <Typography variant="subtitle2">{profile[i].role}</Typography>
          <Divider color="primary" />
          <Typography component="p">{profile[i].description}</Typography>
        </Typography>
      </Typography>
    );
  }
  for (let j = 0; j < profile.length; j += 2) {
    myArray2.push(
      <Typography
        component="div"
        className={styles.cardRepeater}
        key={Math.random()}
      >
        {myArray1[j]}
        {myArray1[j + 1]}
      </Typography>
    );
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" color="initial" style={{ padding: 10 }}>
        Meet Our Execom Members of IEEE-GIT
      </Typography>
      <Paper variant="elevation" elevation={3} className={styles.paperContainer}>
        {myArray2}
      </Paper>
    </Container>
  );
}

export default SystemExecom;
