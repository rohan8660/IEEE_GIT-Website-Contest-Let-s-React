import React, { Fragment } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import MobHeader from "./MobHeader";
import TabHeader from "./TabHeader";
import SystemHeader from "./SystemHeader";

function Header(props) {
  const theme = useTheme();
  const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
  const Tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <Fragment>
        {Mobile ? <MobHeader /> : Tablet ? <TabHeader /> : <SystemHeader/>}
    </Fragment>
  );
}

export default Header;
