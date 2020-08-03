import React, { Fragment } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import MobFooter from "./MobFooter";
import TabFooter from "./TabFooter";
import SystemFooter from "./SystemFooter";

function Footer(props) {
    const theme = useTheme();
    const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
    const Tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
      <Fragment>
          {Mobile ? <MobFooter /> : Tablet ? < TabFooter/> : <SystemFooter/>}
      </Fragment>
    );
}

export default Footer;