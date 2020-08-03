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
    height: 300,
  },
  eachTimeItem: {
    width: "100%",
    boxSizing: "inherit",
  },
  headLine: {
    textAlign: "center",
    fontWeight: "500",
  },
  dotTime: {
    color: red[500],
  },
}));

function SystemTimeLine(props) {
  const styles = useStyle();
  return (
    <Container fixed>
      <Typography variant="h2" className={styles.headLine}>
        Timeline
      </Typography>
      <Timeline align="alternate">
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
            <TimelineContent>
              <Paper elevation={3}>
                <Card className={styles.root}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={require(`../../Assets/${image}.jpg`)}
                      title={title}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {title}
                      </Typography>
                      <Typography variant="body2" component="p">
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color={red[500]}>
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
    </Container>
  );
}

export default SystemTimeLine;
