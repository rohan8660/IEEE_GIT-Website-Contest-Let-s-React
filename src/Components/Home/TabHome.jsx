import React,{Fragment} from "react";
import { makeStyles,Typography,Button,Grid,Paper } from "@material-ui/core";
import CarouselHome from "./CarouselHome";
import CountUp from "react-countup";
import CardCarousel from "./CardCarousel";
import Lottie from "react-lottie";
import animationData from "../../Assets/Lottie/28705-student-university-character.json";
import animationData1 from "../../Assets/Lottie/20135-profesor.json";

const useStyles = makeStyles((theme) => ({
  tabImgProp: {
    width: "100%",
    height: 400,
    backgroundRepeat: "no-repeat",
    opacity: "0.6",
  },
  imageProp: {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    opacity: "0.6",
  },
  gridRoot: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  paperRoot: {
    width: "90%",
    height: 250,
    backgroundColor: "rgba(255,255,255,0.3)",
    position: "absolute",
    top: 350,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  gridRoot2: {
    display: "flex",
    flexDirection: "column",
  },
  typo1: {
    textAlign: "center",
    padding: 40,
  },
  counterMainContainer: {
    width: "100%",
    height: 180,
    display: "flex",
    justifyContent: "space-around",
    alignContent: "center",
    backgroundColor: "#000000",
    borderRadius: 10,
  },
  counterContainer: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    border: "solid green",
    margin: 10,
    borderRadius: 10,
  },
  counterStyle: {
    color: theme.palette.secondary.main,
    textAlign: "center",
    fontFamily: "900",
    fontSize: 20,
  },
  lottieContainer: {
    display: "flex",
    flexDirection: "row",
  },
  joinPaper: {
    margin: 10,
    padding: 20,
  },
  joinButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    padding: 10,
  },
  joinButton: {
    backgroundColor: "coral",
  },
  sizeProp:{
    maxWidth:345
  }
}));

function TabHome(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: animationData1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const styles = useStyles();
  return (
    <Fragment>
      <CarouselHome imgStyle={styles.imageProp} imgDivStyle={styles.tabImgProp} />
      <Grid container className={styles.gridRoot}>
        <Paper elevation={3} className={styles.paperRoot}>
          <Typography variant="h5" className={styles.typo1}>
            Welcome to all the enthusiastic students and faculty..
          </Typography>
          <Typography component="div" className={styles.counterMainContainer}>
            <Typography component="div" className={styles.lottieContainer}>
              <Lottie options={defaultOptions} height={170} width={170} />
              <Typography component="div" className={styles.counterContainer}>
                <CountUp
                  start={0}
                  end={14}
                  duration={4}
                  className={styles.counterStyle}
                />
                <Typography variant="h6" color="secondary">
                  Total students joined
                </Typography>
              </Typography>
            </Typography>
            <Typography component="div" className={styles.lottieContainer}>
              <Lottie options={defaultOptions1} height={170} width={170} />
              <Typography component="div" className={styles.counterContainer}>
                <CountUp
                  start={0}
                  end={20}
                  duration={4}
                  className={styles.counterStyle}
                />
                <Typography variant="h6" color="secondary">
                  Total faculty joined
                </Typography>
              </Typography>
            </Typography>
          </Typography>
        </Paper>
      </Grid>
      <Grid>
        <Typography component="div" style={{ height: 155 }} />
      </Grid>
      <Grid container className={styles.gridRoot2}>
        <Typography variant="h4" style={{ padding: 20 }}>
          We offer wonferful technolgy to our students and profesionals!!
        </Typography>
        <Typography component="div">
          <CardCarousel imgStyle={2} sizeProp={styles.sizeProp}/>
        </Typography>
      </Grid>
      <Grid container className={styles.gridRoot2}>
        <Typography variant="h4" style={{ padding: 20 }}>
          You can continuously learn, interact, collaborate and innovate.
        </Typography>
        <Paper variant="elevation" elevation={3} className={styles.joinPaper}>
          <Typography component="div">
            <Typography variant="h5" component="h6">
              Get the resources and opportunities you need to keep on top of
              changes in technology.
            </Typography>
            <Typography component="h6" variant="h6">
              When you join IEEE, you:
            </Typography>
            <Typography component="ul">
              <Typography component="li">
                Join a community of over 420,000 technology and engineering
                professionals united by a common desire to continuously learn,
                interact, collaborate, and innovate
              </Typography>
              <Typography component="li">
                Get the resources and opportunities you need to keep on top of
                changes in technology
              </Typography>
              <Typography component="li">
                Get involved in standards development
              </Typography>
              <Typography component="li">
                Network with other professionals in your local area or within a
                specific technical interest
              </Typography>
              <Typography component="li">
                Mentor the next generation of engineers and technologists
              </Typography>
            </Typography>
            <Typography component="h6" variant="h6">
              and so much more.
            </Typography>
            <br />
            <Typography component="h6" variant="h6">
              Enhance your IEEE membership by joining a Society specializing in
              your technical interests, for as little as US$10 per year. There's
              no better time to take advantage of what IEEE has to offer. Join
              now and get membership benefits through the end of 2020, plus save
              50% on membership dues.*
            </Typography>
          </Typography>
          <Typography component="div" className={styles.joinButtonContainer}>
            <Button
              variant="contained"
              className={styles.joinButton}
              href="#contained-buttons"
            >
              Jion as a profesional
            </Button>
            <Button
              variant="contained"
              className={styles.joinButton}
              href="#contained-buttons"
            >
              Jion as a student
            </Button>
          </Typography>
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default TabHome;
