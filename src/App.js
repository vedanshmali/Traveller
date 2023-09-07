import React,{useEffect} from 'react'
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';
import List from './components/List/List';
import{getPlacesData} from './api'
import { CssBaseline,Grid } from '@mui/material';
import { useState } from 'react';
const App = () => {
 const[isLoading,setIsLoading]=useState(false);
 const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
const[places,setPlaces]=useState([]);
const[childClicked,setChildClicked]=useState(null);
const[coordinates,setCoordinates]=useState({});
const[bounds,setBounds]=useState({}); //top right and bottom right cornesr  
useEffect(()=>{
navigator.geolocation.getCurrentPosition(({coords:{latitude,longitude}})=>{
  setCoordinates({lat:latitude,lng:longitude}) //this is for the current location of li

})
},[])
  useEffect(()=>{
    setIsLoading(true);
    getPlacesData(type,bounds.sw,bounds.ne)//to get the actual place ex dynamic places of diff lat and long we
    .then((data)=>{ //as get places is an async function we have to udse .then method
      console.log(data);
      setPlaces(data);
      setIsLoading(false);
    })

  },[type,coordinates,bounds])//dont leave the square brackets empty
  return (
  <>
  <CssBaseline/>\
  <Header/>
  <Grid container spacing={3} style={{width:"100%"}}/>
  <Grid item x5={12} md={4}>
<List places={places}
childClicked={childClicked}
isLoading={isLoading}
type={type}
setType={setType}
rating={rating}
setRating={setRating}
/>
  </Grid>
  <Grid item x5={12} md={8}>
    <Map setCoordinates={setCoordinates}
      setBounds={setBounds}
      coordinates={coordinates}
      places={places}
      setChildClicked={setChildClicked}/>
   
  </Grid>


  
  
  </>
  )
}

export default App;