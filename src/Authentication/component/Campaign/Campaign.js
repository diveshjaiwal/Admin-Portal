import React,{useState,useEffect} from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CreateIcon from '@mui/icons-material/Create';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Base_url from "../Base_url";

const token =localStorage.getItem("access_token")
function Campaign() {

  const navigator = useNavigate();
  const [items , setItems] = useState([]);
  function update (item){
   navigator(`/campaign/${item.id}`, {state : {bio : item}})
  }

  useEffect ( () => {
    const getUploadedDocs = async () => {
  
      try {
          const response = await axios.get(`${Base_url}/api/campaign/manage`,  {
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

const goToAdd = () =>
{
    navigator("/home/campaign/insert");
}


  return (
    <>  
      <div className='container-fluid'>
        <div className='row'>
          
            <Dashboard />
          
        </div>
        </div>
        <div className='row'>
          <div className='col-10' style={{marginTop:"150px", marginLeft:"350px"}}>
          <button type="button" class="btn btn-secondary btn-lg" onClick={goToAdd}>Add Campaign</button>
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"><CheckBoxOutlineBlankIcon /></th>
                    <th scope="col">id</th>
                    <th scope="col">company_id</th>
                    <th scope="col">status</th>
                    <th scope="col">youtube_link</th>
                    <th scope="col">ama_date</th>
                    <th scope="col">ama_meet_link</th>
                    <th scope="col">ama_youtube_video</th>
                    <th scope="col">pitch</th>
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
                              <td scope="col">{item.id}</td>
                              <td scope="col">{item.company_id}</td>
                              <td scope="col">{item.status}</td>
                              <td scope="col">{item.youtube_link}</td>
                              <td scope="col">{item.ama_date}</td>
                              <td scope="col">{item.ama_meet_link}</td>
                              <td scope="col">{item.ama_youtube_video}</td>
                              <td scope="col">{item.pitch}</td>
                              <td scope="col">{item.created_at}</td>
                              <td scope="col">{item.updated_at}</td>
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

export default Campaign;