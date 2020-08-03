import React, { Fragment } from "react";
import Carousel from "react-elastic-carousel";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardActions,
  CardContent,
  Button,
} from "@material-ui/core";
import techCards from "./cards";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  containerStyle: {
    padding: 20,
  },
}));

function CardCarousel({ imgStyle }) {
  const styles = useStyles();
  return (
    <Carousel itemsToShow={3} pagination={false}>
      {techCards.map(({title,description,image,id})=>(<Typography component="div" key={id} className={styles.containerStyle}>
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
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Typography>))}
    </Carousel>
  );
}

export default CardCarousel;
