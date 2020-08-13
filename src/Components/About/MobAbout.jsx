import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import history from "./HistoryPoints";
import achievements from "./Achievements";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
  },
  subHeadings: {
    padding: 5,
  },
  paragraphStyle: {
    paddingLeft: 20,
  },
  listStyle: {
    padding: 5,
  },
}));

function TabAbout(props) {
  const styles = useStyles();
  return (
    <Grid container className={styles.root}>
      <Grid item>
        <Typography variant="h6" className={styles.subHeadings}>
          Overview on IEEE
        </Typography>
        <Typography paragraph className={styles.paragraphStyle}>
          IEEE is the world’s largest technical professional organization
          dedicated to advancing technology for the benefit of humanity. IEEE
          and its members inspire a global community through its highly cited
          publications, conferences, technology standards, and professional and
          educational activities.It is designed to serve professionals involved
          in all aspects of the electrical, electronic, and computing fields and
          related areas of science and technology that underlie modern
          civilization.IEEE's roots go back to 1884 when electricity began to
          become a major influence in society. There was one major established
          electrical industry, the telegraph, which since the 1840s had come to
          connect the world with a data communications system faster than the
          speed of transportation. Below, you can find IEEE's mission and vision
          statements.IEEE is the world’s most trusted source for engineering,
          computing, and technology professionals. A global community, the
          association supports technological innovation for the benefit of
          humanity. Through member collaboration and the association's diverse
          selection of publications, conferences, educational resources, and
          standards development, IEEE advances innovation and technological
          excellence while inspiring future generations.IEEE is a leading
          developer of international standards that underpin many of today's
          telecommunications, information technology, and power-generation
          products and services.
        </Typography>
        <Typography component="div" className={styles.paragraphStyle}>
          <Typography variant="h6">Mission</Typography>
          <Typography paragraph>
            "IEEE's core purpose is to foster technological innovation and
            excellence for the benefit of humanity. "
          </Typography>
          <Typography variant="h6">Vision</Typography>
          <Typography paragraph>
            "IEEE will be essential to the global technical community and to
            technical professionals everywhere, and be universally recognized
            for the contributions of technology and of technical professionals
            in improving global conditions."
          </Typography>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" className={styles.subHeadings}>
          History of IEEE-GIT
        </Typography>
        <Typography component="ul" className={styles.paragraphStyle}>
          {history.map(({ info, id }) => (
            <Typography component="li" key={id} className={styles.listStyle}>
              {info}
            </Typography>
          ))}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6" className={styles.subHeadings}>
          Achievements
        </Typography>
        <Typography component="ul" className={styles.paragraphStyle}>
          {achievements.map(({ info, id }) => (
            <Typography component="li" key={id} className={styles.listStyle}>
              {info}
            </Typography>
          ))}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default TabAbout;
