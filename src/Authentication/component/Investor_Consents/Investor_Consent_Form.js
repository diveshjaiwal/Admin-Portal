import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import axios from "axios";
import Base_url from "../Base_url";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const token =localStorage.getItem("access_token")
const Investor_Consent_Form = () =>{
  const location1 = useLocation()
  const navigator = useNavigate()
  const[risk_consent , setrisk_consent] = useState();
  const[limited_transfer_consent , setlimited_transfer_consent] = useState();
  const[diversification_consent , setdiversification_consent] = useState();
  const[cancellation_consent,setcancellation_consent] = useState();
  const[research_consent,setresearch_consent] = useState();
  
    

  const updaterisk_consent = (e) =>{
    setrisk_consent(e.target.value)
  }
  const updatelimited_transfer_consent = (e) =>{
    setlimited_transfer_consent(e.target.value)
  }
  const updatediversification_consent = (e) =>{
    setdiversification_consent(e.target.value)
  }
  const updatecancellation_consent = (e) =>{
    setcancellation_consent(e.target.value)
  }
  const updateresearch_consent = (e) =>{
    setresearch_consent(e.target.value)
  }



  
  const gotoAdd = async() => {

  
    
    
    
    await axios.patch(`${Base_url}/api/investor-consent/manage`, {

      
     user_id : location1.state.bio.user_id,

     
     risk_consent : false,
     
     limited_transfer_consent : false,

     diversification_consent : false,

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
                <h1 style={{textAlign:"center",color:"blueviolet"}}>Update</h1>

      
                <label for="exampleInputName" className="form-label">Risk Consent</label>
                <input type="text" className="form-control" id="exampleInputName" value={risk_consent} onChange={updaterisk_consent}/>
              
              
                <label for="exampleInputRollnum" className="form-label">Limited Transfer Consent</label>
                <input  type="text" className="form-control" id="exampleInputRollnum" value={limited_transfer_consent} onChange={updatelimited_transfer_consent}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">diversification consent</label>
                <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={diversification_consent} onChange={updatediversification_consent}/>
              
              
                <label for="exampleInputBranch" className="form-label">cancellation_consent</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={cancellation_consent} onChange={updatecancellation_consent}/>
              
              
                <label for="exampleInputpassword" className="form-label">research_consent</label>
                <input  type="text" className="form-control" id="exampleInputPassword1" value={research_consent} onChange={updateresearch_consent}/>
            
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
     
      </>
    )
}
export default Investor_Consent_Form;