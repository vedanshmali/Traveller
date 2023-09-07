//import React, { useState } from "react";
//import {
//CircularProgress,
//Grid,
//Typography,
// InputLabel,
// FormControl,
// Select,
//} from "@material-ui/core";
//circularProogress is for loading from material ui
//import useStyles from "./styles";
//import PlaceDetails from "../PlaceDetails/PlaceDetails";
//import { MenuItem } from "@material-ui/core";
//const List = () => {
// const classes = useStyles();
//const [type, setType] = useState("restauransts");
//const [rating, setRating] = useState("");

//<div className={classes.container}>
//<Typography>Restaurants , Hotels, & Attraction on one GO</Typography>
//<FormControl className={classes.FormControl}>
//<InputLabel>Type</InputLabel>
//<Select value={type} onChange={(e) => setType(e.target.value)}>
//{/*on change is a call back function e is event e is the value on it is to be clicked*/}
// <MenuItem value="restaurants">Restaurants </MenuItem>
//{/*these three data is to be modified through state*/}
// <MenuItem value="hotels">Hotels </MenuItem>
//<MenuItem value="attractions">Attractions </MenuItem>
//</Select>
//</FormControl>
// <FormControl className={classes.FormControl}>
// <InputLabel>Rating</InputLabel>
//<Select value={rating} onChange={(e) => setRating(e.target.value)}>
// {/*on change is a call back function e is event e is the value on it is to be clicked*/}
//<MenuItem value={0}>All </MenuItem>
//{/*these three data is to be modified through state* and valyues in these for rating is done to zero*/}
//<MenuItem value={3}>Above 3.0 </MenuItem>
//<MenuItem value={4}> Above 4.0</MenuItem>
//<MenuItem value={4.5}> Above 4.5</MenuItem>
//</Select>
//</FormControl>
//<Grid container spacing={3} className={classes.list}></Grid>
//</div>;

//};

//export default List;
import React, { useState, useEffect, createRef } from "react";
import {
  CircularProgress,
  Grid,
  Typography,
  InputLabel,
  FormControl,
  Select,
} from "@material-ui/core"; //circularProogress is for loading from material ui
import useStyles from "./styles";
import PlaceDetails from "../PlaceDetails/PlaceDetails";
import { MenuItem } from "@material-ui/core";
const List = ({
  places,
  childClicked,
  isLoading,
  type,
  setRating,
  rating,
  setType,
}) => {
  // this props has collected all the details of the places of internet around us
  const classes = useStyles();

  const [elRefs, setElRefs] = useState([]);
  useEffect(() => {
    setElRefs((refs) =>
      Array(places?.length)
        .fill()
        .map((_, i) => refs[i] || createRef())
    );
  }, [places]);
  return (
    <div className={classes.container}>
      <Typography>
        <h1>Restaurants , Hotels, & Attraction on one GO</h1>
      </Typography>
      {isLoading ? (
        <div className="classes.loading">
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              {/*on change is a call back function e is event e is the value on it is to be clicked*/}
              <MenuItem value="restaurants">Restaurants </MenuItem>
              {/*these three data is to be modified through state*/}
              <MenuItem value="hotels">Hotels </MenuItem>
              <MenuItem value="attractions">Attractions </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              {/*on change is a call back function e is event e is the value on it is to be clicked*/}
              <MenuItem value={0}>All </MenuItem>
              {/*these three data is to be modified through state* and valyues in these for rating is done to zero*/}
              <MenuItem value={3}>Above 3.0 </MenuItem>
              <MenuItem value={4}> Above 4.0</MenuItem>
              <MenuItem value={4.5}> Above 4.5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails
                  selected={Number(childClicked) === i}
                  refProp={elRefs[i]}
                  place={place}
                ></PlaceDetails>
              </Grid> //xs means from smallest to biggest devices it will take full widthj on any device
            ))}
          </Grid>
        </>
      )}
    </div>
  );
};

export default List;
