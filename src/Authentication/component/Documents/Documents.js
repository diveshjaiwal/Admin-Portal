import React, { useState, useEffect } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")

function Documents() {
  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (item){
   navigator(`/documents/${item.id}`, {state : {bio : item}})
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await axios.get(`${Base_url}/api/documents/manage`,  {
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

const goToAdd = () =>{
  navigator("/home/documents/insert");
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
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Document</button>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"><CheckBoxOutlineBlankIcon /></th>
                    <th scope="col">id</th>
                    <th scope="col">company_id</th>
                    <th scope="col">document_type</th>
                    <th scope="col">document_name</th>
                    <th scope="col">document_url</th>
                    <th scope="col">agreement_status</th>
                    <th scope="col">created_at</th>
                    <th scope="col">updated_at</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                    items && items.map( (item ) => {
                      return (
                        <>
                          <tr>
                          <td scope="col-2" ><CheckBoxOutlineBlankIcon /></td>
                          <td scope="col-2" >{item.id}</td>
                          <td scope="col-2" >{item.company_id}</td>
                          <td scope="col-2" >{item.document_type}</td>
                          <td scope="col-2" >{item.document_name}</td>
                          <td scope="col-2" >{item.document_url ? "null" : "null"}</td>
                          <td scope="col-2" >{item.agreement_status}</td>
                          <td scope="col-2" >{item.created_at}</td>
                          <td scope="col-2" >{item.updated_at} </td>
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
export default Documents;