

import './App.css';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import About from './components/About';
import TextForm from './components/TextForm';
function App() {
  const[alert , setalert]=useState(null);
  const showalert=(message , type)=>{
setalert({
  msg:message,
  type:type
})
setTimeout(() => {
  setalert(null)
}, 1500);
  }
  const  [mode,setmode]=useState('light');
  const toggle =()=>{
    if(mode === 'light'){
setmode('dark');
document.body.style.backgroundColor = '#042743';
showalert("Dark mode has Enabled" , "success");
// document.title= "TextUtils - Dark Mode"
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has Enabled" , "success");
      // document.title= "TextUtils - Light Mode"
    }
  }
  return (
<>
<BrowserRouter>
<Navbar title="textutils" aboutText="About" mode={mode} toggle={toggle}/>
{/* <Navbar/> */}
<Alert alert={alert}/>
<div className="container my-3">
<Routes>
  <Route  exact path ="/about" element={<About mode={mode}/>} />
</Routes>
<Routes>
  <Route  exact path ="/" element={<TextForm showalert={showalert} heading="Try TextUtils - Word counter, Character counter, Remove extra spaces" mode={mode}/>}/>
</Routes>
{/* <TextForm showalert={showalert} heading="Enter your text to analyze below" mode={mode}/> */}
{/* <About/> */}
</div>
</BrowserRouter>
</>
  );
}

export default App;
