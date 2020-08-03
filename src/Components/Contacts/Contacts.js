import React, { Fragment } from "react";
import { useTheme, useMediaQuery } from "@material-ui/core";
import MobCotacts from "./MobCotacts";
import SystemContacts from "./SystemContacts";
import TabContacts from "./TabContacts";


function Contacts(props) {
    const theme = useTheme();
    const Mobile = useMediaQuery(theme.breakpoints.between("xs", "sm"));
    const Tablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
    return (
      <Fragment>
          {Mobile ? <MobCotacts/> : Tablet ? <TabContacts/> : <SystemContacts/>}
      </Fragment>
    );
}

export default Contacts;