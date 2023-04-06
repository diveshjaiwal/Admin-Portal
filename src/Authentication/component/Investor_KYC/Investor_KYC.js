import React, {useState, useEffect} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")

function Investor_KYC() {
  const navigator = useNavigate();
  const [items, setItems] = useState({});
  function update (items){
   navigator(`/investor_Kyc/${items.user_id}`, {state : { bio : items}})
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await axios.get(`${Base_url}/api/investor-kyc/100`,  {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
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

  const goToAdd =() =>{
    navigator("/home/investor_kyc/insert");
  }

  return (
    <> 
      <div className='container-fluid'>
            <div className='row'>
              
                <Dashboard />
              
            </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"300px"}}>
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Investor_KYC</button>
            <table class="table">
                <thead>
                  <tr>

                    <th scope="col"><CheckBoxOutlineBlankIcon /></th>
                    <th scope="col">id</th>
                    <th scope="col">user_id</th>
                    <th scope="col">pan_card</th>
                    <th scope="col">pan_card_verified</th>
                    <th scope="col">birth_date</th>
                    <th scope="col">birth_month</th>
                    <th scope="col">birth_year</th>
                    <th scope="col">address_line_1</th>
                    <th scope="col">address_line_2</th>
                    <th scope="col">city</th>
                    <th scope="col">state</th>
                    <th scope="col">country</th>
                    <th scope="col">pincode</th>
                    <th scope="col">bank_name</th>
                    <th scope="col">bank_account</th>
                    <th scope="col">ifsc_code</th>
                    <th scope="col">bank_account_verified</th>
                    <th scope="col">mobile_number</th>
                    <th scope="col">mobile_number_otp</th>
                    <th scope="col">mobile_number_verified</th>
                    <th scope="col">aadhaar_card_number</th>
                    <th scope="col">aadhaar_card_verified</th>
                    <th scope="col">created_at</th>
                    <th scope="col">updated_at</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td scope="col"><CheckBoxOutlineBlankIcon /></td>
                    <td scope="col">{items.id}</td>
                    <td scope="col">{items.user_id}</td>
                    <td scope="col">{items.pan_card}</td>
                    <td scope="col">{items.pan_card_verified}</td>
                    <td scope="col">{items.birth_date}</td>
                    <td scope="col">{items.birth_month}</td>
                    <td scope="col">{items.birth_year}</td>
                    <td scope="col">{items.address_line_1}</td>
                    <td scope="col">{items.address_line_2}</td>
                    <td scope="col">{items.city}</td>
                    <td scope="col">{items.state}</td>
                    <td scope="col">{items.country}</td>
                    <td scope="col">{items.pincode}</td>
                    <td scope="col">{items.bank_name}</td>
                    <td scope="col">{items.bank_account}</td>
                    <td scope="col">{items.ifsc_code}</td>
                    <td scope="col">{items.bank_account_verified}</td>
                    <td scope="col">{items.mobile_number}</td>
                    <td scope="col">{items.mobile_number_otp}</td>
                    <td scope="col">{items.mobile_number_verified}</td>
                    <td scope="col">{items.aadhaar_card_number}</td>
                    <td scope="col">{items.aadhaar_card_verified}</td>
                    <td scope="col">{items.created_at}</td>
                    <td scope="col">{items.updated_at}</td>
                    <td ><CreateIcon onClick={() => {update(items)}} /></td>
                  </tr>
                 
                  
                </tbody>
              </table>
          </div>
       
      </div>
    </>
  );
}
export default Investor_KYC;