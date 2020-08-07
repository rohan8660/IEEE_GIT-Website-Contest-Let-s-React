import React, { Fragment } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import MobAbout from "./MobAbout";
import TabAbout from "./TabAbout";
import SystemAbout from "./SystemAbout";

function About(props) {
    const theme = useTheme();
    const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
    const Tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
      <Fragment>
          {Mobile ? < MobAbout/> : Tablet ? <TabAbout /> : <SystemAbout/>}
      </Fragment>
    );
}

export default About;