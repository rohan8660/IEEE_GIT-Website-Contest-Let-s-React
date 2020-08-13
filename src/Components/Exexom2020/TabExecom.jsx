import React from "react";
import {
  Container,
  Paper,
  Typography,
  Divider,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import profile from "./Profile";
import InstagramIcon from "@material-ui/icons/Instagram";

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
    // justifyContent: "space-around",
  },
  imgContainer: {
    width: 150,
    height: 150,
    padding: 10,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  socialIcon: {
    width: 25,
    height: 25,
    padding: 5,
  },
}));

function TabExecom(props) {
  const styles = useStyles();

  return (
    <Container maxWidth="md">
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
            instaId1,
            instaId2,
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
                  <Typography vairant="h3" style={{ fontWeight: "bold" }}>
                    {name1}
                  </Typography>
                  <Typography variant="subtitle2">{role1}</Typography>
                  <Divider color="primary" />
                  <a href={instaId1}>
                    <Tooltip title="Instagram">
                      <Typography
                        className={styles.socialIcon}
                        component="img"
                        src={require(`../../Assets/insta.jpg`)}
                      ></Typography>
                    </Tooltip>
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
                    <Tooltip title="Instagram">
                      <Typography
                        className={styles.socialIcon}
                        component="img"
                        src={require(`../../Assets/insta.jpg`)}
                      ></Typography>
                    </Tooltip>
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

export default TabExecom;
