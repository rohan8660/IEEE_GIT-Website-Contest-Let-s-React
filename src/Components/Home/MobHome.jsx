import React, { Fragment,useState } from "react";
import { makeStyles, Typography, Button, Grid, Paper,Collapse } from "@material-ui/core";
import CarouselHome from "./CarouselHome";
import CountUp from "react-countup";
import CardCarousel from "./CardCarousel";
import Lottie from "react-lottie";
import animationData from "../../Assets/Lottie/28705-student-university-character.json";
import animationData1 from "../../Assets/Lottie/20135-profesor.json";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  tabImgProp: {
    width: "100%",
    height: 200,
    backgroundRepeat: "no-repeat",
    // opacity: "0.6",
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
    width: "95%",
    // height: 250,
    backgroundColor: "rgba(255,255,255,0.3)",
    position: "absolute",
    top: 220,
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    borderRadius: 10,
  },
  gridRoot2: {
    display: "flex",
    flexDirection: "column",
  },
  typo1: {
    textAlign: "center",
  },
  counterMainContainer: {
    width: "100%",
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
    flexDirection: "column",
  },
  joinPaper: {
    margin: 10,
    padding: 10,
  },
  joinButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
  },
  joinButton: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    margin:15,
    "&:hover": {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.dark,
    },
  },
  sizeProp: {
    maxHeight: "100%",
    maxWidth: 225,
    borderRadius: 10,

  },
  titleText: {
    fontSize: 16,
    fontWeight: "600",
  },
}));

function MobHome(props) {
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
  const [Expand, setExpand] = useState(false);
  return (
    <Fragment>
      <CarouselHome
        imgStyle={styles.imageProp}
        imgDivStyle={styles.tabImgProp}
      />
      <Grid container className={styles.gridRoot}>
        <Paper elevation={3} className={styles.paperRoot}>
          <Typography component="div" className={styles.counterMainContainer}>
            <Typography component="div" className={styles.lottieContainer}>
              <Lottie options={defaultOptions} height={100} width={100} />
              <Typography component="div" className={styles.counterContainer}>
                <CountUp
                  start={0}
                  end={14}
                  duration={4}
                  className={styles.counterStyle}
                />
                <Typography variant="caption" color="secondary">
                  Total students joined
                </Typography>
              </Typography>
            </Typography>
            <Typography component="div" className={styles.lottieContainer}>
              <Lottie options={defaultOptions1} height={100} width={100} />
              <Typography component="div" className={styles.counterContainer}>
                <CountUp
                  start={0}
                  end={20}
                  duration={4}
                  className={styles.counterStyle}
                />
                <Typography variant="caption" color="secondary">
                  Total faculty joined
                </Typography>
              </Typography>
            </Typography>
          </Typography>
        </Paper>
      </Grid>
      <Grid>
        <Typography component="div" style={{ height: 150 }} />
      </Grid>
      <Grid container className={styles.gridRoot2}>
        <Typography variant="h6" style={{ padding: 20 }}>
        We offer wonderful technology to our students and professors!!
        </Typography>
        <Typography component="div">
          <CardCarousel
            imgStyle={1}
            sizeProp={styles.sizeProp}
            titleText={styles.titleText}
          />
        </Typography>
      </Grid>
      <Grid container className={styles.gridRoot2}>
        <Typography variant="h6" style={{ padding: 20 }}>
          You can continuously learn, interact, collaborate and innovate.
        </Typography>
        <Paper variant="elevation" elevation={3} className={styles.joinPaper}>
          <Typography component="div">
            <Typography variant="h6">
              Get the resources and opportunities you need to keep on top of
              changes in technology.
            </Typography>
            <Typography component="h6" variant="subtitle1">
              When you join IEEE, you:
            </Typography>
            {Expand ? null : (
              <Typography component="div" onClick={() => setExpand(true)} style={{display:"flex",flexDirection:"row",cursor:"pointer"}}>
                <Typography style={{color:"blue"}}>Read More</Typography>
                <ExpandMore />
              </Typography>
            )}

            <Collapse in={Expand} timeout="auto" unmountOnExit>
            <Typography component="ul">
              <Typography component="li" variant="subtitle2">
                Join a community of over 420,000 technology and engineering
                professionals united by a common desire to continuously learn,
                interact, collaborate, and innovate
              </Typography>
              <Typography component="li" variant="subtitle2">
                Get the resources and opportunities you need to keep on top of
                changes in technology
              </Typography>
              <Typography component="li" variant="subtitle2">
                Get involved in standards development
              </Typography>
              <Typography component="li" variant="subtitle2">
                Network with other professionals in your local area or within a
                specific technical interest
              </Typography>
              <Typography component="li" variant="subtitle2">
                Mentor the next generation of engineers and technologists
              </Typography>
            </Typography>
            <Typography variant="subtitle1">and so much more.</Typography>
            <Typography
                component="div"
                onClick={() => setExpand(false)}
                style={{display:"flex",flexDirection:"row",cursor:"pointer"}}>
                <Typography style={{color:"blue"}}>Read Less</Typography>
                <ExpandLess />
              </Typography>
            </Collapse>
            <br />
            <Typography variant="subtitle1">
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
              href="https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoib20iLCJzdWZmaXgiOiJRTHVUTmkuMTU5NzQ5MzUzMSJ9..tuyPTzlkkixQ8k7a2XjcnQ.jpVgAiAfPuebt92YAF6WRB2jZGg-Vp9sLbbQsuW_V47mtBs_KDyS6HxTBYACAEK1Fz4OzMjcm4ByAro2RkIX2vKJrW5MeZA22eKW-lu03zAvuO9oAJqibI4e0TCZ1O8Ovnt32nRMOogu2FwDTma5TA.blUpGY8PI4KA5nlOTmrEJQ&nonce=oXs5cx9q9MksLKcuvDPdyCftdO_oy9GOACBDPxflovI&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fgrade%3DMember%26promo%3DIEEEJOINP&vnd_pi_application_name=MembershipApplication"
            >
              Join as a profesional
            </Button>
            <Button
              variant="contained"
              className={styles.joinButton}
              href="https://services10.ieee.org/as/authorization.oauth2?response_type=code&client_id=PF_AS_FOR_PA&redirect_uri=https%3A%2F%2Fwww.ieee.org%2Fpa%2Foidc%2Fcb&state=eyJ6aXAiOiJERUYiLCJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2Iiwia2lkIjoib20iLCJzdWZmaXgiOiJhbExrUWkuMTU5NzQ5MzQzNiJ9..Ot6plNzNKa-AX0zeW6AApA.qXUNrYhu8uC4SNbBCa2qbSE0eiEHhUFg40K8l68IUGcRJY_KDIoUFJ1PBbUFOcfbJDNkSpZmvKNHzfYHd8G3TVBYPBNKtccfCKvqVv5EOBVrFPpfB107RJoBi1CuLKRkqF4uKv8W0dfdJZTZJQuTFQ.4jGcucqxKdT79TYJnnRLmg&nonce=Xn2k1MQUy8_yOic145orrS-jiew-kxHa6oL9nJp8yzM&acr_values=msp%20sts%20stm%20prf%20crt%20col%20otk%20cmc%20cmp%20spe&scope=openid%20profile%20address%20email%20phone&vnd_pi_requested_resource=https%3A%2F%2Fwww.ieee.org%2Fmembership-application%2Fjoin.html%3Fgrade%3DStudent%26promo%3DIEEEJOINS&vnd_pi_application_name=MembershipApplication"
            >
              Join as a student
            </Button>
          </Typography>
        </Paper>
      </Grid>
    </Fragment>
  );
}

export default MobHome;
