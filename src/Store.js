import { createContext } from "react";
import Axios from 'axios';
import  { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export let trendingContext=createContext(0);
 export function TrendingContextProvider(props){


    const[trendingMovies,setTrendingMovies]=useState([]);
    const[trendingTv,setTrendingTv]=useState([]);
    const[trendingPeople,setTrendingPeople]=useState([]);
    
    
    async function getTrending(mediaType,callBack ){
    let{data}=await Axios.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=b7ed3ef8d2fddd67928ca17512db61f4`)
    
    
    
    callBack(data.results.slice(1,12));
    
    
    
    }
    useEffect(()=>{
    
    getTrending('movie',setTrendingMovies);
    getTrending('tv',setTrendingTv);
    getTrending('person',setTrendingPeople);
    
    
    },[])





    return<trendingContext.Provider value={{trendingMovies,trendingTv,trendingPeople}}>

{props.children}





    </trendingContext.Provider>

}
export let detailsContext=createContext(0);
export default function DetailsContextProvider(props){

    const[movieDetails,setMovieDetails]=useState(null);

    let params=useParams();

console.log(params);
    async function getDetails (id){
let {data}=await Axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b7ed3ef8d2fddd67928ca17512db61f4&language=en-US`)

setMovieDetails(data);
    }


    useEffect(()=>{

getDetails(params.id);

    },[])




return <detailsContext.Provider  value={{movieDetails}}>


{props.children}


</detailsContext.Provider>


}