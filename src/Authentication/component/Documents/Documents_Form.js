import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Base_url from "../Base_url";


const token =localStorage.getItem("access_token")

const Documents_Form = () =>{
  const location1 = useLocation();


  const[document_type, setdocument_type] = useState(location1.state.bio.document_type);
  const[document_name , setdocument_name ]= useState(location1.state.bio.document_name);
    const[document_status , setdocument_status] = useState(location1.state.bio.document_status);  
 


  const updatedocument_type = (e) =>{
    setdocument_type(e.target.value)
  }
  const updatedocument_name = (e) =>{
    setdocument_name(e.target.value)
  }
  const updatedocument_status = (e) =>{
    setdocument_status(e.target.value)
  }
  const navigator = useNavigate();


  const gotoAdd = async() => {
    
    const values = {

            
                  
       
      document_id : location1.state.bio.id,
     
      document_type :document_type,
      document_name : document_name,

      document_status : document_status, 
       
       }
       
      await axios.patch(`${Base_url}/api/documents/manage`,values, 
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
      
     navigator("/home/documents")
    
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
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update Documents Data</h1>

              
              <label for="exampleInputRollnum" className="form-label">document_type</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={document_type} onChange={updatedocument_type}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">document_name</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_name} onChange={updatedocument_name}/>
              

              <label for="exampleInputRegistrationnum" className="form-label">document_status</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_status} onChange={updatedocument_status}/>
            
              
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Documents_Form;