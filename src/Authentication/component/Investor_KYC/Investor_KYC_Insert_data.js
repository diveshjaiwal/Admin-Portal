import React, { useState,useEffect} from "react";
import Dashboard from '../../Dashboard/Dashboard';
import { useNavigate, useLocation } from "react-router-dom";
import Base_url from "../Base_url";
import { authAxios } from "../../../Services/auth.service";


const Investor_KYC_Insert_data= () =>{
  const navigator = useNavigate();
  const[id , setId] = useState();  
  const[pan_card , setpan_card] = useState();
  const[birth_date , setbirth_date] = useState();
  const[birth_month , setbirth_month] = useState();
  const[birth_year,setbirth_year] = useState();
  const[items , setItems] =useState([]); 
  

  
  const updatepan_card = (e) =>{
    setpan_card(e.target.value)
  }
  const updatebirth_date = (e) =>{
    setbirth_date(e.target.value)
  }
  const updatebirth_month = (e) =>{
    setbirth_month(e.target.value)
  }
  const updatebirth_year = (e) =>{
    setbirth_year(e.target.value)
  }
  

  const add =(x)=>{
    console.log(x);
    setId(x);
  }
  
  useEffect(()=>{
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/users/manage`);
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
  },[])
  
  const gotoAdd = async(e) => {

    e.preventDefault();
      
    const values = {
      user_id: +id,
      pan_card:pan_card,
      birth_date:birth_date,
      birth_month:birth_month,
      birth_year:birth_year
    }
    
    
    
    
           await authAxios.post(`${Base_url}/api/investor-kyc/pan/manage`, values);
    
    
    
    
    navigator("/home/investor_kyc")
    
    
    
    
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
          <form style={{padding:"40px" , borderRadius:"20px"}} onSubmit={gotoAdd}>
                <h1 style={{textAlign:"center",color:"#070A52"}}>Add Investor Kyc Data</h1>

                <label  className="form-label">User ID</label>
              <div class="input-group">
              <select class="form-select" id="inputGroupSelect04" aria-label="Example select with button addon">
                <option selected  className="active">Select user id</option>
                {
                  items && items.map((item) =>{
                    return (
                      <option onClick={()=>{add(item.id)}} >{item.id}</option>
                    )
                  })
                }
                </select>
              
              </div>

                

                <label for="exampleInputName" className="form-label">Pan Card</label>
                <input type="text" className="form-control" id="exampleInputName" value={pan_card} onChange={updatepan_card}/>
              
              
                <label for="exampleInputRollnum" className="form-label">Birth Date</label>
                <input  type="number" className="form-control" id="exampleInputRollnum" value={birth_date} onChange={updatebirth_date}/>
              
              
                <label for="exampleInputRegistrationnum" className="form-label">Birth Month</label>
                <input  type="text" className="form-control" id="exampleInputeRegistrationnum" value={birth_month} onChange={updatebirth_month}/>
              
              
                <label for="exampleInputBranch" className="form-label">Birth Year</label>
                <input  type="number" className="form-control" id="exampleInputBranch" value={birth_year} onChange={updatebirth_year}/>
              
              
                
                <button type="submit" className="btn btn-success" style={{marginTop:"30px"}}>Submit</button>
            </form>
        </div>
        </div>
      
        </>
    )
}
export default Investor_KYC_Insert_data