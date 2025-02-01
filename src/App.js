// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import Footer from './Footer';
// import { Button, Card, Col, Container, Row } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhp, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { faSmile } from '@fortawesome/free-regular-svg-icons';

// function App() {
//   let headerInfo={
//     email:'ws@gmail.com',
//     phone:'7894561230'
//   }

//   return (
//     <div className="main">
//       <Header headerInfo={headerInfo} cname="wscubetech" phone="7894561230"  email="ws@gmail.com"/>
//           <h1>welcome to header section</h1> 
//           <FontAwesomeIcon icon={faWhatsapp} className='text-danger'/>
//           <FontAwesomeIcon icon={faSmile}/>
           
//           <Container fluid>
//       </Container>
//       <Row>

//         <Col className='col-12 text-center py-4'>
//           <h1>mearn stack</h1>
//         </Col>
//       </Row>
//       <Row>
//         <Col lg="3" md="6">
//         <Card style={{ width: '18rem' }}>
    
//       <Card.Body>
//         <Card.Title>cource</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
    
//         </Col>
//         <Col lg="3" md="6">
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>cource</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//         </Col>

//         <Col lg="3" md="6">
//         <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>cource</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//         </Col>
//       </Row>
//       <Container>
//         <Row>          
//           <ProductItems/>
//           <ProductItems/>
//           <ProductItems/>
//         </Row>
//       </Container>
//       <Footer/>
          
//     </div>
//   );
// }
 
//  export default App;

// function ProductItems(pitems){
//   return(
//     <div class="col=lg-3 mb-4">
//       <Card>
//         <Card.Body>
//           <Card.Title>
//             {pitems.title}
//           </Card.Title>
//           <Card.Text>
//             {pitems.body}
//           </Card.Text>
//           <Button variant="primary">go somewere</Button>
//         </Card.Body>
//       </Card>
//     </div>
//   )
// } // end of code


// import React from "react";
// import "./App.css";
// import NewComp from "./Components/NewComp";
// class App extends React.Component{
//   style={
//     fontStyle:"bold",
//     color:"teal"
//   };
//   render(){
//     return(
//       <div className="App">
//         <h1 style={this.styles}>welcome</h1>
//         <NewComp/>
//       </div>
//     );
//   }
// }
// export default App;  //end of hooks


// import logo from './logo.svg';
// import './App.css';
// import Header from './Header';
// import { useState } from 'react';

// function App(){

//   // let displayData=()=>{
//   //   alert("welcome to ws")
//   // }

//   let template="";
//   let [count,setCount]=useState(1)
//   let [pshow,setPshow]=useState(false)

//   if(pshow){
//     template=<p>learning</p>
//   }
//   else{
//     template=""
//   }

//   let displayData=()=>{
//     setCount(count+1)
//   }

//   let addData=(a,b)=>{
//     console.log(a+b)
//   }
//   return (
//     <div className="App">
//       {template}

//       {count}
//       <button className='bg-[blue] p-[10px]' onClick={displayData}>save</button>
//         <button className='bg-[blue] p-[10px] mr-4' onClick={()=>addData(20,25)}>add data</button>
//         <p>hallo</p>
//       <img  width={200} src="https://tse2.mm.bing.net/th?id=OIP.7DWXljTMZ9WRrQA-nIJd_gHaHa&pid=Api&P=0&h=220"/>
//       <Header/>
//       <h1 className='text-[40px] text-red-900 font-bold'>Welcome to js</h1>
//     </div>
//   );
// }

// export default App; // end of if evenent condition

// import logo from './logo.svg';
// import './App.css';
// import {useState} from 'react';

// function App() {
//   let [status,setStatus]=useState(false);

//     return (
//       <div className="App">
//         <button onClick={()=>setStatus(!status)}>
//           {(status) ? 'Hide':'Show'}
//         </button>
//         {
//           (status)
//           ?
//           <p className='para'>new learning</p>
//           :
//           ''
//         } 
//       </div>
//     )
//   }
// export default App  //end of ternary operator


// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';

// function App(){
//   let [uname,setUname]=useState('')

//   let handleSubmit=()=>{

//   }
//   let getUname=(event)=>{
//     setUname(event.target.value)
//   }
//   return (
//     <div className="App">
//       <div className='container'>
//         <div className='row'>
//           <div className='col-lg-6'>
            
//             <form onSubmit={handleSubmit}>
//               <div className='text-start my-3'>
//                 <label>UserName</label>
//                 <input type='text' onChange={getUname} className='form-control' value={uname}/>
//               </div>
//               <div className='text-start my-3'>
//                 <label>Password</label>
//                 <input type='text'className='form-control'/>
//               </div>
//               <div className='text-start my-3'>
//                 <button>Login</button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default App;  //end of form



// import './App.css';
// import { Col, Container, Row, Table } from 'react-bootstrap';
// import { useState } from 'react';

// function App() {
//   let [formData, setFormData] = useState({
//     uname: "",
//     uemail: "",
//     uphone: "",
//     umessage: "",
//     index: "",
//   });

//   let [userData, setUserData] = useState([]);

//   let getValue = (event) => {
//     let oldData = { ...formData };
//     let inputName = event.target.name;
//     let inputValue = event.target.value;
//     oldData[inputName] = inputValue;
//     setFormData(oldData);
//   };

//   let handleSubmit = (event) => {
//     event.preventDefault();
//     if (formData.index !== "") {
//       // Update existing entry
//       let updatedUserData = [...userData];
//       updatedUserData[formData.index] = {
//         uname: formData.uname,
//         uemail: formData.uemail,
//         uphone: formData.uphone,
//         umessage: formData.umessage,
//       };
//       setUserData(updatedUserData);
//     } else {
//       // Add new entry
//       let currentUserFormdata = {
//         uname: formData.uname,
//         uemail: formData.uemail,
//         uphone: formData.uphone,
//         umessage: formData.umessage,
//       };
//       let oldUserData = [...userData, currentUserFormdata];
//       setUserData(oldUserData);
//     }
//     // Clear the form
//     setFormData({
//       uname: "",
//       uemail: "",
//       uphone: "",
//       umessage: "",
//       index: "",
//     });
//   };

//   let handleDelete = (index) => {
//     let updatedUserData = [...userData];
//     updatedUserData.splice(index, 1);
//     setUserData(updatedUserData);
//   };

//   let handleEdit = (index) => {
//     let userToEdit = userData[index];
//     setFormData({ ...userToEdit, index });
//   };

//   return (
//     <Container fluid>
//       <Container>
//         <Row>
//           <Col className="text-center py-5">
//             <h1>Enquiry Now</h1>
//           </Col>
//         </Row>
//         <Row>
//           <Col lg={5}>
//             <form onSubmit={handleSubmit}>
//               <div className="pb-3">
//                 <label className="form-label">Name</label>
//                 <input
//                   type="text"
//                   onChange={getValue}
//                   value={formData.uname}
//                   name="uname"
//                   className="form-control"
//                 />
//               </div>
//               <div className="pb-3">
//                 <label className="form-label">Email</label>
//                 <input
//                   type="text"
//                   onChange={getValue}
//                   value={formData.uemail}
//                   name="uemail"
//                   className="form-control"
//                 />
//               </div>
//               <div className="pb-3">
//                 <label className="form-label">Phone</label>
//                 <input
//                   type="text"
//                   onChange={getValue}
//                   value={formData.uphone}
//                   name="uphone"
//                   className="form-control"
//                 />
//               </div>
//               <div className="pb-3">
//                 <label className="form-label">Message</label>
//                 <textarea
//                   onChange={getValue}
//                   value={formData.umessage}
//                   className="form-control"
//                   name="umessage"
//                   rows="3"
//                 />
//               </div>
//               <button className="btn btn-primary">
//                 {formData.index !== "" ? "Update" : "Save"}
//               </button>
//             </form>
//           </Col>
//           <Col lg={7}>
//             <Table striped bordered hover>
//               <thead>
//                 <tr>
//                   <th>Id</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Phone</th>
//                   <th>Message</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {userData.length > 0 ? (
//                   userData.map((data, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>{data.uname}</td>
//                       <td>{data.uemail}</td>
//                       <td>{data.uphone}</td>
//                       <td>{data.umessage}</td>
//                       <td>
//                         <button onClick={() => handleEdit(index)}>Edit</button>
//                         <button onClick={() => handleDelete(index)}>
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan={6}>No Data Found</td>
//                   </tr>
//                 )}
//               </tbody>
//             </Table>
//           </Col>
//         </Row>
//       </Container>
//     </Container>
//   );
// }

// export default App; //end of react form



// import React, { useState } from "react";
// import "./App.css";

// function App() {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState("");

  // Handle button click
  // const handleClick = (value) => {
  //   setInput((prev) => prev + value);
  // };

  // Calculate the result
  // const calculateResult = () => {
  //   try {
      // Evaluate basic operations
  //     const evalResult = eval(input); 
  //     setResult(evalResult);
  //   } catch (error) {
  //     setResult("Error");
  //   }
  // };

  // Clear the input
  // const clearInput = () => {
  //   setInput("");
  //   setResult("");
  // };

  // Backspace functionality
//   const backspace = () => {
//     setInput((prev) => prev.slice(0, -1));
//   };

//   return (
//     <div className="calculator">
//       <div className="display">
//         <input type="text" value={input} readOnly />
//         <div className="result">{result}</div>
//       </div>
//       <div className="buttons">
//         <button onClick={clearInput}>C</button>
//         <button onClick={backspace}>←</button>
//         <button onClick={() => handleClick("/")}>%</button>
//         <button onClick={() => handleClick("*")}>/</button>
//         <button onClick={() => handleClick("7")}>7</button>
//         <button onClick={() => handleClick("8")}>8</button>
//         <button onClick={() => handleClick("9")}>9</button>
//         <button onClick={() => handleClick("-")}>+</button>
//         <button onClick={() => handleClick("4")}>4</button>
//         <button onClick={() => handleClick("5")}>5</button>
//         <button onClick={() => handleClick("6")}>6</button>
//         <button onClick={() => handleClick("+")}>-</button>
//         <button onClick={() => handleClick("1")}>1</button>
//         <button onClick={() => handleClick("2")}>2</button>
//         <button onClick={() => handleClick("3")}>3</button>
//         <button onClick={calculateResult}>=</button>
//         <button onClick={() => handleClick("0")}>0</button>
//         <button onClick={() => handleClick(".")}>.</button>
//         <button onClick={() => handleClick("(")}>(</button>
//         <button onClick={() => handleClick(")")}>)</button>
//         {/* Scientific buttons */}
//         <button onClick={() => setInput(`Math.sin(${input})`)}>sin</button>
//         <button onClick={() => setInput(`Math.cos(${input})`)}>cos</button>
//         <button onClick={() => setInput(`Math.tan(${input})`)}>tan</button>
//         <button onClick={() => setInput(`Math.sqrt(${input})`)}>√</button>
//         <button onClick={() => setInput(`Math.log(${input})`)}>log</button>
//         <button onClick={() => setInput(`${input}**2`)}>x²</button>
//       </div>
//     </div>
//   );
// }

// export default App; // end of calculator small project for react


// import logo from './logo.svg';
// import './App.css';
// import btnModule from "./Button.module.css"
// import {useState} from 'react';

// function App(){
//   let [status,setStatus]=useState(false);

//   let [pstatus,setPstatus]=useState(false)
//   let [modalstatus, setModalstatus]=useState(false)
//   let [menuStatus,setMenuStatus]=useState(false)

//   return(
//     <div className='App'>
//       <button className='micon' onClick={()=>setMenuStatus(!menuStatus)}>
//         {
//         menuStatus ?
//           <span>&times;</span>
//           :
//           <span>&#9776;</span>
//         }
//         </button>
//         <div className={`menu ${menuStatus ? 'activeMenu':''}`}>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Course</li>
//           <li>Gallery</li>
//           <li>Contact</li>
//         </ul>

//       </div>
//     </div>

//   );
// }
// export default App; //end of nav 


// import logo from './logo.svg';
// import './App.css';
// import btnModule from "./Button.module.css"
// import { useState} from 'react';

// function App(){
//   let [status,setStatus]=useState(false);

//   return(
//     <div classname="App">
//       <button className={btnModule.error}>Error</button>
//       <button className={btnModule.warning}>warning</button>
//       <button onClick={()=>setStatus(!status)}>
//         {(status) ? 'hide' : 'show'}
//       </button>
//       {
//         (status)
//         ?
//         <p className='para'>welcome</p>
//         :
//         ''
//       }
//     </div>
//   );
// }
// export default App; //end of button module


// import './App.css';
// import Navbar from './Navbar';

// import Shop from './Shop';


// function App(){
//   return(
//     <>
//     <Navbar/>
//     <div className="container">
//       <Shop/>
//     </div>
//     </>
    

//   );
// }

// export default App; //end 

 


// import React, { useState } from "react";
// import logo from './logo.svg';
// import "./App.css";

// function App(){
//   let [todolist,setTodolist]=useState([])

//   let saveToDoList=(event)=>{

//     let toname=event.target.toname.value;
//     if(!todolist.includes(toname)){
//       let finalDolist=[...todolist,toname]
//       setTodolist(finalDolist)
//     }
//     else{
//       alert("ToDo Name Allready Exists...")
//     }
//     event.preventDefault();
//   }

//   let list=todolist.map((value,index)=>{
//     return(
//       <ToDoListItems value={value} key={index} indexNumber={index}
//       todolist={todolist}
//       setTodolist={setTodolist}/>
//     )
//   })


//   return(
//     <div className="App">
//       <h1>ToDo List</h1>
//       <form onSubmit={saveToDoList}>
//         <input type='text' name='toname'/>  <button>save</button>
//       </form>

//       <div className="outerDiv">
//         <ul>
//           {list}
//         </ul>
//       </div>
//     </div>
//   );
// }

//   export default App;

//   function ToDoListItems({value,indexNumber,todoList,setToDoList}){

//     let [status,setStatus]=useState(false)

//     let deleteRow=()=>{
//       let finalData=todoList.filter((v,i)=>i!=indexNumber)
//       setToDoList(finalData)
//     }

//     let checkStatus=()=>{
//       setStatus(!status)

//     }
//     return(
//       <li className={(status)? 'completetodo':''} onClick={checkStatus}> {indexNumber+1} {value} <span onclick={deleteRow}>&times;</span></li>
//     )
//   }
//end of todo-list





import { useEffect, useState } from "react"

import Navbar from "./Navbar/Navbar"; 

import Background from "./Components/Background/Background";
import Hero from "./Components/Hero/Hero";

const App = () => {
    let heroData = [
        {text1:"Give in to",text2:"what you love"},
        {text1:"Indulge",text2:"your passions"},
        {text1:"Give in to",text2:"your passions"},
    ]
    const [heroCount,setHeroCount]=useState(0);
    const [playStatus,setPlayStatus]=useState(false);

    useEffect(()=>{
      setInterval(()=>{
        setHeroCount((count)=>{return count===2?0:count+1})
      }, 5000);
    },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
         setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus} 
      />
    </div>
  )
}

export default App
