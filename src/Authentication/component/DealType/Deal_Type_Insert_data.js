import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";



const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNjY5OTgwLCJpYXQiOjE2ODA1ODM1ODAsImp0aSI6ImEzYzA5NmQ3YmEwYzQ0NjNhZjA3ZmNlZGRjNDZkOWE5IiwidXNlcl9pZCI6MTA0fQ.s3BH8aFjhKDBmnbQKaxDuQeEx3olPaAuJ0tCgt-oMJQ"


const Deal_Type_Insert_data = () =>{
  const location1 = useLocation()

  const[id , setId] = useState();
  const[name , setName] = useState();

  const [post, setPost] = React.useState(null);
  


  const navigator = useNavigate();


  
  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateName = (e) =>{
    setName(e.target.value)
  }
 


  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && name )
    
    {
    
           await axios.post(`${Base_url}/api/deal_type/manage`, {

            
            id : id,
            
            deal_name : name,
            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    .then(( response) => {
    
      setPost(response.data);
    
    }
    )
    
    
    navigator("/home/deal_type")
    
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
          <form>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="text"  className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">Deal Name</label>
              <input type="text"  className="form-control" id="exampleInputName" value={name} onChange={updateName}/>
  
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"600px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
      
        </>
    )
}
export default Deal_Type_Insert_data;