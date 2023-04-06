import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")
const Investor_Kyc_Form = () =>{
  const navigator = useNavigate();
  const location1 = useLocation()
  const[aadhaar_card_number , setaadhaar_card_number] = useState(location1.state.bio.aadhaar_card_number);
  const[address_line_1 , setaddress_line_1] = useState(location1.state.bio.address_line_1);
  
  const[address_line_2 , setaddress_line_2] = useState(location1.state.bio.address_line_2);
  const[city,setcity] = useState(location1.state.bio.city);
  const[state,setstate] = useState(location1.state.bio.state);
  const[pincode,setpincode] = useState(location1.state.bio.pincode);
  const[bank_name,setbank_name] = useState(location1.state.bio.bank_name);
  const[bank_account,setbank_account] = useState(location1.state.bio.bank_account);
  const[ifsc_code,setifsc_code] = useState(location1.state.bio.ifsc_code);
  

  const updateaadhaar_card_number = (e) =>{
    setaadhaar_card_number(e.target.value)
  }
  const updateaddress_line_1 = (e) =>{
    setaddress_line_1(e.target.value)
  }
  const updateaddress_line_2 = (e) =>{
    setaddress_line_2(e.target.value)
  }
  const updatecity = (e) =>{
    setcity(e.target.value)
  }
  const updatestate = (e) =>{
    setstate(e.target.value)
  }
  const updatepincode = (e) =>{
    setpincode(e.target.value)
  }
  const updatebank_name = (e) =>{
    setbank_name(e.target.value)
  }
  const updatebank_account = (e) =>{
    setbank_account(e.target.value)
  }
  const updateifsc_code = (e) =>{
    setifsc_code(e.target.value)
  }

  const gotoAdd = async() => {
    
    const values1 = {
        user_id : location1.state.bio.user_id,
        aadhaar_card_number:aadhaar_card_number
       
       }
       
      await axios.patch(`${Base_url}/api/investor-kyc/aadhaar-verification/manage`,values1, 
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
      
            const values2 = {
              user_id : location1.state.bio.user_id,
              address_line_1:address_line_1,
              address_line_2:address_line_2,
              city:city,
              state:state,
              pincode:pincode
             
             }
             
            await axios.patch(`${Base_url}/api/investor-kyc/address/manage`,values2, 
                  {headers: {
                    Authorization: `Bearer ${token}`,
                  },}
                  )
      
                 
      
            const values3 = {
              user_id : location1.state.bio.user_id,
              bank_name:bank_name,
              bank_account:bank_account,
              ifsc_code:ifsc_code
             
             }
             
            await axios.patch(`${Base_url}/api/investor-kyc/bank-verification/manage`,values3, 
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
          <form style={{padding:"20px"}} onSubmit={e=>{e.preventDefault()
          gotoAdd()}}>
                <h1 style={{textAlign:"center",color:"blueviolet"}}>Update</h1>
                <label for="exampleInputName" className="form-label">aadhaar_card_number</label>
                <input type="text" className="form-control" id="exampleInputName" value={aadhaar_card_number} onChange={updateaadhaar_card_number}/>
  
              
                <label for="exampleInputRollnum" className="form-label">address_line_1</label>
                <input  type="text" className="form-control" id="exampleInputRollnum" value={address_line_1} onChange={updateaddress_line_1}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">address_line_2</label>
                <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={address_line_2} onChange={updateaddress_line_2}/>
              
              
                <label for="exampleInputBranch" className="form-label">city</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={city} onChange={updatecity}/>
              
              
                <label for="exampleInputpassword" className="form-label">state</label>
                <input  type="text" className="form-control" id="exampleInputPassword1" value={state} onChange={updatestate}/>

                <label for="exampleInputRegistrationnum" className="form-label">pincode</label>
                <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={pincode} onChange={updatepincode}/>
              
              
                <label for="exampleInputBranch" className="form-label">bank_name</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={bank_name} onChange={updatebank_name}/>
              
              
                <label for="exampleInputpassword" className="form-label">bank_account</label>
                <input  type="text" className="form-control" id="exampleInputPassword1" value={bank_account} onChange={updatebank_account}/>

                <label for="exampleInputpassword" className="form-label">ifsc_code</label>
                <input  type="text" className="form-control" id="exampleInputPassword1" value={ifsc_code} onChange={updateifsc_code}/>

                <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
            </form>
        </div>
        </div>
      
        </>
    )
}
export default Investor_Kyc_Form;