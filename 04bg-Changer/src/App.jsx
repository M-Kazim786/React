import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("cyan")
  

  return (
    <>
{/* Single full-screen container that handles background color and button grid */}
<div className="w-full h-screen flex justify-center items-center duration-200" style={{ backgroundColor: color }}>
        <div className="grid grid-cols-3 gap-4 md:grid-cols-5 p-2">
          <button 
          onClick={()=>{
            setColor("blue");
          }}
          type="button" className="focus:outline-black text-white text-sm py-1 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400">
            Click me
          </button>
          <button
           onClick={()=>{
            setColor("lavender");
           }}
          type="button" className="focus:outline-black text-white text-sm py-1 px-4 border-b-4 border-gray-600 bg-gray-500 hover:bg-gray-400">
            Click me
          </button>
          <button 
           onClick={()=>{
            setColor("green");
           }}
          type="button" className="focus:outline-black text-white text-sm py-1 px-4 border-b-4 border-green-600 bg-green-500 hover:bg-green-400">
            Click me
          </button>
          <button
           onClick={()=>{
            setColor("red");
           }}
          type="button" className="focus:outline-black text-white text-sm py-1 px-4 border-b-4 border-red-600 bg-red-500 hover:bg-red-400">
            Click me
          </button>
          <button 
           onClick={()=>{
            setColor("yellow");
           }}
          type="button" className="focus:outline-black text-white text-sm py-1 px-4 border-b-4 border-yellow-600 bg-yellow-500 hover:bg-yellow-400">
            Click me
          </button>
        </div>
      </div>
  
    </>
  )
}

export default App
