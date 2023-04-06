import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Base_url from "../Base_url";


const token =localStorage.getItem("access_token")
const Highlights_Form = () =>{
  const location1 = useLocation();


  const[title, settitle] = useState(location1.state.bio.title);
  const[description , setdescription ]= useState(location1.state.bio.description);
  const[highlight_image , sethighlight_image ]= useState(location1.state.bio.highlight_image);
 
 


  const updatetitle = (e) =>{
    settitle(e.target.value)
  }
  const updatedescription = (e) =>{
    setdescription(e.target.value)
  }
  const updatehighlight_image = (e) =>{
    sethighlight_image(e.target.value)
  }
  const navigator = useNavigate();


  const gotoAdd = async() => {
    
    const values = {

            
                  
       
      highlight_id : location1.state.bio.id,
     
      title : title ,
      description : description , 
      highlight_image : highlight_image , 
       
       }
       
      await axios.patch(`${Base_url}/api/highlights/manage`,values, 
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
      
     navigator("/home/highlights")
    
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
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update HighLights Data</h1>

              
              <label for="exampleInputRollnum" className="form-label">Title </label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title} onChange={updatetitle}/>
            
            
              <label for="exampleInputRegistrationnum" className="form-label">Description</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description} onChange={updatedescription}/>

              <label for="exampleInputRollnum" className="form-label">HighLight Image</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={highlight_image} onChange={updatehighlight_image}/>
              

            
              
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}}>Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Highlights_Form;