import React, {useState , useEffect} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import Base_url from "../Base_url";
import { authAxios } from '../../../Services/auth.service';

function Investor_consents() {
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (item){
   navigator(`/investor_consents/${item.user_id}`,{state : {bio : item}})
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/investor-consent/manage`);
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

const goToAdd = () =>{
  navigator("/home/investor_consents/insert");
}

  return (
    <> 
      <div className='container-fluid'>
            <div className='row'>
              
                <Dashboard />
              
            </div>
        </div>
        <div className='row'>
          <div className='col-8' style={{marginTop:"150px", marginLeft:"350px"}}>
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Investor Consent</button>
            <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Risk Consent</th>
                    <th scope="col">Limited Transfer Consent</th>
                    <th scope="col">Diversification Consent</th>
                    <th scope="col">Cancellation Consent</th>
                    <th scope="col">Research Consent</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                    items && items.map( (item ) => {
                      return (
                        <>
                          <tr>
                          <td scope="col-2" >{item.id}</td>
                          <td scope="col-2" >{item.user_id}</td>
                          <td scope="col-2" >{item.risk_consent ? "true": "false"}</td>
                          <td scope="col-2" >{item.limited_transfer_consent ? "true": "false"}</td>
                          <td scope="col-2" >{item.diversification_consent ? "true": "false"}</td>
                          <td scope="col-2" >{item.cancellation_consent ? "true": "false"}</td>
                          <td scope="col-2" >{item.research_consent ? "true": "false"}</td>
                          <td scope="col-2" ><CreateIcon onClick={()=> {update(item)}} /></td>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </table>
          </div>
    
      </div>
    </>
  );
}
export default Investor_consents;