import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Base_url from "../Base_url";


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNjY5OTgwLCJpYXQiOjE2ODA1ODM1ODAsImp0aSI6ImEzYzA5NmQ3YmEwYzQ0NjNhZjA3ZmNlZGRjNDZkOWE5IiwidXNlcl9pZCI6MTA0fQ.s3BH8aFjhKDBmnbQKaxDuQeEx3olPaAuJ0tCgt-oMJQ"

const Deal_Type_Form = () =>{
  const location1 = useLocation()
  const[name , setName] = useState(location1.state.bio.deal_name);
  const navigator = useNavigate()
  



  
  

  const updateName = (e) =>{
    setName(e.target.value)
  }

  const gotoAdd = async() => {
    
    const values = {

            
                  
       
      deal_type_id : location1.state.bio.id,
       
     deal_name :name,

       
       
       
       
       }
       
      await axios.patch(`${Base_url}/api/deal_type/manage`,values, 
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
      
     navigator("/home/deal_type")
    
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
          <form onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Deal Type Form</h1>
              <label for="exampleInputName" className="form-label">Deal Name</label>
              <input type="text" defaultValue={name} className="form-control" id="exampleInputName" value={name} onChange={updateName}/>
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"600px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
      
        </>
    )
}
export default Deal_Type_Form;