import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import axios from "axios";
import Base_url from "../Base_url";
import { useNavigate } from "react-router-dom";



const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwNjY5OTgwLCJpYXQiOjE2ODA1ODM1ODAsImp0aSI6ImEzYzA5NmQ3YmEwYzQ0NjNhZjA3ZmNlZGRjNDZkOWE5IiwidXNlcl9pZCI6MTA0fQ.s3BH8aFjhKDBmnbQKaxDuQeEx3olPaAuJ0tCgt-oMJQ"



const Faqs_Insert_data = () =>{
  const[id , setId] = useState();  
  const[ques1 , setques1] = useState();
  const[ans1 , setans1] = useState();
  
  const navigator = useNavigate()
  
    
  
  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateques1 = (e) =>{
    setques1(e.target.value)
  }
  const updateans1 = (e) =>{
    setans1(e.target.value)
  }
  

  const gotoAdd = async(e) => {

    
    
    if(id  && ques1 && ans1   )
    
    {
    
           await axios.post(`${Base_url}api/faqs/manage`, {

            
            campaign_id : id,
       
            
            question : ques1,
            
            answer : ans1,

            

            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
   
    
    
    navigator("/home/faqs")
    
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
          <form style={{padding:"20px"}} onSubmit={e=>{
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Data</h1>

              <label for="exampleInputRollnum" className="form-label">Id</label>
              <input  type="number" className="form-control" id="exampleInputRollnum" value={id} onChange={updateId}/>

              <label for="exampleInputName" className="form-label">Question 1</label>
              <input type="text" className="form-control" id="exampleInputName" value={ques1} onChange={updateques1}/>

              <label for="exampleInputRollnum" className="form-label">Answer </label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={ans1} onChange={updateans1}/>
            
            
              
          
            <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
        </form>
        </div>
        </div>
      
      </>
    )
}
export default Faqs_Insert_data;