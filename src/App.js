<<<<<<< HEAD
import logo from './logo.svg';
import './App.css';
import { Container,Row,Col, NavLink } from 'react-bootstrap';
import { spacing } from '@mui/system';
import {motion} from 'framer-motion'
import {FaBars} from "react-icons/fa"
import {BiSearch} from "react-icons/bi"
import { useState } from 'react';
import copy from "copy-to-clipboard";  


function App() {
  const [sidebar, setsidebar] = useState(true)
  const toggle=()=>{
    setsidebar(!sidebar)
  }
  const [copyText, setCopyText] = useState(
   ` hello dears \n
   this is a test message. \n  how are u`
 )

  
  const copyToClipboard = () => {
     copy(copyText);
     alert(`You have copied "${copyText}"`);
  }
  return (
    <div>
      <Container fluid>
        <Row style={{}}>
          { sidebar ?  <>
          <Col className='col-sm-2 firstrow'>
            <div className='main-container'>
              <motion.div animate={{minWidth:"16%"}} className="sidebar">
                <div className='search'>
                  <div className='search_icons'>
                    <BiSearch></BiSearch>

                  </div>
                  <input placeholder='search...'/>

                </div>
                
                <NavLink className='click'  href ="#introduction" style={{color:"white",textAlign:"center"}} >introduction</NavLink>
                <NavLink  className='click' href ="#service" style={{color:"white",textAlign:"center"}} >services</NavLink>
                <NavLink  className='click' href ="#authentication" style={{color:"white",textAlign:"center"}} >Authentication</NavLink>
                <NavLink className='click' href="#errors" style={{color:"white",textAlign:"center"}} >error</NavLink>

              </motion.div>

            </div>
                  
          </Col>
          </> :""}

           <Col className='secondcol' >
     
              <Row >

               <Col className='col-sm-10 ' style={{display:'flex',width:"100%"}}   >


                          <div className='indrobox' style={{width:"50%"}} >
                                     <div className='topsection' style={{display:"flex"}}>
                                      <div  onClick={toggle} className='bars'>
                                      <FaBars></FaBars>

                                      </div>
                                      <h4 style={{background:"white"}}>Introduction</h4>
                                     

                                     </div>
                                     <section id="introduction">
                                    
                                    <p style={{ backgroundColor: "darkseagreen"}}>
                                    Welcome to the Kittn API! You can use our API to access Kittn API endpoints, which can get information on various cats, kittens, and breeds in our database.
                
                                    We have language bindings in Shell, Ruby, Python, and JavaScript! You can view code examples in the dark area to the right, and you can switch the programming language of the examples with the tabs in the top right.

                                    This example API documentation page was created with Slate. Feel free to edit it and use it as a base for your own API's documentation.
                                    </p>
                                    </section>

                          </div>
          

                            <div style={{color:"pink",border:"1px solid red",width:"50%",backgroundColor:"black",}} className=" blackbox1   ">
                                    <div style={{backgroundColor:"darkseagreen",height:"35px",}}  >
                                      <div style={{display:"flex",height:"35px",justifyContent:"revert",backgroundColor:"darkseagreen"}}>
                                           <button style={{marginLeft:"10px"}}>react</button>
                                           <button style={{marginLeft:"10px"}}>react</button>
                                           <button style={{marginLeft:"10px"}}>react</button>

                                      </div>
                                          
                                           
                                    </div>

        
                            </div>
       

              </Col> 
              </Row>
              <Row>   
     




               <Col style={{width:"100%",marginBottom:"3px"}} >
                 <h4>Authentication</h4>
       
                   <section id="authentication" style={{color:"white",display:"flex",backgroundColor:"pink",width:"100%"}}>
          
                       <div className='kittenbox' style={{backgroundColor:"darkseagreen",width:"50%"}}>
                                  <p>Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our developer portal.

                                   Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

                                   Authorization: meowmeowmeowKittn uses API keys to allow access to the API. You can register a new Kittn API key at our developer portal.

                                   Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

                                  Authorization: meowmeowmeow</p>

                         </div>
                         <div className="scrollbox" style={{backgroundColor:"black",width:"50%",padding:"30px"}}>

                                 <input style={{width:"40%",height:"70%"}} value={copyText}>
                               
                                 </input>          
                    <button onClick={copyToClipboard}>
               Copy icon
          </button>
                                  
                         </div>

                 </section>
          
               </Col>
               </Row>
               <Row>
     






        

        {/* <div style={{width:"100%" ,background:"red",height:"3px"} }>  </div> */}
        <Col style={{width:"100%"}}>
           <h4>services</h4>
       
              <section id="service" style={{color:"white",display:"flex",backgroundColor:"pink",width:"100%"}}>
          
              <div className='kittenbox' style={{backgroundColor:"darkseagreen",width:"50%"}}>
                     <p>Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our developer portal.

                      Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

                      Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

                       Authorization: meowmeowmeow
                       Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our developer portal.

                      Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

                      Authorization: meowmeowmeow
                      </p>

            </div>
             <div className="scrollbox" style={{backgroundColor:"black",width:"50%",padding:"30px"}}>
                              <p >to autherize</p>
                              <p >require 'kittn'</p>
                              <p>pi = Kittn::APIClient.authorize!('meowmeowmeow')</p>
              

             </div>

             </section>
          



        </Col>


       </Row>  
       <Row>
     






        

     {/* <div style={{width:"100%" ,background:"red",height:"3px"} }>  </div> */}
     <Col style={{width:"100%"}}>
        <h4>errors</h4>
    
           <section id="errors" style={{color:"white",display:"flex",backgroundColor:"pink",width:"100%"}}>
       
           <div className='kittenbox' style={{backgroundColor:"darkseagreen",width:"50%"}}>
                  <p>Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our developer portal.

                   Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

                   Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

                    Authorization: meowmeowmeow
                    Kittn uses API keys to allow access to the API. You can register a new Kittn API key at our developer portal.

                   Kittn expects for the API key to be included in all API requests to the server in a header that looks like the following:

                   Authorization: meowmeowmeow
                   </p>

         </div>
          <div className="scrollbox" style={{backgroundColor:"black",width:"50%",padding:"30px"}}>
                           <p >to autherize</p>
                           <p >require 'kittn'</p>
                           <p>pi = Kittn::APIClient.authorize!('meowmeowmeow')</p>
           

          </div>

          </section>       



     </Col>


    </Row> 
      
     </Col> 
 </Row>


  </Container>
  </div>
  );
=======
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import BasicLayout from "./layout/BasicLayout";
// import RemitterPage from "./pages/DMT/Remitter/RemitterPage";


function App() {
  return <div className="App">
    <BasicLayout />
    {/* <RemitterPage /> */}
  </div>
>>>>>>> 05ae82897139daeedf50f16d125aef5add7a8f51
}

export default App;
