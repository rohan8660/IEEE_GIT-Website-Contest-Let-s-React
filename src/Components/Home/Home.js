import React, { Fragment } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import TabHome from "./TabHome";
import MobHome from "./MobHome";
import SystemHome from "./SystemHome";

function Home(props) {
    const theme = useTheme();
    const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
    const Tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
      <Fragment>
          {Mobile ? <MobHome/> : Tablet ? < TabHome/> : <SystemHome/>}
      </Fragment>
    );
}

export default Home;