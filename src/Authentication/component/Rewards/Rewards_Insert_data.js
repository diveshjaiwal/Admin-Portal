import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNjY5OTgwLCJpYXQiOjE2ODA1ODM1ODAsImp0aSI6ImEzYzA5NmQ3YmEwYzQ0NjNhZjA3ZmNlZGRjNDZkOWE5IiwidXNlcl9pZCI6MTA0fQ.s3BH8aFjhKDBmnbQKaxDuQeEx3olPaAuJ0tCgt-oMJQ"

const Rewards_Insert_data = () =>{
  const[id , setId] = useState();  
  const[campaign_id , setCampaignid] = useState();
  const[amount, setAmount] = useState();
  const[product , setProduct] = useState();
  const[discount , setDiscount] = useState();
  
  
  

  const navigator = useNavigate();


  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateCampaign = (e) =>{
    setCampaignid(e.target.value)
  }
  const updateAmount = (e) =>{
    setAmount(e.target.value)
  }
  const updateProduct = (e) =>{
    setProduct(e.target.value)
  }
  const updateDiscount = (e) =>{
    setDiscount(e.target.value)
  }
  

  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && campaign_id && amount && product && discount  )
    
    {
    
           await axios.post(`${Base_url}/api/rewards/manage`, {

            
            id : id,
            
            campaign_id : campaign_id,
            
            amount : amount,
            
            product_name : product,

            discounted_price : discount,
            
            
            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    
    
    
    navigator("/home/rewards")
    
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
          <form style={{padding:"20px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

              <label for="exampleInputName" className="form-label">Id</label>
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">Campaign id </label>
              <input type="number" className="form-control" id="exampleInputName" value={campaign_id} onChange={updateCampaign}/>

              <label for="exampleInputRollnum" className="form-label">Amount</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={amount} onChange={updateAmount}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Product Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={product} onChange={updateProduct}/>

              <label for="exampleInputRegistrationnum" className="form-label">Discounted Price</label>
              <input  type="number" className="form-control" id="exampleInputeRegistrationnum" value={discount} onChange={updateDiscount}/>
            
            
              
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Rewards_Insert_data;