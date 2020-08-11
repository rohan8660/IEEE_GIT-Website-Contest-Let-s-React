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

  return (
    <Container maxWidth="sm">
      <Typography variant="h6" color="initial" style={{ padding: 10 }}>
        Meet Our Execom Members of IEEE-GIT
      </Typography>
      <Paper variant="elevation" className={styles.paperContainer}>
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

export default MobExecom;
