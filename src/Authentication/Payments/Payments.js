import React,{useState,useEffect} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import Base_url from "../component/Base_url";
import { authAxios } from '../../Services/auth.service';


function Payments() {
  const navigator = useNavigate();
  const [items , setItems] = useState();
  function update (item){
   navigator(`/payments/${item.id}`, {state : {bio : item}})
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
      try {
          const response = await authAxios.get(`${Base_url}/api/payment/get-all-payment-details`);
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

  return (
    <>  
      <div className='container-fluid'>
        <div className='row'>
            <Dashboard /> 
        </div>
        </div>
        <div className='row'>
          <div className='col-8' style={{marginTop:"150px", marginLeft:"320px"}}>
            <table class="table table-dark table-striped">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Campaign Id</th>
                    <th scope="col">User Id</th>
                    <th scope="col">Cashfree Order Id</th>
                    <th scope="col">Mynt Order Id</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Total Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Payment Session Id</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                    items && items.map( (item ) => {
                      return (
                        <>
                          <tr>
                              <td scope="col">{item.id}</td>
                              <td scope="col">{item.campaign_id}</td>
                              <td scope="col">{item.user_id}</td>
                              <td scope="col">{item.cashfree_order_id}</td>
                              <td scope="col">{item.mynt_order_id}</td>
                              <td scope="col">{item.amount}</td>
                              <td scope="col">{item.total_amount}</td>
                              <td scope="col">{item.status}</td>
                              <td scope="col">{item.payment_session_id}</td>
                              <td scope="col-2" ><CreateIcon onClick={() => {update(item)}} /></td>
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
export default Payments;