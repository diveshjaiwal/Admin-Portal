import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";


const token =localStorage.getItem("access_token")
const Company_Insert_data = () =>{
  
  const[user_id , setUser_id] = useState();
  const[logo , setLogo] = useState();
  const[founder_linked_in_profile , setfounder_linked_in_profile] = useState();
  const[company , setCompany] = useState();
  const [company_linked_in_profile, setcompany_linked_in_profile] = useState()
  const[web , setWeb] = useState();
  const[pre,setPre] = useState();
  const[pro,setPro] = useState();
  const[traction , setTraction] = useState();
  const[revenue,setRevenue] = useState();
  const[reason_com,setReason_com] = useState();
  const[reason_mynt , setReason_mynt] = useState();
  const[exist,setExist] = useState();
  const[pitch,setPitch] = useState();
 
  

  
  const navigator = useNavigate();


  
  const updateUser_id = (e) =>{
    setUser_id(e.target.value)
  }
  const updateLogo = (e) =>{
    setLogo(e.target.value)
  }
  const updatefounder_linked_in_profile = (e) =>{
    setfounder_linked_in_profile(e.target.value)
  }
  const updatecompany = (e) =>{
    setCompany(e.target.value)
  }
  const updatecompany_linked_in_profile = (e) =>{
    setcompany_linked_in_profile(e.target.value)
  }
  const updateWeb = (e) =>{
    setWeb(e.target.value)
  }
  const updatePre = (e) =>{
    setPre(e.target.value)
  }
  const updatePro = (e) =>{
    setPro(e.target.value)
  }
  const updateTraction = (e) =>{
    setTraction(e.target.value)
  }
  const updateRevenue = (e) =>{
    setRevenue(e.target.value)
  }
  const updateReason_com = (e) =>{
    setReason_com(e.target.value)
  }
  const updateReason_mynt = (e) =>{
    setReason_mynt(e.target.value)
  }
  const updateExist = (e) =>{
    setExist(e.target.value)
  }
  const updatePitch = (e) =>{
    setPitch(e.target.value)
  }
  
  


  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if( user_id && logo && founder_linked_in_profile && company && company_linked_in_profile&& web && pre && pro && traction && revenue && reason_com && reason_mynt && exist && pitch  )
    
    {
    
           await axios.post(`${Base_url}/api/company/create`, {

            
            
              
            user_id   :         +user_id         ,
            company_logo   :     logo             ,
            founder_linked_in_profile : founder_linked_in_profile,
            company_name   :     company             ,
            
            company_linked_in_profile   :    company_linked_in_profile              ,
            website_url   :         web         ,
            previous_funding   :   pre               ,
            product_description   :  pro                ,
            traction_description   :  traction                ,
            revenue   :              revenue    ,
            reason_for_community_round   :   reason_com                ,
            reason_for_mynt   :          reason_mynt        ,
            existing_commitments   :         exist         ,
            company_pitch   :          pitch        ,
            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    
    
    
    navigator("/home/company");
    
    }
    
    else
    
    {
    
    alert("Please fill all the section");
    
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
          <div className='col-10' style={{marginTop:"150px", marginLeft:"350px"}}>
          <form style={{padding:"20px",borderRadius:"20px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Company Data</h1>

              

              <label for="exampleInputName" className="form-label">User Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={user_id} onChange={updateUser_id}/>

              <label for="exampleInputRollnum" className="form-label">Company Logo</label>
              <input  type="link" className="form-control" id="exampleInputRollnum" value={logo} onChange={updateLogo}/>

              <label for="exampleInputRegistrationnum" className="form-label">Founder LinkedIn Profile</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={founder_linked_in_profile} onChange={updatefounder_linked_in_profile}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Company Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={company} onChange={updatecompany}/>
            
            
              <label for="exampleInputBranch" className="form-label">Company Linked In Profile</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={company_linked_in_profile} onChange={updatecompany_linked_in_profile}/>
            
            
              <label for="exampleInputpassword" className="form-label">Website Url</label>
              <input  type="text" className="form-control" id="exampleInputPassword1" value={web} onChange={updateWeb}/>

              <label for="exampleInputBranch" className="form-label">Previous Funding</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={pre} onChange={updatePre}/>

              <label for="exampleInputBranch" className="form-label">Production Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={pro} onChange={updatePro}/>

              <label for="exampleInputBranch" className="form-label">Traction Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={traction} onChange={updateTraction}/>

              <label for="exampleInputBranch" className="form-label">Revenue</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={revenue} onChange={updateRevenue}/>

              <label for="exampleInputBranch" className="form-label">Reason For Community Round</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={reason_com} onChange={updateReason_com}/>

              <label for="exampleInputBranch" className="form-label">Reason For Mynt</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={reason_mynt} onChange={updateReason_mynt}/>

              <label for="exampleInputBranch" className="form-label">Existing Commitments</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={exist} onChange={updateExist}/>

              <label for="exampleInputBranch" className="form-label">Company Pitch</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={pitch} onChange={updatePitch}/>

              

              
              

              
              

              
              
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
        </form>
        </div>
        </div>
      
    
      </>
    )
}
export default Company_Insert_data;