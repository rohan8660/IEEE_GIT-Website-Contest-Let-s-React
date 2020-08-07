import React, { Fragment } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import MobExecom from "./MobExecom";
import TabExecom from "./TabExecom";
import SystemExecom from "./SystemExecom";


function Execom2020(props) {
    const theme = useTheme();
    const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
    const Tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
      <Fragment>
          {Mobile ? <MobExecom /> : Tablet ? < TabExecom/> : <SystemExecom/>}
      </Fragment>
    );
}

export default Execom2020;