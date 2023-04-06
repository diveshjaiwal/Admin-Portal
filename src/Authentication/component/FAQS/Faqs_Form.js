import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Base_url from "../Base_url";


const token =localStorage.getItem("access_token")

const Faqs_Form = () =>{
  const location1 = useLocation();


  const[question, setquestion] = useState(location1.state.bio.question);
  const[answer , setanswer ]= useState(location1.state.bio.answer);
 
 


  const updatequestion = (e) =>{
    setquestion(e.target.value)
  }
  const updateanswer = (e) =>{
    setanswer(e.target.value)
  }
  const navigator = useNavigate();


  const gotoAdd = async() => {
    
    const values = {

            
                  
       
      faqs_id : location1.state.bio.id,
     
      question : question ,
      answer : answer , 
       
       }
       
      await axios.patch(`${Base_url}/api/faqs/manage`,values, 
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
          <form style={{padding:"20px"}} onSubmit={e => {
            e.preventDefault();
            gotoAdd()
          }}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update Faqs Data</h1>

              
              <label for="exampleInputRollnum" className="form-label">Question </label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={question} onChange={updatequestion}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Answer</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={answer} onChange={updateanswer}/>
              

            
              
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Faqs_Form;