import React from "react";
import {
  makeStyles,
  Container,
  CardMedia,
  Card,
  CardActionArea,
  CardContent,
  CardActions,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import cardContent from "./cardContent";
import red from "@material-ui/core/colors/red";


const useStyle = makeStyles((theme) => ({

  eachTimeItem: {
    marginTop: 20,
    padding:0
  },
  headLine: {
    textAlign: "center",
    fontWeight: "900",
  },
  dotTime: {
    color: red[500],
  },
  missingOppositeContent:{
    '&::before': {
    padding:0,
    flex:0
    }
  }
}));



function MobTimeLine(props) {
  const styles = useStyle();
  return (
    <Typography component="div">
      <Typography variant="h6" className={styles.headLine}>
        Timeline
      </Typography>
      <Timeline align="left">
        {cardContent.map(({ title, description, image, date, id }) => (
          <TimelineItem key={id} classes={{
            root:styles.eachTimeItem,
            missingOppositeContent:styles.missingOppositeContent
          }} >
            <TimelineSeparator >
              <TimelineDot>
                <LocalActivityIcon className={styles.dotTime}/>
              </TimelineDot>
              <TimelineConnector className={styles.dotTime}/>
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="body2"
                style={{ fontSize: 16, fontWeight: "bold" }}
              >
                {date}
              </Typography>
              <Paper elevation={3}>
                <Card className={styles.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="80"
                      image={require(`../../Assets/${image}.jpg`)}
                      title={title}
                    />
                  </CardActionArea>
                  <CardContent>
                    <Typography
                      variant="subtitle1"
                      component="h6"
                      style={{ fontWeight: "900" }}
                    >
                      {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {description}
                    </Typography>
                  </CardContent>
                </Card>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem className={styles.eachTimeItem}>
          <TimelineSeparator>
            <TimelineDot>
              <AcUnitIcon className={styles.dotTime} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3}>
              <Typography variant="h6" component="h1">
                Hoo Ya!!
              </Typography>
              <Typography>That's the end</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Typography>
  );
}

export default MobTimeLine;
