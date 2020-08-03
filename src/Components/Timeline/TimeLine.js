import React, { Fragment } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import MobTimeLine from "./MobTimeLine.jsx";
import TabTimeLine from "./TabTimeLine";
import SystemTimeLine from "./SystemTimeLine";

function TimeLine(props) {
    const theme = useTheme();
    const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
    const Tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
      <Fragment>
          {Mobile ? <MobTimeLine/> : Tablet ? <TabTimeLine/> : <SystemTimeLine/>}
      </Fragment>
    );
}

export default TimeLine;