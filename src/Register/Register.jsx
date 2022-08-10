import Axios from 'axios';
import Joi from 'joi';


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  let navigate=useNavigate();
const [user,setUser]=useState({
  "first_name":"",
"last_name":"",
"email":"",
"password":"",
"age":""

})

const [erroList,setErrorList]=useState([]);

const[error,setError]=useState('');

const[isLoading,setIsLoading]=useState(false);




function getUser(e){

let userData={...user};



userData[e.target.name]=e.target.value;

setUser(userData);


}


function validateForm(){


  const schema = Joi.object({
      first_name: Joi.string().alphanum().min(3).max(30).required(),

      last_name: Joi.string().alphanum().min(3).max(30).required(),
  
      password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  
      age: Joi.number().integer().min(10).max(100),
  
      email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  });

return schema.validate(user,{abortEarly:false});

}








async function submitRegisrtForm(e){
  e.preventDefault();
  setIsLoading(true);
let validationResult=validateForm();
console.log(validationResult)
if(validationResult.error)
{

setErrorList(validationResult.error.details);
setIsLoading(false);
}
else{


  
  let{data}= await Axios.post('https://route-egypt-api.herokuapp.com/signup',user);
 

  if(data.message=='success')
  
{
localStorage.setItem('userToken',data.token);


navigate('/login');
setIsLoading(false);
}
else{

setError(data.message)

setIsLoading(false);
}
}















}












  return (
   <>
   <div className="container text-white w-75 m-auto py-4">
{error?<div   className='alert alert-danger'>{error}</div>:''}



    <h3 className='mb-3'>Registeration Form</h3>
    <div className="row">
<form onSubmit={submitRegisrtForm}>
<label >First Name:</label>
<input type="text" className='form-control mb-3 border-0 mt-1 ' name='first_name'   onChange={getUser} />


{erroList.map((error,i)=> error.message.includes("first_name")?(<div key={i} className='alert alert-danger'>
{error.message}
</div>):'')}



<label >Last Name:</label>
<input type="text" className='form-control mb-3 border-0 mt-1' name='last_name'onChange={getUser} />


{erroList.map((error,i)=> error.message.includes("last_name")?(<div key={i} className='alert alert-danger'>
{error.message}
</div>):'')}


<label >Age:</label>
<input type="number" className='form-control mb-3 border-0 mt-1' name='age' onChange={getUser} />
{erroList.map((error,i)=> error.message.includes("age")?(<div key={i} className='alert alert-danger'>
{error.message}
</div>):'')}

<label >email:</label>
<input type="email" className='form-control mb-3 border-0 mt-1' name='email' onChange={getUser}/>


{erroList.map((error,i)=> error.message.includes("email")?(<div key={i} className='alert alert-danger'>
{error.message}
</div>):'')}

<label >Password:</label>
<input type="password" className='form-control mb-3 border-0 mt-1' name='password' onChange={getUser} />

{erroList.map((error,i)=> error.message.includes('password')?(<div key={i} className='alert alert-danger'>
{error.message}
</div>):'')}

<button className='btn btn-info text-white float-end my-2'>{isLoading===true?<i className="fa-solid fa-spin fa-spinner"></i>:'register'}
</button>
</form>






    </div>
   </div>
   
   
   
   
   
   
   
   </>
  )
}
