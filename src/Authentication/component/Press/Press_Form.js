import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Base_url from "../Base_url";


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNjY5OTgwLCJpYXQiOjE2ODA1ODM1ODAsImp0aSI6ImEzYzA5NmQ3YmEwYzQ0NjNhZjA3ZmNlZGRjNDZkOWE5IiwidXNlcl9pZCI6MTA0fQ.s3BH8aFjhKDBmnbQKaxDuQeEx3olPaAuJ0tCgt-oMJQ"



const Press_Form = () =>{
  const location1 = useLocation();
  const navigator = useNavigate();
  const[title , setTitle] = useState(location1.state.bio.title);
  const[link , setLink] = useState(location1.state.bio.link);
  const[description,setDescription] = useState(location1.state.bio.description);
  const[banner,setBanner] = useState(location1.state.bio.banner);
  const[company_id,setcompany_id] = useState(location1.state.bio.company_id);
 

  
  const updateTitle = (e) =>{
    setTitle(e.target.value)
  }
  const updateLink = (e) =>{
    setLink(e.target.value)
  }
  const updateDescription = (e) =>{
    setDescription(e.target.value)
  }
  const updateBanner = (e) =>{
    setBanner(e.target.value)
  }
  const updatecompany_id = (e) =>{
    setcompany_id(e.target.value)
  }
  
  const gotoAdd = async() => {
    
    const values = {

            
                  
       
      press_id : location1.state.bio.id,
       
       
       title : title,
       link : link,
       description : description,
       banner : banner,

       company_id : company_id

       
       
       
       
       }
       
      await axios.patch(`${Base_url}/api/press/manage`,values, 
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
      
     navigator("/home/press")
    
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
                <h1 style={{textAlign:"center",color:"blueviolet"}}>Update Data</h1>

                <label for="exampleInputName" className="form-label">Company id</label>
                <input type="number" className="form-control" id="exampleInputName" value={company_id} onChange={updatecompany_id}/>

                <label for="exampleInputRollnum" className="form-label">Title</label>
                <input  type="text" className="form-control" id="exampleInputRollnum" value={title} onChange={updateTitle}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">Link</label>
                <input  type="link" className="form-control" id="exampleInputeRegistrationnum" value={link} onChange={updateLink}/>
              
              
                <label for="exampleInputBranch" className="form-label">Description</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={description} onChange={updateDescription}/>

                <label for="exampleInputBranch" className="form-label">Banner</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={banner} onChange={updateBanner}/>

                
              
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
     
    </>
    )
}
export default Press_Form;