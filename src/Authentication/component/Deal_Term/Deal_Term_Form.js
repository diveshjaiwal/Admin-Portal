import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNTg4OTE0LCJpYXQiOjE2ODA1MDI1MTQsImp0aSI6IjAyNjMzYzk3MmE0ZDRmYmVhYjQ5NGJhZDViYzFlZmNiIiwidXNlcl9pZCI6OTl9.YC8mqQO89zjKUF4FdtEea2O0_9JsuNruOzhRZOqBWFk"


const Deal_Term_Form = () =>{
  const location1 = useLocation();
  const[security_id, setSecurity_type] = useState(location1.state.bio.security_id);
  const[discount , setDiscount] = useState(location1.state.bio.discount);
  const[valuation_cap , setValuation_cap] = useState(location1.state.bio.valuation_cap);
  const[min_subscription,setMin_subscription] = useState(location1.state.bio.min_subscription);
  const[target,setTarget] = useState(location1.state.bio.target);
  const[end_date , setEnd_date] = useState(location1.state.bio.end_date);
  const[create,setCreate] = useState(location1.state.bio.create_at);
  const[Update , setUpdate] = useState(location1.state.bio.update_at);
  const navigator = useNavigate();
  const [patch, setPatch] = useState(null);

  console.log(location1.state.bio);
  const updateSecurity = (e) =>{
    setSecurity_type(e.target.value)
  }
  const updateDiscount = (e) =>{
    setDiscount(e.target.value)
  }
  const updateValue = (e) =>{
    setValuation_cap(e.target.value)
  }
  const updateMin = (e) =>{
    setMin_subscription(e.target.value)
  }
  const updateTarget = (e) =>{
    setTarget(e.target.value)
  }
  const updateEnd = (e) =>{
    setEnd_date(e.target.value)
  }
  const updateCreate = (e) =>{
    setCreate(e.target.value)
  }
  const update = (e) =>{
    setUpdate(e.target.value)
  }

  const updateM = async (e) => {
    await axios.put(`${Base_url}/api/deal_terms/manage`, {
            
      id : location1.state.bio.id,
      
      security_type : security_id,
      
      discount : discount,

      valuation_cap : valuation_cap,

      min_subscription : min_subscription,

      target : target,

      end_date : end_date,
      
      created_at : create,
      
      updated_at : Update,
      
      },
      {headers: {
        Authorization: `Bearer ${token}`,
      },}
      )

      .then(( response) => {

      setPatch(response.data);

      }
    )


    navigator("/home/deal_term")

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
          <form style={{padding:"50px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update</h1>
              <label for="exampleInputName" className="form-label">Security Type</label>
              <input defaultValue={security_id} type="text" className="form-control" id="exampleInputName" value={security_id} onChange={updateSecurity}/>

              <label for="exampleInputRollnum" className="form-label">Discount</label>
              <input  defaultValue={discount} type="text" className="form-control" id="exampleInputRollnum" value={discount} onChange={updateDiscount}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Valuation Cap</label>
              <input defaultValue={valuation_cap}  type="text" className="form-control" id="exampleInputeRegistrationnum" value={valuation_cap} onChange={updateValue}/>
            
            
              <label for="exampleInputBranch" className="form-label">Min Subscription</label>
              <input defaultValue={min_subscription}  type="text" className="form-control" id="exampleInputBranch" value={min_subscription} onChange={updateMin}/>
            
            
              <label for="exampleInputpassword" className="form-label">Target</label>
              <input defaultValue={target}  type="text" className="form-control" id="exampleInputPassword1" value={target} onChange={updateTarget}/>

              <label for="exampleInputBranch" className="form-label">End Date</label>
              <input defaultValue={end_date}  type="date" className="form-control" id="exampleInputBranch" value={end_date} onChange={updateEnd}/>

              <label for="exampleInputpassword" className="form-label">Created At</label>
              <input defaultValue={create}  type="datetime-local" className="form-control" id="exampleInputPassword1" value={create} onChange={updateCreate}/>

              <label for="exampleInputBranch" className="form-label">Updated At</label>
              <input defaultValue={update}  type="datetime-local" className="form-control" id="exampleInputBranch" value={Update} onChange={update}/>
          
            <button type="submit" onClick={updateM} className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
        </form>
        </div>
        </div>
     
        </>
    )
}
export default Deal_Term_Form;