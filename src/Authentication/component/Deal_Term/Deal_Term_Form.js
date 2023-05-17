import React, { useState , useEffect } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";


const Deal_Term_Form = () =>{
  const location1 = useLocation();
  const[campaign_id , setCampaign_id] = useState();
  const[security_id, setSecurity_type] = useState(location1.state.bio.security_type);
  const[discount , setDiscount] = useState(location1.state.bio.discount);
  const[valuation_cap , setValuation_cap] = useState(location1.state.bio.valuation_cap);
  const[min_subscription,setMin_subscription] = useState(location1.state.bio.min_subscription);
  const[target,setTarget] = useState(location1.state.bio.target);
  const[end_date , setEnd_date] = useState(location1.state.bio.end_date);
  const[items , setItems] =useState([]); 
  const[items2 , setItems2] =useState([]); 
  
  const navigator = useNavigate();
  const [patch, setPatch] = useState(null);

  console.log(location1.state.bio);
  const updateSecurity = (e) =>{
    setSecurity_type(e)
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
  const updatecampaign_id = (e) =>{
    setCampaign_id(e)
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/deal_type/manage`);
          console.log(response.data)
          setItems(response.data)
          return response.data;
      }
      catch (error) {
          if (error) {
              console.log(error)
          }
          return error;
      }
}
getUploadedDocs();
const getUploaded = async () => {
  
  try {
      const response = await authAxios.get(`${Base_url}/api/campaign/manage`);
      console.log(response.data)
      setItems2(response.data)
      return response.data;
  }
  catch (error) {
      if (error) {
          console.log(error)
      }
      return error;
  }
}
getUploaded();
},[])
  const goToAdd = async (e) => {
    await authAxios.patch(`${Base_url}/api/deal_terms/manage`, {
            
      deal_term_id : location1.state.bio.id,
      
      security_type_id : +security_id,
      
      discount : discount,

      valuation_cap : valuation_cap,

      min_subscription : min_subscription,

      target : target,

      end_date : end_date,
      campaign_id : +campaign_id   
      },
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
          <div className='col-7' style={{marginTop:"130px", marginLeft:"450px", borderRadius:"20px", backgroundColor:"#BACDDB"}}>
          <form style={{padding:"50px"}} onSubmit={e=>{
            e.preventDefault()
            goToAdd()
          }}>
              <h1 style={{textAlign:"center",color:"#070A52"}}>Update Deal Term Data</h1>
              <label for="exampleInputName" className="form-label">security type id</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected  className="active">Select deal type id</option>
                {
                  items && items.map((item) =>{
                    return (
                      <option onClick={()=>{updateSecurity(item.id)}} >{item.id}</option>
                    )
                  })
                }
                </select>
              </div>

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
              <label for="exampleInputName" className="form-label">Campaign id</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected  className="active">Select campaign id</option>
                {
                  items2 && items2.map((item) =>{
                    return (
                      <option onClick={()=>{updatecampaign_id(item.id)}} >{item.id}</option>
                    )
                  })
                }
                </select>
              </div>
              
            <button type="submit"  className="btn btn-success" style={{marginTop:"30px"}}>Submit</button>
        </form>
        </div>
        </div>
        </>
    )
}
export default Deal_Term_Form;