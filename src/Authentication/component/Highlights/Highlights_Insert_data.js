import React, { useState } from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")
const Highlights_Insert_data = () =>{

  const [id, setId] = useState()
  const[campaign_id , setCampaignid] = useState();
  const[title_1, settitle_1] = useState();
  const[description_1 , setdescription_1] = useState();
  const[highlight_image_1 , sethighlight_image_1] = useState();
  const[title_2, settitle_2] = useState();
  const[description_2 , setdescription_2] = useState();
  const[highlight_image_2 , sethighlight_image_2] = useState();
  const[title_3, settitle_3] = useState();
  const[description_3 , setdescription_3] = useState();
  const[highlight_image_3 , sethighlight_image_3] = useState();
  const[title_4, settitle_4] = useState();
  const[description_4 , setdescription_4] = useState();
  const[highlight_image_4 , sethighlight_image_4] = useState();


  
  
  

  const navigator = useNavigate();

  const updateId = (e) =>{
    setId(e.target.value)
  }

  const updateCampaign = (e) =>{
    setCampaignid(e.target.value)
  }
  const updatetitle_1 = (e) =>{
    settitle_1(e.target.value)
  }
  const updatedescription_1 = (e) =>{
    setdescription_1(e.target.value)
  }
  const updatehighlight_image_1 = (e) =>{
    sethighlight_image_1(e.target.value)
  }
  const updatetitle_2 = (e) =>{
    settitle_2(e.target.value)
  }
  const updatedescription_2 = (e) =>{
    setdescription_2(e.target.value)
  }
  const updatehighlight_image_2 = (e) =>{
    sethighlight_image_2(e.target.value)
  }
  const updatetitle_3 = (e) =>{
    settitle_3(e.target.value)
  }
  const updatedescription_3 = (e) =>{
    setdescription_3(e.target.value)
  }
  const updatehighlight_image_3 = (e) =>{
    sethighlight_image_3(e.target.value)
  }
  const updatetitle_4 = (e) =>{
    settitle_4(e.target.value)
  }
  const updatedescription_4 = (e) =>{
    setdescription_4(e.target.value)
  }
  const updatehighlight_image_4 = (e) =>{
    sethighlight_image_4(e.target.value)
  }



  

  const gotoAdd = async(e) => {

    e.preventDefault();
      
    const values = {
      highlight_id : +id,
      campaign_id:+campaign_id,
      highlights:[
              {
              title:title_1,
              description:description_1,
              highlight_image:highlight_image_1},
              {
              title:title_2,
              description:description_2,
              highlight_image:highlight_image_2},
              {
              title:title_3,
              description:description_3,
              highlight_image:highlight_image_3},
              {
              title:title_4,
              description:description_4,
              highlight_image:highlight_image_4}
      ]
    }
    
    
    
    
           await axios.post(`${Base_url}/api/highlights/manage`, values , 

            
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
          <form style={{padding:"20px"}}>
              <h1 style={{textAlign:"center",color:"blueviolet"}}>Add HIghlights Data</h1>

              <label for="exampleInputName" className="form-label">Id </label>
              <input type="number" className="form-control" id="exampleInputName" value={id} onChange={updateId}/>


              <label for="exampleInputName" className="form-label">Campaign id </label>
              <input type="number" className="form-control" id="exampleInputName" value={campaign_id} onChange={updateCampaign}/>

              <label for="exampleInputRollnum" className="form-label">Title 1</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title_1} onChange={updatetitle_1}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description 1</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description_1} onChange={updatedescription_1}/>

              <label for="exampleInputRegistrationnum" className="form-label">HighLight Image 1</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={highlight_image_1} onChange={updatehighlight_image_1}/>

              <label for="exampleInputRollnum" className="form-label">Title 2</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title_2} onChange={updatetitle_2}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description 2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description_2} onChange={updatedescription_2}/>

              <label for="exampleInputRegistrationnum" className="form-label">HighLight Image 2</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={highlight_image_2} onChange={updatehighlight_image_2}/>

              <label for="exampleInputRollnum" className="form-label">Title 3</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title_3} onChange={updatetitle_3}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description 3</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description_3} onChange={updatedescription_3}/>

              <label for="exampleInputRegistrationnum" className="form-label">HighLight Image 3</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={highlight_image_3} onChange={updatehighlight_image_3}/>

              <label for="exampleInputRollnum" className="form-label">Title 4</label>
              <input  type="text" className="form-control" id="exampleInputRollnum" value={title_4} onChange={updatetitle_4}/>
            
              <label for="exampleInputRegistrationnum" className="form-label">Description 4</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={description_4} onChange={updatedescription_4}/>

              <label for="exampleInputRegistrationnum" className="form-label">HighLight Image 4</label>
              <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={highlight_image_4} onChange={updatehighlight_image_4}/>

            
              
          
              <button type="submit" className="btn btn-primary" style={{marginLeft:"500px",marginTop:"30px"}} onClick={gotoAdd}>Submit</button>
          </form>
        </div>
        </div>
      

  </>
    )
}
export default Highlights_Insert_data;