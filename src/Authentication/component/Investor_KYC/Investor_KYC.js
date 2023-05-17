import React, {useState, useEffect} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate, useLocation } from 'react-router-dom';
import Base_url from "../Base_url";
import { authAxios } from '../../../Services/auth.service';


function Investor_KYC() {
  const navigator = useNavigate();
  const [items, setItems] = useState();
  function update (items){
   navigator(`/investor_Kyc/${items.id}`, {state : { bio : items}})
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await authAxios.get(`${Base_url}/api/investor-kyc/get-all-details-investor-Kyc`);
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
          <div className='col-8' style={{marginTop:"150px", marginLeft:"350px"}}>
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Investor_KYC</button>
            <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Pan Card</th>
                    <th scope="col">Pan Card Verified</th>
                    <th scope="col">Birth Date</th>
                    <th scope="col">Birth Month</th>
                    <th scope="col">Birth Year</th>
                    <th scope="col">Address Line 1</th>
                    <th scope="col">Address Line 2</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                    <th scope="col">Country</th>
                    <th scope="col">Pincode</th>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Bank Account</th>
                    <th scope="col">Ifsc Code</th>
                    <th scope="col">Bank Account Verified</th>
                    <th scope="col">Mobile Number</th>
                    <th scope="col">Mobile Number Otp</th>
                    <th scope="col">Mobile Number Verified</th>
                    <th scope="col">Aadhaar Card Number</th>
                    <th scope="col">Aadhaar Card Verified</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                  items && items.map( (item) => {
                    return (
                            <tr>
                              <td scope="col">{item.id}</td>
                              <td scope="col">{item.user_id}</td>
                              <td scope="col">{item.pan_card}</td>
                              <td scope="col">{item.pan_card_verified}</td>
                              <td scope="col">{item.birth_date}</td>
                              <td scope="col">{item.birth_month}</td>
                              <td scope="col">{item.birth_year}</td>
                              <td scope="col">{item.address_line_1}</td>
                              <td scope="col">{item.address_line_2}</td>
                              <td scope="col">{item.city}</td>
                              <td scope="col">{item.state}</td>
                              <td scope="col">{item.country}</td>
                              <td scope="col">{item.pincode}</td>
                              <td scope="col">{item.bank_name}</td>
                              <td scope="col">{item.bank_account}</td>
                              <td scope="col">{item.ifsc_code}</td>
                              <td scope="col">{item.bank_account_verified}</td>
                              <td scope="col">{item.mobile_number}</td>
                              <td scope="col">{item.mobile_number_otp}</td>
                              <td scope="col">{item.mobile_number_verified}</td>
                              <td scope="col">{item.aadhaar_card_number}</td>
                              <td scope="col">{item.aadhaar_card_verified}</td>
                              <td ><CreateIcon onClick={() => {update(items)}} /></td>
                            </tr>
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
export default Investor_KYC;