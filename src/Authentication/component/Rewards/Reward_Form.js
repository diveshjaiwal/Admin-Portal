import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Base_url from "../Base_url";


const token =localStorage.getItem("access_token")
const Reward_Form = () =>{
  const location1 = useLocation();
  // const[campaign_id , setCampaignid] = useState();
  const[discounted_price, setdiscounted_price] = useState(location1.state.bio.discounted_price);
  const[product , setProduct] = useState(location1.state.bio.product_name);
 

  // const updateCampaign = (e) =>{
  //   setCampaignid(e.target.value)
  // }
  const updatediscounted_price = (e) =>{
    setdiscounted_price(e.target.value)
  }
  const updateProduct = (e) =>{
    setProduct(e.target.value)
  }
  const navigator = useNavigate();


  const gotoAdd = async() => {
    
    const values = {

            
                  
       
      reward_id : location1.state.bio.id,
      //  campaign_id : location1.bio.campaign_id, 
       
       discounted_price : +discounted_price,

       product_name : product

       
       
       
       
       }
       
      await axios.patch(`${Base_url}/api/rewards/manage`,values, 
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
      
     navigator("/home/rewards")
    
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
          <form style={{padding:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update Data</h1>

              {/* <label for="exampleInputName" className="form-label">Campaign id </label>
              <input type="number" className="form-control" id="exampleInputName" value={campaign_id} onChange={updateCampaign}/> */}

              <label for="exampleInputRollnum" className="form-label">Discounted Price</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={discounted_price} onChange={updatediscounted_price}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Product Name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={product} onChange={updateProduct}/>
            
            
              
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Reward_Form;