import React, { Fragment } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import MobEvents from "./MobEvents";
import TabEvents from "./TabEvents";
import SystemEvents from "./SystemEvents";

function Events(props) {
    const theme = useTheme();
    const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
    const Tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
      <Fragment>
          {Mobile ? < MobEvents/> : Tablet ? <TabEvents /> : <SystemEvents/>}
      </Fragment>
    );
}

export default Events;