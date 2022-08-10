import styles from './Movies.module.css'
import React,{useContext} from 'react'
import { trendingContext } from '../Store'
import { Link } from 'react-router-dom';

export default function Movies() {

  let{trendingMovies}=useContext(trendingContext)






  return (


<>
 <div className="container py-5">
  <div className="row g-3">
<div className="col">
<div >
  <div className={styles.topLine}></div>
  <h2 className='w-25 text-white fw-bold'>Trending movies</h2>
<h3 className='text-white fw-bold h2 '> to watch now</h3>
<p className={styles.para}>most watched moves by day</p>
<div className={styles.bottomLine}></div>
</div>


</div>

{trendingMovies.map((movie,i)=><div key={i} className="col-md-3">
<div>
<Link to={`/moviedetails/${movie.id}`}>
<img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}   className="w-100 h-100"      alt="" />


</Link>
<p className='text-white h5 fw-bold mt-2 text-center'>{movie.title}</p>



</div>
  




  </div>)}
 </div>

 </div>
 </>
  )
}
