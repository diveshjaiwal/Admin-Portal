import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import axios from "axios";
import Base_url from "../Base_url";
import { useLocation, useNavigate } from "react-router-dom";


const token =localStorage.getItem("access_token")
const Company_Form = () =>{
    const navigator = useNavigate()
    const location = useLocation()
    const[company_logo,setcompany_logo] = useState();
    const[founder_linked_in_profile,setfounder_linked_in_profile] = useState();
    const[company_name,setcompany_name] = useState();
    const[company_linked_in_profile,setcompany_linked_in_profile] = useState();
    const[website_url,setwebsite_url] = useState();
    const[previous_funding,setprevious_funding] = useState();
    const[product_description,setproduct_description] = useState();
    const[traction_description,settraction_description] = useState();
    const[revenue,setrevenue] = useState();
    const[reason_for_community_round,setreason_for_community_round] = useState();
    const[reason_for_mynt,setreason_for_mynt] = useState();
    const[existing_commitments,setexisting_commitments] = useState();
    const[country,setcountry] = useState();
    const[state,setstate] = useState();
    const[city,setcity] = useState();
    const[pincode,setpincode] = useState();
    const[company_address,setcompany_address] = useState();
    const[facebook_link,setfacebook_link] = useState();
    const[instagram_link,setinstagram_link] = useState();
    const[legal_name,setlegal_name] = useState();
    const[cin,setcin] = useState();
    const[date_of_incorporation,setdate_of_incorporation] = useState();
    const[incorporation_type,setincorporation_type] = useState();
    const[sector,setsector] = useState();
    const[invested_so_far,setinvested_so_far] = useState();
    const[number_of_employees,setnumber_of_employees] = useState();
    


  

  
   


  
    const updatecompany_logo= (e) =>{
      setcompany_logo(e.target.value)
    }
    const updatefounder_linked_in_profile = (e) =>{
      setfounder_linked_in_profile(e.target.value)
    }
    const updatecompany_name = (e) =>{
      setcompany_name(e.target.value)
    }
    const updatecompany_linked_in_profile = (e) =>{
      setcompany_linked_in_profile(e.target.value)
    }
    const updatewebsite_url = (e) =>{
      setwebsite_url(e.target.value)
    }
    const updateprevious_funding = (e) =>{
      setprevious_funding(e.target.value)
    }
    const updateproduct_description = (e) =>{
      setproduct_description(e.target.value)
    }
    const updatetraction_description = (e) =>{
      settraction_description(e.target.value)
    }
    const updaterevenue = (e) =>{
      setrevenue(e.target.value)
    }
    const updatereason_for_community_round = (e) =>{
      setreason_for_community_round(e.target.value)
    }
    const updatereason_for_mynt = (e) =>{
      setreason_for_mynt(e.target.value)
    }
    const updateexisting_commitments = (e) =>{
      setexisting_commitments(e.target.value)
    }
    const updatecountry = (e) =>{
      setcountry(e.target.value)
    }

    const updatestate = (e) =>{
      setstate(e.target.value)
    }
    const updatecity = (e) =>{
      setcity(e.target.value)
    }
    const updatepincode = (e) =>{
      setpincode(e.target.value)
    }
    const updatecompany_address = (e) =>{
      setcompany_address(e.target.value)
    }
    const updatefacebook_link = (e) =>{
      setfacebook_link(e.target.value)
    }
    const updateinstagram_link = (e) =>{
      setinstagram_link(e.target.value)
    }
    const updatelegal_name = (e) =>{
      setlegal_name(e.target.value)
    }
    const updatecin = (e) =>{
      setcin(e.target.value)
    }
    const updatedate_of_incorporation = (e) =>{
      setdate_of_incorporation(e.target.value)
    }
    const updateincorporation_type = (e) =>{
      setincorporation_type(e.target.value)
    }
    const updatesector = (e) =>{
      setsector(e.target.value)
    }
    const updateinvested_so_far = (e) =>{
      setinvested_so_far(e.target.value)
    }
    const updatenumber_of_employees = (e) =>{
      setnumber_of_employees(e.target.value)
    }


    const gotoAdd = async() => {

  
    
    
    
      await axios.patch(`${Base_url}/api/company/manage`, {
  
        
        company_id: location.state.bio.id,
  
       
       company_logo : company_logo,
    founder_linked_in_profile : founder_linked_in_profile,
    company_name:company_name,
    company_linked_in_profile: company_linked_in_profile,
    website_url: website_url,
    previous_funding:previous_funding,
    product_description:product_description,
    traction_description:traction_description,
    revenue:revenue,
    reason_for_community_round:reason_for_community_round,
    reason_for_mynt:reason_for_mynt,
    existing_commitments:existing_commitments,
    country:country,
    state:state,
    city:city,
    pincode:+pincode,
    company_address:company_address,
    facebook_link:facebook_link,
    instagram_link:instagram_link,
    legal_name:legal_name,
    cin:+cin,
    date_of_incorporation:date_of_incorporation,
    incorporation_type:incorporation_type,
    sector:sector,
    invested_so_far:invested_so_far,
    number_of_employees:+number_of_employees,
    
       
       
       
       },
       {headers: {
         Authorization: `Bearer ${token}`,
       },}
       )
  
  
  
  
  navigator("/home/company")
  
  
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
          <form style={{padding:"20px",borderRadius:"20px"}} onSubmit={e=> {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update</h1>


              <label for="exampleInputRollnum" className="form-label">Company Logo</label>
              <input  type="link" className="form-control" id="exampleInputRollnum" value={company_logo} onChange={updatecompany_logo}/>
              
              <label for="exampleInputRollnum" className="form-label">founder_linked_in_profile</label>
              <input  type="link" className="form-control" id="exampleInputRollnum" value={founder_linked_in_profile} onChange={updatefounder_linked_in_profile}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Company Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={company_name} onChange={updatecompany_name}/>
            
            
              <label for="exampleInputBranch" className="form-label">Company Linked In Profile</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={company_linked_in_profile} onChange={updatecompany_linked_in_profile}/>
            
            
              <label for="exampleInputpassword" className="form-label">Website Url</label>
              <input  type="link" className="form-control" id="exampleInputPassword1" value={website_url} onChange={updatewebsite_url}/>

              <label for="exampleInputBranch" className="form-label">Previous Funding</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={previous_funding} onChange={updateprevious_funding}/>

              <label for="exampleInputBranch" className="form-label">Production Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={product_description} onChange={updateproduct_description}/>

              <label for="exampleInputBranch" className="form-label">Traction Description</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={traction_description} onChange={updatetraction_description}/>

              <label for="exampleInputBranch" className="form-label">Revenue</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={revenue} onChange={updaterevenue}/>

              <label for="exampleInputBranch" className="form-label">Reason For Community Round</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={reason_for_community_round} onChange={updatereason_for_community_round}/>

              <label for="exampleInputBranch" className="form-label">Reason For Mynt</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={reason_for_mynt} onChange={updatereason_for_mynt}/>

              <label for="exampleInputBranch" className="form-label">Existing Commitments</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={existing_commitments} onChange={updateexisting_commitments}/>


              <label for="exampleInputBranch" className="form-label">Country</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={country} onChange={updatecountry}/>

              <label for="exampleInputBranch" className="form-label">State</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={state} onChange={updatestate}/>

              <label for="exampleInputBranch" className="form-label">City</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={city} onChange={updatecity}/>

              <label for="exampleInputBranch" className="form-label">Pincode</label>
              <input  type="number" className="form-control" id="exampleInputBranch" value={pincode} onChange={updatepincode}/>

              
              <label for="exampleInputBranch" className="form-label">Company Address</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={company_address} onChange={updatecompany_address}/>

              
              <label for="exampleInputBranch" className="form-label">Facebook Link</label>
              <input  type="Link" className="form-control" id="exampleInputBranch" value={facebook_link} onChange={updatefacebook_link}/>

              
              <label for="exampleInputBranch" className="form-label">Instagram Link</label>
              <input  type="link" className="form-control" id="exampleInputBranch" value={instagram_link} onChange={updateinstagram_link}/>
              
              <label for="exampleInputBranch" className="form-label">Legal Name</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={legal_name} onChange={updatelegal_name}/>

              
              <label for="exampleInputBranch" className="form-label">Cin</label>
              <input  type="number" className="form-control" id="exampleInputBranch" value={cin} onChange={updatecin}/>

              
              <label for="exampleInputBranch" className="form-label">Date Of Incorporation</label>
              <input  type="date" className="form-control" id="exampleInputBranch" value={date_of_incorporation} onChange={updatedate_of_incorporation}/>

              <label for="exampleInputBranch" className="form-label">Incorporation Type</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={incorporation_type} onChange={updateincorporation_type}/>

              <label for="exampleInputBranch" className="form-label">Sector</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={sector} onChange={updatesector}/>

              <label for="exampleInputBranch" className="form-label">Invested So far</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={invested_so_far} onChange={updateinvested_so_far}/>

              <label for="exampleInputBranch" className="form-label">Number Of Employees</label>
              <input  type="text" className="form-control" id="exampleInputBranch" value={number_of_employees} onChange={updatenumber_of_employees}/>
              
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
        </form>
        </div>
        </div>
      
    
        </>
    )
}
export default Company_Form;