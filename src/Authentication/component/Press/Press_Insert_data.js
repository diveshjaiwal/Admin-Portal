import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")
const Press_Insert_data = () =>{
  const[id , setId] = useState();  
  const[company , setCompany] = useState();
  const[title , setTitle] = useState();
  const[link , setLink] = useState();
  const[description,setDescription] = useState();
  const[banner,setBanner] = useState();
  const [post, setPost] = React.useState(null);


  const navigator = useNavigate();

  const updateId = (e) =>{
    setId(e.target.value)
  }
  const updateCompany = (e) =>{
    setCompany(e.target.value)
  }
  const updateTitle = (e) =>{
    setTitle(e.target.value)
  }
  const updateLink = (e) =>{
    setLink(e.target.value)
  }
  const updateDescription = (e) =>{
    setDescription(e.target.value)
  }
  const updateBanner = (e) =>{
    setBanner(e.target.value)
  }



  const gotoAdd = async(e) => {

    e.preventDefault();
    
    if(id && company && title&& link && description && banner )
    
    {
    
           await axios.post(`${Base_url}/api/press/manage`, {

            
            id : id,
            
            company_id : company,
            
            title : title,
            
            link : link,

            description : description,

            banners : banner,
            
          
            
            },
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
    
    .then(( response) => {
    
      setPost(response.data);
    
    }
    )
    
    
    navigator("/home/press")
    
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

                <label for="exampleInputName" className="form-label">Company id</label>
                <input type="number" className="form-control" id="exampleInputName" value={company} onChange={updateCompany}/>

                <label for="exampleInputRollnum" className="form-label">Title</label>
                <input  type="text" className="form-control" id="exampleInputRollnum" value={title} onChange={updateTitle}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">Link</label>
                <input  type="link" className="form-control" id="exampleInputeRegistrationnum" value={link} onChange={updateLink}/>
              
              
                <label for="exampleInputBranch" className="form-label">Description</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={description} onChange={updateDescription}/>

                <label for="exampleInputBranch" className="form-label">Banner</label>
                <input  type="text" className="form-control" id="exampleInputBranch" value={banner} onChange={updateBanner}/>
              
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
     
    </>
    )
}
export default Press_Insert_data;