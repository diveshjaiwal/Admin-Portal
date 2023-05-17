import React, {useState, useEffect} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import Base_url from "../Base_url";
import { authAxios } from '../../../Services/auth.service';

function User() {
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (item){
   navigator(`/user/${item.id}`,{state : { bio : item}})
  }

  useEffect ( () => {
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

const goToAdd =() =>{
  navigator("/home/user/insert");
}
       
  return (
    <> 
      <div className='container-fluid'>
            <div className='row'>
              
                <Dashboard />
              
            </div>
        </div>
        <div className='row'>
          <div className='col-8' style={{marginTop:"150px", marginLeft:"320px"}}>
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add UserList</button>
            <table class="table table-dark table-striped">
                <thead>
                <tr>
                    <th scope="col-2">Id</th>
                    <th scope="col-2">First Name</th>
                    <th scope="col-2">Last Name</th>
                    <th scope="col-2">Email</th>
                    <th scope="col-2">Email Otp</th>
                    <th scope="col-2">Social Login</th>
                    <th scope="col-2">Country</th>
                    <th scope="col-2">Email Verified</th>
                    <th scope="col-2">Nationality</th>
                    <th scope="col-2">Profile Image</th>
                    <th scope="col-2">User Type</th>
                    <th scope="col-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                    items && items.map( (item ) => {
                      return (
                        <>
                          <tr>
                          <td scope="col-2" >{item.id}</td>
                          <td scope="col-2" >{item.first_name}</td>
                          <td scope="col-2" >{item.last_name}</td>
                          <td scope="col-2" >{item.email}</td>
                          <td scope="col-2" >{item.email_otp}</td>
                          <td scope="col-2" >{item.social_login ? "true": "false"} </td>
                          <td scope="col-2" >{item.country}</td>
                          <td scope="col-2" >{item.email_verified ? "true": "false"}</td>
                          <td scope="col-2" >{item.nationality}</td>
                          <td scope="col-2" >{item.profile_image}</td>
                          <td scope="col-2" >{item.user_type}</td>
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
export default User;