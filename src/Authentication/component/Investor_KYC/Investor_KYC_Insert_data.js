import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")
const Investor_KYC_Insert_data= () =>{
  const navigator = useNavigate();
  
  const[id , setId] = useState();  
  const[pan_card , setpan_card] = useState();
  const[birth_date , setbirth_date] = useState();
  const[birth_month , setbirth_month] = useState();
  const[birth_year,setbirth_year] = useState();
  

  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updatepan_card = (e) =>{
    setpan_card(e.target.value)
  }
  const updatebirth_date = (e) =>{
    setbirth_date(e.target.value)
  }
  const updatebirth_month = (e) =>{
    setbirth_month(e.target.value)
  }
  const updatebirth_year = (e) =>{
    setbirth_month(e.target.value)
  }
  
  const gotoAdd = async(e) => {

    e.preventDefault();
      
    const values = {
      user_id: id,
      pan_card:pan_card,
      birth_date:birth_date,
      birth_month:birth_month,
      birth_year:birth_year
    }
    
    
    
    
           await axios.post(`${Base_url}/api/investor-kyc/pan/manage`, values , 

            
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    
    
    
    navigator("/home/investor_kyc")
    
    
    
    
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
          <form style={{padding:"20px"}} onSubmit={gotoAdd}>
                <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

                <label for="exampleInputName" className="form-label">Id</label>
                <input type="text" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

                <label for="exampleInputName" className="form-label">pan_card</label>
                <input type="text" className="form-control" id="exampleInputName" value={pan_card} onChange={updatepan_card}/>
              
              
                <label for="exampleInputRollnum" className="form-label">birth_date</label>
                <input  type="number" className="form-control" id="exampleInputRollnum" value={birth_date} onChange={updatebirth_date}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">birth_month</label>
                <input  type="number" className="form-control" id="exampleInputeRegistrationnum" value={birth_month} onChange={updatebirth_month}/>
              
              
                <label for="exampleInputBranch" className="form-label">birth_year</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={birth_year} onChange={updatebirth_year}/>
              
              
                
                <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
            </form>
        </div>
        </div>
      
        </>
    )
}
export default Investor_KYC_Insert_data