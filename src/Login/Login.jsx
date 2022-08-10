
import { Link } from 'react-router-dom';
import Axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Login(props) {

  let navigate=useNavigate();
  const[error,setError]=useState('');
  const[isLoading,setIsLoading]=useState(false);
  const [user,setUser]=useState({
  
  "email":"",
  "password":"",

  
  })
  

  
  function getUser(e){
  
  let userData={...user};
  
  
  
  userData[e.target.name]=e.target.value;
  
  setUser(userData);
  
  
  }
  
  
  
  async function submitRegisrtForm(e){
    e.preventDefault();
  
  setIsLoading(true);
  
    
    let{data}= await Axios.post('https://route-egypt-api.herokuapp.com/signin',user);

  
    if(data.message=='success')
    
  {
  localStorage.setItem('userToken',data.token);
  
  
  navigate('/home');
  setIsLoading(false);
props.saveUserData();
  }
  else{

    setError(data.message)
    
    setIsLoading(false);
    }
  
  
  }
  return (
    <>
     <div className="container text-white w-75 m-auto py-4">
    {error?<div div  className='alert alert-danger'>{error}</div>:''}
     <h3 className='mb-3'>Registeration Form</h3>
     <div className="row">
 <form onSubmit={submitRegisrtForm}>
 
 <label >email:</label>
 <input type="email" className='form-control mb-3 border-0 mt-1' name='email' onChange={getUser}  />
 
 <label >Password:</label>
 <input type="password" className='form-control mb-3 border-0 mt-1' name='password' onChange={getUser} />
 <button className='btn btn-info text-white float-end my-2'>{isLoading===true?<i className="fa-solid fa-spin fa-spinner"></i>:'login'}
</button>
 <div>
  <span>don't have account? </span>
  <Link className='text-decoration-none text-white h5' to="register">Register</Link>
 </div>
 </form>
 
 
 
 
 
 
     </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
  }
