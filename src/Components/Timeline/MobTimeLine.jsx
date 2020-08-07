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
  TimelineOppositeContent,
} from "@material-ui/lab";
import LocalActivityIcon from "@material-ui/icons/LocalActivity";
import AcUnitIcon from "@material-ui/icons/AcUnit";
import cardContent from "./cardContent";
import red from "@material-ui/core/colors/red";

const useStyle = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    height: 200,
    width: 200,
  },
  eachTimeItem: {
    width: 0,
    boxSizing: "inherit",
  },
  headLine: {
    textAlign: "center",
    fontWeight: "900",
  },
  dotTime: {
    color: red[500],
  },
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
          <TimelineItem key={id} className={styles.eachTimeItem}>
            <TimelineOppositeContent>
              <Typography variant="body2">{date}</Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className={styles.dotTime}>
                <LocalActivityIcon />
              </TimelineDot>
              <TimelineConnector className={styles.dotTime} />
            </TimelineSeparator>
            <TimelineContent style={{height:300}}>
              <Paper elevation={3}>
                <Card className={styles.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={require(`../../Assets/${image}.jpg`)}
                      title={title}
                    />
                    <CardContent style={{padding:0,margin:0}} >
                      <Typography
                        variant="subtitle1"
                        component="h6"
                        style={{fontWeight:"900"}} 
                      >
                        {title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions style={{padding:0,margin:0}}>
                    <Button size="small" >
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        ))}
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot>
              <AcUnitIcon className={styles.dotTime} />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3}>
              <Typography variant="h6" component="h1">
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Typography>
  );
}

export default MobTimeLine;
