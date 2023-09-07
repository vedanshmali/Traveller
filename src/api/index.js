import axios from "axios"; //library which will allow us to make our calls




  



export const getPlacesData = async(type,sw,ne) => {
    try{
//try block has request if that request approves it wil run as it suppose to run if fail it will go to catch error block
const {data:{data}}=await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
  
 
  params: {// these are the actual coodrinates of the our program
    bl_latitude: sw.lat,
    tr_latitude: ne.lat,
    bl_longitude: sw.lng,
    tr_longitude: ne.lng,
   

  },
  headers: {
    'X-RapidAPI-Key': '5bfeb5391cmsh1804a3ee08059f2p128406jsnddfdaa5df1eb',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }});
  

return data;
} catch(error){
    console.log(error)

    }
 
} 

