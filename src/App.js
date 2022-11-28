import React from "react";
import {Routes, Route} from "react-router-dom";
import Layout  from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import ShowPerson from "./components/ShowPerson";
import './App.css';
import EditPerson from "./components/EditPerson";
import CreatePerson from "./components/CreatePerson";

function App() {
  return (
    
    <div className="container-fluid ">

    
   <Routes>
   <Route path="/" element={<Layout/>}>
   <Route path="/" element={<Home/>}/>
   <Route path="about" element={<About/>}/>
   <Route path="/show" element={<ShowPerson/>}/>
   <Route path="/create" element= {<CreatePerson/>}/>
   <Route path="/edit/:id" element={<EditPerson/>}/>


   </Route>

   </Routes>
   
    
    </div>
    
  );
}

export default App;
