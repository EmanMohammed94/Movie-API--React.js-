
import styles from './Home.module.css'



import React,{useContext} from 'react'
import { trendingContext } from '../Store'
import { Link } from 'react-router-dom';

export default function Home() {

let{trendingMovies,trendingTv,trendingPeople}=useContext(trendingContext)
  return (<>
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
<Link to={`/movieDetails/${movie.id}`}>
<img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}   className="w-100 h-100"      alt="" />


</Link>
<p className='text-white h5 fw-bold mt-2 text-center'>{movie.title}</p>



</div>
  




  </div>)}
 </div>

 
 



 <div className="row g-3 py-5">
<div className="col">
<div >
  <div className={styles.topLine}></div>
  <h2 className='w-25 text-white fw-bold'>Trending tv</h2>
<h3 className='text-white fw-bold h2 '> to watch now</h3>
<p className={styles.para}>most watched tv by day</p>
<div className={styles.bottomLine}></div>
</div>


</div>

{trendingTv.map((tv,i)=><div key={i} className="col-md-3">
<div>

<Link to={`/TvDetails/${tv.id}`}>
<img src={"https://image.tmdb.org/t/p/w500"+tv.poster_path}   className="w-100 h-100"      alt="" />


</Link>

<p className='text-white h5 fw-bold mt-2 text-center'>{tv.name}</p>

</div>
  




  </div>)}
 </div>






 <div className="row g-3 py-5">
<div className="col">
<div >
  <div className={styles.topLine}></div>
  <h2 className='w-25 text-white fw-bold'>Trending people</h2>
<h3 className='text-white fw-bold h2 '> to know now</h3>
<p className={styles.para}>most trending people by day</p>
<div className={styles.bottomLine}></div>
</div>


</div>

{trendingPeople.map((person,i)=><div key={i} className="col-md-3">
<div>

<img src={"https://image.tmdb.org/t/p/w500"+person.profile_path}   className="w-100 h-100"      alt="" />

<p className='text-white h5 fw-bold mt-2 text-center'>{person.name}</p>

</div>
  




  </div>)}
 </div>

 



 </div>
 </>
  )

}
