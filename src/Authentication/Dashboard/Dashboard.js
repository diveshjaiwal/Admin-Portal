import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as IoIcons from 'react-icons/io';
import { SidebarData } from './Sidebar';
import './Dashboard.css';
import { IconContext } from 'react-icons';

function Dashboard() {
  const [sidebar, setSidebar] = useState(true);
  const[flagF1, setFlagF1] = useState(false);
  const[flagF2, setFlagF2] = useState(false);
  const location = window.location.pathname;

  const flag1 = () => {
   
    setFlagF1(!flagF1)
    setFlagF2(false)
  }
  const flag2 = () => {
    setFlagF1(false)
    setFlagF2(!flagF2)
  }
  const f =()=> {
    console.log("ksndvjsm")
  }
  

  return (
    <>
      <div className="row" >
        <div className="col" style={{position:"fixed",padding:"0"}}>
              <nav class="navbar bg-body-tertiary">
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",width:"200%",padding:"0 1rem"}} >
                <div style={{width:"60%",display:"flex",alignItems:"center",justifyContent:"flex-start"}}>
                  <Link exact to="/home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdMK0ZGnsWPRCRrfi6i_qQXJudzMEc7HHq2ZwmAgrSe_MVbQfHAv9Y4bOsL9YyP2RV_gg&usqp=CAU" alt="_random" style={{height:"60px", weight:"80px",borderRadius:"50%",marginRight:"10px"}} /></Link>
                  
                  <h1 style={{color:"#fff",alignSelf:"flex-start"}}>Mynt Admin Portal</h1>
                  </div>
                  <Link exact to="/"><button class="btn btn-success" type="submit">Logout</button></Link>
                </div>
              </nav>
        </div>
      </div>
      <div className="row" >
        <div className="col-lg-8" >
        <IconContext.Provider value={{ color: '#fff' }}>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' >
            <li key={0} className={SidebarData[0].cName}
                    style={location == SidebarData[0].path || location == SidebarData[0].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                  >
                    <Link to={SidebarData[0].path} >
                      {SidebarData[0].icon}
                      <span >{SidebarData[0].title}</span>
                    </Link>
                  </li>
            <li  className="nav-text" onClick={flag1}  style={{marginLeft:"13px",cursor: "pointer"}} > <IoIcons.IoIosPaper /><span style={{color:"#ffff"}}>Founder</span>
            </li>
            { 
              flagF1  ?
              <ul >
                  <li key={1} className={SidebarData[1].cName} 
                  style={location == SidebarData[1].path || location == SidebarData[1].path1 ?  {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                    >
                      <Link  to={SidebarData[1].path} >
                        {SidebarData[1].icon}
                        <span >{SidebarData[1].title}</span>
                      </Link>
                    </li>
                    <li key={2} className={SidebarData[2].cName} 
                            style={location == SidebarData[2].path || location == SidebarData[2].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                          >
                            <Link  to={SidebarData[2].path}>
                              {SidebarData[2].icon}
                              <span >{SidebarData[2].title}</span>
                            </Link>
                    </li>
                    <li key={3} className={SidebarData[3].cName} 
                  style={location == SidebarData[3].path || location == SidebarData[3].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                    >
                      <Link  to={SidebarData[3].path}>
                        {SidebarData[3].icon}
                        <span >{SidebarData[3].title}</span>
                      </Link>
                    </li>
                    <li key={4} className={SidebarData[4].cName} 
                            style={location == SidebarData[4].path || location == SidebarData[4].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                          >
                            <Link  to={SidebarData[4].path}>
                              {SidebarData[4].icon}
                              <span >{SidebarData[4].title}</span>
                            </Link>
                    </li> 
                    <li key={5} className={SidebarData[5].cName} 
                  style={location == SidebarData[5].path || location == SidebarData[5].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                    >
                      <Link  to={SidebarData[5].path}>
                        {SidebarData[5].icon}
                        <span >{SidebarData[5].title}</span>
                      </Link>
                    </li>
                    <li key={6} className={SidebarData[6].cName} 
                            style={location == SidebarData[6].path || location == SidebarData[6].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                          >
                            <Link  to={SidebarData[6].path}>
                              {SidebarData[6].icon}
                              <span >{SidebarData[6].title}</span>
                            </Link>
                    </li> 
                    <li key={7} className={SidebarData[7].cName} 
                  style={location == SidebarData[7].path || location == SidebarData[7].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                    >
                      <Link  to={SidebarData[7].path}>
                        {SidebarData[7].icon}
                        <span >{SidebarData[7].title}</span>
                      </Link>
                    </li>
                    <li key={10} className={SidebarData[10].cName} 
                            style={location == SidebarData[10].path || location == SidebarData[10].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                          >
                            <Link  to={SidebarData[10].path}>
                              {SidebarData[10].icon}
                              <span >{SidebarData[10].title}</span>
                            </Link>
                    </li> 
                    <li key={11} className={SidebarData[11].cName} 
                  style={location == SidebarData[11].path || location == SidebarData[11].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                    >
                      <Link  to={SidebarData[11].path}>
                        {SidebarData[11].icon}
                        <span >{SidebarData[11].title}</span>
                      </Link>
                    </li>
                    <li key={12} className={SidebarData[12].cName} 
                            style={location == SidebarData[12].path || location == SidebarData[12].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                          >
                            <Link  to={SidebarData[12].path}>
                              {SidebarData[12].icon}
                              <span >{SidebarData[12].title}</span>
                            </Link>
                    </li> 
                    <li key={13} className={SidebarData[13].cName} 
                            style={location == SidebarData[13].path || location == SidebarData[13].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                          >
                            <Link  to={SidebarData[13].path}>
                              {SidebarData[13].icon}
                              <span >{SidebarData[13].title}</span>
                            </Link>
                    </li> 
            </ul> : null
            }

            <li  className="nav-text"
             onClick={flag2} style={{marginLeft:"13px",cursor:"pointer"}}> <IoIcons.IoIosPaper /> <span style={{color:"#ffff"}}>Investor</span>
            </li>
            {
               flagF2 ? 
              <ul>
                    <li key={8} className={SidebarData[8].cName}
                    style={location == SidebarData[8].path || location == SidebarData[8].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                      >
                        <Link to={SidebarData[8].path}>
                          {SidebarData[8].icon}
                          <span>{SidebarData[8].title}</span>
                        </Link>
                      </li>
                      <li key={9} className={SidebarData[9].cName}
                              style={location == SidebarData[9].path || location == SidebarData[9].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                            >
                              <Link to={SidebarData[9].path}>
                                {SidebarData[9].icon}
                                <span>{SidebarData[9].title}</span>
                              </Link>
                      </li> 
                      <li key={10} className={SidebarData[10].cName}
                              style={location == SidebarData[10].path || location == SidebarData[10].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                            >
                              <Link to={SidebarData[10].path}>
                                {SidebarData[10].icon}
                                <span>{SidebarData[10].title}</span>
                              </Link>
                      </li> 
                </ul>
                : null
            }

          <li key={14} className={SidebarData[14].cName}
                    style={location == SidebarData[14].path || location == SidebarData[14].path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                  >
                    <Link to={SidebarData[14].path}>
                      {SidebarData[14].icon}
                      <span>{SidebarData[14].title}</span>
                    </Link>
                  </li>
            
              {/* {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}
                    style={location == item.path || location == item.path1 ? {backgroundColor : "#1a83ff", borderRadius:"15px"} : null}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })} */}
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
      </div>  
    </>
  );
}
export default Dashboard;