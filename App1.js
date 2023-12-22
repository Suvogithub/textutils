import React, { useState } from 'react';
import './App.css';
import Navbar from './components/_1_Navbar';  //lec-6
import TextForm from './components/_2_TextForm';
import Alert from './components/_4_Alert';
import About from './components/_3_About';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [inform,setInform]=useState('Enable Dark mode');
  const [mode, setMode]=useState('light');
  //lec-13(alert part using useState)
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const toggleModeHandle=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#042743";
      setInform('Enable light mode');
      //l=13
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      setInform('Enable dark mode');
      //l=13
      showAlert('Light mode has been enabled','success');    
    }
  }
  return(
 <>
 <BrowserRouter>
    <Navbar title="TextUtils2" aboutText="Abouts" mode={mode} toggleMode={toggleModeHandle} inform={inform}/> 
    <Alert alert={alert}/>
    <Routes>
    
      {/* <div className="container my-3"> */}
      <Route path="/" element={<TextForm showAlert={showAlert} heading="enter the text to analyze" mode={mode}/>}/>
      
      {/* </div> */}
      <Route path="/about" element={<About/>}/>
    </Routes>
</BrowserRouter>
 </>
  );
}

export default App; 