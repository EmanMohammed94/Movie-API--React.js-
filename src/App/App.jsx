import React, { useState,useEffect}  from 'react';
import Navbar from '../Navbar/Navbar'
import { Route, Navigate } from 'react-router-dom';
import Home from './../Home/Home';
import Movies from './../Movies/Movies';
import Tvshow from './../Tvshow/Tvshow';
import People from '../People/People';
import { useNavigate } from 'react-router-dom';
import Login from './../Login/Login';
import Register from './../Register/Register';
import { Routes } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import MovieDetails from '../MovieDetails';
import NotFound from '../NotFound';
import  { TrendingContextProvider } from '../Store';
import TvDetails from '../TvDetails';




export default function App() {



const [userData,setUserData]=useState(null);
let navigate=useNavigate();
function saveUserData(){
  let tokenData=localStorage.getItem('userToken');
  let decodedData=jwtDecode(tokenData);

setUserData(decodedData);


console.log(decodedData);



}

//save user data to control display components of navbar 

function ProtectedRoute(props){

if(localStorage.getItem('userToken')===null)
{
//no data? stay at login
return <Navigate to="/login"/>

}
else{
//datafound?navigate to any component you want
return props.children;

}


}


function logOut(){
setUserData(null);
localStorage.removeItem('userToken');
navigate('/login');



}

//to save user data in case of refresh as (App)is frist create and so (useEffect).
useEffect(()=>{
  if(localStorage.getItem('userToken')){
    saveUserData();
  }

},[])


  return (<>
    


    <TrendingContextProvider>

    <Navbar userData={userData} logOut={logOut}/>


    <Routes>
   <Route path='/' element={ <Login/> }/>
<Route path='home' element={<ProtectedRoute> <Home/> </ProtectedRoute>}/>
<Route path='movies' element={<ProtectedRoute> <Movies/> </ProtectedRoute>}/>
<Route path='tvshow' element={<ProtectedRoute> <Tvshow/> </ProtectedRoute>}/>
<Route path='people' element={<ProtectedRoute> <People/> </ProtectedRoute>}/>
<Route path='login' element={<Login saveUserData={saveUserData}/>}/>



<Route path='moviedetails' element={<ProtectedRoute> <MovieDetails/> </ProtectedRoute>}>
<Route path=':id' element={<ProtectedRoute> <MovieDetails/> </ProtectedRoute>}/>
  </Route>

  <Route path='tvdetails' element={<ProtectedRoute> <TvDetails/> </ProtectedRoute>}>
<Route path=':id' element={<ProtectedRoute> <TvDetails/> </ProtectedRoute>}/>
  </Route>





<Route path='register' element={ <Register/> }/>
<Route path='login/register' element={<Register/>}/>
<Route path='*' element={<NotFound/>}/>
    </Routes>
    


    </TrendingContextProvider>



 


  
    
 
    
    </>
  )
}
