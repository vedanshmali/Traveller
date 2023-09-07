import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import useStyles from "./styles.js";

const Header = ({ setCoordinates }) => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Traveller
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore
          </Typography>

          <InputBase
            placeholder="Search…"
            classes={{ root: classes.inputRoot, input: classes.inputInput }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
