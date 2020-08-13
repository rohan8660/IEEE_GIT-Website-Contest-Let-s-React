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
  containerStyle: {
    padding: 20,
  },
}));

function CardCarousel({ imgStyle,sizeProp,titleText }) {
  const styles = useStyles();
  return (
    <Carousel itemsToShow={imgStyle} pagination={false}>
      {techCards.map(({title,description,image,link,id})=>(<Typography component="div" key={id} className={styles.containerStyle}>
        <Card className={sizeProp}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={require(`../../Assets/${image}.jpg`)}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom className={titleText} style={{height:80}}>
                {title}
              </Typography>
              <Typography variant="body2" component="p" noWrap={true}>
                {description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" href={link}>
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Typography>))}
    </Carousel>
  );
}

export default CardCarousel;
