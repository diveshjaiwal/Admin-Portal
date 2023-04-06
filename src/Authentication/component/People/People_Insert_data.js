import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")
const People_Insert_data = () =>{
  const[id , setId] =useState();  
  const[company_id , setCompany_id] = useState();
  const[type , setType] = useState();
  const[name , setName] = useState();
  const[position,setPosition] = useState();
  const[facebook,setFacebook] = useState();
  const[insta , setinsta] = useState();
  const[linked , setLinked] = useState();
  const[description , setDescription] = useState();
  const[profile,setProfile] = useState();
  const [post, setPost] = React.useState(null);

  const navigator = useNavigate();

  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateCompany_id = (e) =>{
    setCompany_id(e.target.value)
  }
  const updateType = (e) =>{
    setType(e.target.value)
  }
  const updateName = (e) =>{
    setName(e.target.value)
  }
  const updatePosition = (e) =>{
    setPosition(e.target.value)
  }
  const updateFacebook = (e) =>{
    setFacebook(e.target.value)
  }
  const updateInsta = (e) =>{
    setinsta(e.target.value)
  }
  const updateLinked = (e) =>{
    setLinked(e.target.value)
  }
  const updateDescription = (e) =>{
    setDescription(e.target.value)
  }
  const updateProfile = (e) =>{
    setProfile(e.target.value)
  }

  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && company_id && type && name && position && facebook && insta && linked && description && profile   )
    
    {
    
           await axios.post(`${Base_url}/api/people/manage`, {

            
            id : id,
            
            company_id : company_id,
            
            type : type,
            
            name : name,

            position : position,

            facebook_link : facebook,

            instagram_link : insta,

            linked_in_link : linked,

            description : description,

            profile_image : profile,

            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    .then(( response) => {
    
      setPost(response.data);
    
    }
    )
    
    
    navigator("/home/people")
    
    }
    
    else
    
    {
    
    alert("Please fill all the section")
    
    }
    
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
          <form style={{padding:"20px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="text" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">Company Id</label>
              <input type="text" className="form-control" id="exampleInputName" value={company_id} onChange={updateCompany_id}/>
            
            
              <label for="exampleInputRollnum" className="form-label">Type</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={type} onChange={updateType}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={name} onChange={updateName}/>
            
            
              <label for="exampleInputBranch" className="form-label">Position</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={position} onChange={updatePosition}/>

              
              <label for="exampleInputBranch" className="form-label">Facebook Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={facebook} onChange={updateFacebook}/>

              
              <label for="exampleInputBranch" className="form-label">Instagram Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={insta} onChange={updateInsta}/>

              
              <label for="exampleInputBranch" className="form-label">Linked In Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={linked} onChange={updateLinked}/>

              
              <label for="exampleInputBranch" className="form-label">Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={description} onChange={updateDescription}/>

              
              <label for="exampleInputBranch" className="form-label">Profile Image</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={profile} onChange={updateProfile}/>
            
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
     
    </>
    )
}
export default People_Insert_data;