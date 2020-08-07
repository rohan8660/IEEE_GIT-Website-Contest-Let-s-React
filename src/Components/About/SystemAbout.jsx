import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import history from "./HistoryPoints";
import achievements from "./Achievements";

const useStyles = makeStyles((theme) => ({
  root: {
    padding:20
  },
  subHeadings:{
    padding:5
  },
  paragraphStyle:{
    padding:"5px 5px 5px 10%"
  },
  listStyle:{
    padding:5
  }
}));

function SystemAbout(props) {
  const styles = useStyles();
  return (
    <Grid container className={styles.root}>
      <Grid item >
        <Typography variant="h4" className={styles.subHeadings}>Overview on IEEE</Typography>
          <Typography paragraph className={styles.paragraphStyle}>
              Non sunt minim elit labore adipisicing anim adipisicing ex qui
              ullamco. Dolore excepteur occaecat reprehenderit esse sit velit
              ullamco culpa. Adipisicing incididunt elit pariatur laborum eu
              duis est non pariatur culpa dolore id. Lorem et quis cupidatat
              aliquip quis irure laboris nulla nulla sunt anim reprehenderit.
              Duis culpa aliquip non nostrud anim labore dolore mollit velit do
              cillum dolore nisi ullamco. Commodo culpa sint consectetur qui
              dolor elit nostrud cupidatat dolore voluptate magna. Anim aliquip
              laboris aliquip exercitation et proident sunt consectetur sunt
              proident tempor.
          </Typography>
      </Grid>
      <Grid item >
        <Typography variant="h4" className={styles.subHeadings}>History of IEEE-GIT</Typography>
         <Typography component="ul" className={styles.paragraphStyle}>
          {history.map(({info,id})=>(
            <Typography component="li" key={id} className={styles.listStyle}>{info}</Typography>
          ))}
         </Typography>
      </Grid>
      <Grid item >
        <Typography variant="h4" className={styles.subHeadings}>Achievements</Typography>
         <Typography component="ul" className={styles.paragraphStyle}>
          {achievements.map(({info,id})=>(
            <Typography component="li" key={id} className={styles.listStyle}>{info}</Typography>
          ))}
         </Typography>
      </Grid>
    </Grid>
  );
}

export default SystemAbout;
