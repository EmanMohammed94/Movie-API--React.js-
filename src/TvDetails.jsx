
import React from 'react'
import Axios from 'axios';
import  { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';


export default function TvDetails() {


   const[tvDetails,setTvDetails]=useState(null);
   let params=useParams();
 
   console.log(params);
       async function getDetails (id){
   let {data}=await Axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=b7ed3ef8d2fddd67928ca17512db61f4&language=en-US`)
   
   setTvDetails(data);
       }
   
   
       useEffect(()=>{
   
   getDetails(params.id);
   
       },[])


  









  return (<>
   <div className="container py-5">
   {tvDetails?<div className="row">
<div className="col-md-4">
<img src={"https://image.tmdb.org/t/p/w500"+tvDetails.poster_path} className="w-100 h-100" alt="" />

</div>
<div className="col-md-7">
<h2 className='text-white fw-bold'>{tvDetails.title}</h2>
<p style={{color:'gray'}}>{tvDetails.tagline}</p>

<div className='d-flex'>
{tvDetails.genres.map((genre,id)=><div key={id} className='btn btn-info mx-2 '>

{genre.name}

</div>)}
</div>
<div className='d-flex flex-column mt-3 ' >
<span className='mt-1'>vote : {tvDetails.vote_average}</span>
<span className='mt-1'>vote count : {tvDetails.vote_count}</span>
<span className='mt-1'>popularity : {tvDetails.popularity}</span>
<span className='mt-1'>release-date : {tvDetails.release_date}</span>


</div>
<p style={{color:'gray'}} className="mt-3 h6">{tvDetails.overview}</p>
</div>


</div>:<div style={{fontSize:'30px'}} className='d-flex justify-content-center w-100 ' >
  <span className='mx-2'>Loading</span>
  <i className="fa-solid fa-spin  fa-spinner"></i>
  </div>}


   </div>

</>
  )
}
