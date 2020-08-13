import React from "react";
import {
  Container,
  Paper,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";
import profile from "./Profile";
import InstagramIcon from "@material-ui/icons/Instagram";

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
    // justifyContent: "space-around",
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
  detailContainer: {
    width: "50%",
  },
  socialIcon: {
    width: 20,
    height: 20,
    padding: 5,
  },
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
            instaId1,
            instaId2,
            id,
          }) => (
            <Typography component="div" key={id}>
              <Typography component="div" className={styles.cardContainer}>
                <Typography component="div" className={styles.imgContainer}>
                  <Typography
                    className={styles.imageStyle}
                    component="img"
                    src={require(`../../Assets/${image1}.jpg`)}
                  ></Typography>
                </Typography>
                <Typography component="div">
                  <Typography vairant="h3" style={{ fontWeight: "bold" }}>
                    {name1}
                  </Typography>
                  <Typography variant="subtitle2">{role1}</Typography>
                  <Divider color="primary" />
                  <a href={instaId1}>
                    <Typography
                      className={styles.socialIcon}
                      component="img"
                      src={require(`../../Assets/insta.jpg`)}
                    ></Typography>
                  </a>
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
                  <Typography vairant="h3" style={{ fontWeight: "bold" }}>
                    {name2}
                  </Typography>
                  <Typography variant="subtitle2">{role2}</Typography>
                  <Divider color="primary" />
                  <a href={instaId2}>
                    <Typography
                      className={styles.socialIcon}
                      component="img"
                      src={require(`../../Assets/insta.jpg`)}
                    ></Typography>
                  </a>
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
