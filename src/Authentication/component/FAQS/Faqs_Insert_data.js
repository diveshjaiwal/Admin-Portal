import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")
const Faqs_Insert_data = () =>{

  const[id , setid] = useState();
  const[campaign_id , setCampaignid] = useState();
  const[question_1, setquestion_1] = useState();
  const[answer_1 , setanswer_1] = useState();
  const[question_2 , setquestion_2] = useState();
  const[answer_2, setanswer_2] = useState();

  
  
  

  const navigator = useNavigate();
  const updateId = (e) =>{
    setid(e.target.value)
  }

  const updateCampaign = (e) =>{
    setCampaignid(e.target.value)
  }
  const updatequestion_1 = (e) =>{
    setquestion_1(e.target.value)
  }
  const updateanswer_1 = (e) =>{
    setanswer_1(e.target.value)
  }
  const updatequestion_2 = (e) =>{
    setquestion_2(e.target.value)
  }
  const updateanswer_2 = (e) =>{
    setanswer_2(e.target.value)
  }

  

  const gotoAdd = async(e) => {

    e.preventDefault();
      
    const values = {
      faqs_id : +id,
      campaign_id: +campaign_id,
      faqs:[
              {
                  question:question_1,
                  answer:answer_1,
              },
              {
                  question:question_2,
                  answer:answer_2
              }
              ]
    }
    
    
    
    
           await axios.post(`${Base_url}/api/faqs/manage`, values , 

            
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    
    
    
    navigator("/home/faqs")
    
    
    
    
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
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Faqs Data</h1>

              <label for="exampleInputName" className="form-label">Id </label>
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">Campaign id </label>
              <input type="number" className="form-control" id="exampleInputName" value={campaign_id} onChange={updateCampaign}/>

              <label for="exampleInputRollnum" className="form-label">Question 1</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={question_1} onChange={updatequestion_1}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Answer 1</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={answer_1} onChange={updateanswer_1}/>

              <label for="exampleInputRegistrationnum" className="form-label">Question 2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={question_2} onChange={updatequestion_2}/>

              <label for="exampleInputRollnum" className="form-label">Answer 2</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={answer_2} onChange={updateanswer_2}/>
            
              
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Faqs_Insert_data;