import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")

const Campaign_Form = () =>{
  const location1 = useLocation();
  
  
  
  const[youtube_link , setYoutube_link] = useState(location1.state.bio.youtube_link);
  const[ama_date,setAma_date] = useState(location1.state.bio.ama_date);
  const[ama_meet,setAma_meet] = useState(location1.state.bio.ama_meet);
  const[ama_youtube,setAma_youtube] = useState(location1.state.bio.ama_youtube);
  const[pitch,setPitch] = useState(location1.state.bio.pitch);
  
  

  const navigator = useNavigate();
  





  
 
  
  const updateYoutube = (e) =>{
    setYoutube_link(e.target.value)
  }
  const updateAmadate = (e) =>{
    setAma_date(e.target.value)
  }
  const updateAmameet = (e) =>{
    setAma_meet(e.target.value)
  }
  const updateAmayoutube = (e) =>{
    setAma_youtube(e.target.value)
  }
  const updatePitch = (e) =>{
    setPitch(e.target.value)
  }
  

  const gotoAdd = async() => {
    
    const values = {

            
                  
       
       
       campaign_id : location1.state.bio.id, 
       
       

       
       youtube_link : youtube_link,
       
       ama_date : ama_date,
       
       ama_meet_link : ama_meet,
       
       ama_youtube_video : ama_youtube,
       
       pitch : pitch,
       
       
       }
       console.log(values)
      await axios.patch(`${Base_url}/api/campaign/manage`,values, 
            {headers: {
              Authorization: `Bearer ${token}`,
            },}
            )
      console.log("successful")
     navigator("/home/campaign")
    
    }
    
     

    return(
        <>
          <div className='container-fluid'>
        <div className='row'>
          
            <Dashboard />
          
        </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"350px"}}>
          <form style={{padding:"20px",borderRadius:"20px"}} onSubmit={e =>{
            e.preventDefault();
            gotoAdd()}
          }>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Update Data</h1>

              
            
            
              <label for="exampleInput" className="form-label">Youtube Link</label>
              <input   type="link" className="form-control" id="exampleInputeRegistrationnum" value={youtube_link} onChange={updateYoutube}/>

              <label for="exampleInputRegistrationnum" className="form-label">Ama date</label>
              <input   type="date" className="form-control" id="exampleInputeRegistrationnum" value={ama_date} onChange={updateAmadate}/>

              <label for="exampleInputRegistrationnum" className="form-label">Ama Meet Link</label>
              <input   type="text" className="form-control" id="exampleInputeRegistrationnum" value={ama_meet} onChange={updateAmameet}/>

              <label for="exampleInputRegistrationnum" className="form-label">Ama Youtube</label>
              <input   type="link" className="form-control" id="exampleInputeRegistrationnum" value={ama_youtube} onChange={updateAmayoutube}/>

              <label for="exampleInputRegistrationnum" className="form-label">Pitch</label>
              <input   type="text" className="form-control" id="exampleInputeRegistrationnum" value={pitch} onChange={updatePitch}/>

              
          
            <button type="submit"  className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} >Submit</button>
        </form>
        </div>
        </div>
     
    





        </>
    )
}
export default Campaign_Form;