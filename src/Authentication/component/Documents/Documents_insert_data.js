import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")
const Documents_insert_data = () =>{

  const[id , setid] = useState();
  const[company_id , setcompany_id] = useState();
  const[document_type_1, setdocument_type_1] = useState();
  const[document_name_1 , setdocument_name_1] = useState();
  const[agreement_status_1 , setagreement_status_1] = useState();
  const[document_type_2, setdocument_type_2] = useState();
  const[document_name_2 , setdocument_name_2] = useState();
  const[agreement_status_2 , setagreement_status_2] = useState();
  const[document_url1 , setdocument_url1] = useState();
  const[document_url2 , setdocument_url2] = useState();
  
  
  
  

  const navigator = useNavigate();

  const updateid = (e) =>{
    setid(e.target.value)
  }

  const updatecompany_id = (e) =>{
    setcompany_id(e.target.value)
  }
  const updatedocument_type_1 = (e) =>{
    setdocument_type_1(e.target.value)
  }
  const updatedocument_name_1 = (e) =>{
    setdocument_name_1(e.target.value)
  }
  const updateagreement_status_1 = (e) =>{
    setagreement_status_1(e.target.value)
  }
  const updatedocument_type_2 = (e) =>{
    setdocument_type_2(e.target.value)
  }
  const updatedocument_name_2 = (e) =>{
    setdocument_name_2(e.target.value)
  }
  const updateagreement_status_2 = (e) =>{
    setagreement_status_2(e.target.value)
  }
  const updatedocument_url1 = (e) =>{
    setdocument_url1(e.target.value)
  }
  const updatedocument_url2 = (e) =>{
    setdocument_url2(e.target.value)
  }
  

  const gotoAdd = async(e) => {

    e.preventDefault();
      
    const values = {
        document_id:+id,
        company_id:+company_id,
        documents:[
            {document_type:"AGREEMENTS",
            document_name:document_name_1,
            agreement_status:"SIGNED BY ADMIN",
            document_url:document_url1},
            {document_type:"AGREEMENTS",
            document_name:document_name_2,
            agreement_status:"SIGNED BY ADMIN",
            document_url:document_url2}
            
        ]
    }
    
    
    
    
           await axios.post(`${Base_url}/api/documents/manage`, values , 

            
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
          <form style={{padding:"20px"}} onSubmit={gotoAdd}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add Documents Data</h1>

              <label for="exampleInputName" className="form-label">Id </label>
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateid}/>

              <label for="exampleInputName" className="form-label">Company id </label>
              <input type="number" className="form-control" id="exampleInputName" value={company_id} onChange={updatecompany_id}/>

              <label for="exampleInputRollnum" className="form-label">document_type_1</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={document_type_1} onChange={updatedocument_type_1}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">document_name_1</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_name_1} onChange={updatedocument_name_1}/>

              <label for="exampleInputRegistrationnum" className="form-label">agreement_status_1</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={agreement_status_1} onChange={updateagreement_status_1}/>

              <label for="exampleInputRegistrationnum" className="form-label">document_url1</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_url1} onChange={updatedocument_url1}/>

              <label for="exampleInputRollnum" className="form-label">document_type_2</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={document_type_2} onChange={updatedocument_type_2}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">document_name_2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_name_2} onChange={updatedocument_name_2}/>

              <label for="exampleInputRegistrationnum" className="form-label">agreement_status_2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={agreement_status_2} onChange={updateagreement_status_2}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">document_url2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={document_url2} onChange={updatedocument_url2}/>

              
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} >Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Documents_insert_data;