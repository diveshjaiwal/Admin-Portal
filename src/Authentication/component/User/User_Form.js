import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")

const User_Form = () =>{

  const location1 = useLocation();
  const navigator = useNavigate();


  const[email , setEmail] = useState(location1.state.bio.email);
  const[social,setSocial] = useState(location1.state.bio.social_login);
  const[profile,setProfile] = useState(location1.state.bio.profile_image);
  // const [post, setPost] = React.useState(null);



 
  const updateEmail = (e) =>{
    setEmail(e.target.value)
  }
  const updateSocial = (e) =>{
    setSocial(e.target.value)
  }
  const updateProfile = (e) =>{
    setProfile(e.target.value)
  }


  const gotoAdd = async() => {
    
    const values = {

            
                  
       
      user_id : location1.state.bio.id,
       
       
       email : email,
       social_login : social,
       profile_image : profile,

       
       }
       
      await axios.patch(`${Base_url}/api/users/manage`,values, 
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
          <form style={{padding:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>ADD DATA</h1>

              <label for="exampleInputRollnum" className="form-label">Email</label>
              <input  type="email" className="form-control" id="exampleInputRollnum" value={email} onChange={updateEmail}/>
              
              <label for="exampleInputRegistrationnum" className="form-label">Social Login</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={social} onChange={updateSocial}/>

              
              <label for="exampleInputRegistrationnum" className="form-label">profile_image</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={profile} onChange={updateProfile}/>
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} >Submit</button>
          </form>
        </div>
        </div>
    
      </>
    )
}
export default User_Form;

