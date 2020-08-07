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
    width: "100%",
    display: "flex",
    flexDirection: "column",
    marginBottom: 20,
    flexDirection: "column",

  },
  cardRepeater: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-around",
  },
  imgContainer: {
    width: 100,
    height: 100,
    padding: 10,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  detailContainer:{
      width:"50%"
  }
}));

function MobExecom(props) {
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
        <Typography component="div" className={styles.detailContainer}>
          <Typography vairant="h3">{profile[i].name}</Typography>
          <Typography variant="subtitle2">{profile[i].role}</Typography>
          <Divider color="primary" />
          <Typography component="p">{profile[i].description}</Typography>
        </Typography>
      </Typography>
    );
  }

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" color="initial" style={{ padding: 10 }}>
        Meet Our Execom Members of IEEE-GIT
      </Typography>
      <Paper variant="elevation" className={styles.paperContainer}>
        {myArray1}
      </Paper>
    </Container>
  );
}

export default MobExecom;
