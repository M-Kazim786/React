import { useState,useCallback,useEffect, useRef} from 'react'

import './App.css'

function App() {
    const [length,setLength]=useState(8);
    const [numAllowed,setNumAllowed]=useState(false);
    const [charAllowed,setCharAllowed]=useState(false);
    const [password,setPassword]=useState(""); 

    const passwordGenerator= useCallback(()=>{
      let pass="";
      let str=
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   
      if (numAllowed) str += "0123456789";
      if(charAllowed) str += "!@#$%^&*_+=";

      for(let i=1; i<=length; i++) {
         let char=Math.floor(Math.random()*str.length +1);

         pass += str.charAt(char);
      }

      setPassword(pass);

    },[length,numAllowed,charAllowed,setPassword])

   useEffect(()=>{
    passwordGenerator();
   },[length,numAllowed,charAllowed,passwordGenerator])

   const passRef=useRef(null);

   const copyPassToClipBoard=useCallback(()=>{
      passRef.current?.select();
      passRef.current?.setSelectionRange(0,15);
      window.navigator.clipboard.writeText(passRef.current?.value.slice(0,15));
   },[password])

  return (
    <>
     <div className="container">
        <h1>Password Generator</h1>
        <div className="password-display">
            <input type="text" id="password" 
            value={password}
            readOnly
            ref={passRef}
            />
            <button id="copy-btn"
            onClick={copyPassToClipBoard}
            >Copy</button>
        </div>
        <div className="options">
            <div className="option">
                <label htmlFor="length">Password Length:</label>
                <input type="number" id="length" 
                min={6}
                max={50} 
                value={length}
                onChange={(e)=>{
                    setLength(e.target.value)
                }}
                />
            </div>
        
            <div className="option">
                <input 
                type="checkbox" 
                defaultChecked={numAllowed}
                id="numbers"
                onChange={()=>{
                  setNumAllowed((prev)=>!prev);
                }}
                 />
                <label htmlFor="numbers">Include Numbers</label>
            </div>
            <div className="option">
                <input 
                type="checkbox"
                 id="symbols" 
                 defaultChecked={charAllowed}
                 onChange={()=>{
                  setCharAllowed((prev)=>!prev)
                 }}
                 />
                <label htmlFor="symbols">Include Symbols</label>
            </div>
        </div>
    </div>
    
    </>
       
  )
}

export default App
