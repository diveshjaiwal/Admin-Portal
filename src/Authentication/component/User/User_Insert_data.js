import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token");


const User_Insert_data = () =>{

  const[fname , setFname] = useState();
  const[lname , setLname] = useState();
  const[email , setEmail] = useState();
  const[social,setSocial] = useState();
  const [user_type, setuser_type] = useState();

  

  const navigator = useNavigate();

  
  const updateFname = (e) =>{
    setFname(e.target.value)
  }
  const updateLname = (e) =>{
    setLname(e.target.value)
  }
  const updateEmail = (e) =>{
    setEmail(e.target.value)
  }
  const updateSocial = (e) =>{
    setSocial(e.target.value)
  }
  const updateuser_type = (e) =>{
    setuser_type(e.target.value)
  }
  
   

  const gotoAdd = async(e) => {



   const values1= {

            
        
            
      first_name : fname,
      
      last_name : lname,
      
      email : email,
      
      social_login : false,
      user_type : "INVESTOR",
      
      
      }
      console.log(values1);

 
    
    
           await axios.post(`${Base_url}/api/users/sign-up`, values1,
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
            
    
    navigator("/home/user")
    
 
    }


    return(
        <>
          <div className='container-fluid'>
        <div className='row'>
          
            <Dashboard />
          
        </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"280px"}}>
          <form style={{padding:"20px"}} onSubmit={e=>{
            e.preventDefault();
            gotoAdd()}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>ADD DATA</h1>


              <label for="exampleInputName" className="form-label">First Name</label>
              <input type="text" className="form-control" id="exampleInputName" value={fname} onChange={updateFname}/>

              <label for="exampleInputName" className="form-label">Last Name</label>
              <input type="text" className="form-control" id="exampleInputName" value={lname} onChange={updateLname}/>

              <label for="exampleInputRollnum" className="form-label">Email</label>
              <input  type="email" className="form-control" id="exampleInputRollnum" value={email} onChange={updateEmail}/>
              
              <label for="exampleInputRegistrationnum" className="form-label">Social Login</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={social} onChange={updateSocial}/>

              <label for="exampleInputRegistrationnum" className="form-label">User Type</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={user_type} onChange={updateuser_type}/>

             
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
    
      </>
    )
}
export default User_Insert_data;