import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNjY5OTgwLCJpYXQiOjE2ODA1ODM1ODAsImp0aSI6ImEzYzA5NmQ3YmEwYzQ0NjNhZjA3ZmNlZGRjNDZkOWE5IiwidXNlcl9pZCI6MTA0fQ.s3BH8aFjhKDBmnbQKaxDuQeEx3olPaAuJ0tCgt-oMJQ"


const Investor_Consents_Insert_data = () =>{
  const[id , setId] = useState();  
  
  const[risk,setRisk] = useState();
  const[limited , setLimited] = useState();
  const[diversification , setDiversification] = useState();
  const[cancel,setCancel] = useState();
  const[research,setResearch] = useState();
  

  

  const navigator = useNavigate();


  const updateId = (e) =>{
    setId(e.target.value)
  }
  
  const updateRisk = (e) =>{
    setRisk(e.target.value)
  }
  const updateLimited = (e) =>{
    setLimited(e.target.value)
  }
  const updateDiversification = (e) =>{
    setDiversification(e.target.value)
  }
  const updateCancel = (e) =>{
    setCancel(e.target.value)
  }
  const updateResearch = (e) =>{
    setResearch(e.target.value)
  }

 
  const gotoAdd = async() => {

  
    
    
    
           await axios.post(`${Base_url}/api/investor-consent/manage`, {

            
            user_id : id,
       
            
            risk_consent : true,
            
            limited_transfer_consent : true,

            diversification_consent : true,

            cancellation_consent : true,

            research_consent : true,
            
            
            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
   
    
    
    navigator("/home/investor_consents")
    
    
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
            e.preventDefault()
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              

              <label for="exampleInputRollnum" className="form-label">Risk Consent</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={risk} onChange={updateRisk}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Limited Transfer Consent</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={limited} onChange={updateLimited}/>

              <label for="exampleInputRegistrationnum" className="form-label">Diversification Consent</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={diversification} onChange={updateDiversification}/>
              
              <label for="exampleInputRollnum" className="form-label">Cancellation Consent</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={cancel} onChange={updateCancel}/>

              <label for="exampleInputRollnum" className="form-label">Research Consent</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={research} onChange={updateResearch}/>
            
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} >Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Investor_Consents_Insert_data;