import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const [textAreaColor, setTextAreaColor] = useState({
    color: 'black',
    backgroundColor: 'white',
    boxShadow: '0px 10px 20px #888888'
  })
  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light')
      setTextAreaColor({
        color: 'black',
        backgroundColor: 'white',
        boxShadow: '0px 10px 20px #888888'
      })
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode('dark')
      setTextAreaColor({
        color: 'white',
        backgroundColor: '#262629',
        boxShadow: '0px 10px 20px #82f5ff'
      })
      document.body.style.backgroundColor = '#0d0d3e';
    }
}
  return (
    <>
    <Navbar title ='Text Utils' aboutText ='About Text Utils' mode ={mode} toggleMode ={toggleMode}/>
    <div className="container my-3">
    <TextForm heading = 'Analyze the text bellow' mode ={mode} style = {textAreaColor} button1 ='Click to Capitalize' button2 = 'Change to Lowercase' button3 = 'First Letter Caps'/>
    {/* <About/> */}
    </div>
    </>
    
  );
}

export default App;
