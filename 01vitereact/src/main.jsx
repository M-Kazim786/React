import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

/* This below element is not correct syntax for react becuase its custom made */

// const reactElement={
//   type:'a',
//   props: {
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to visit google'
// }

const anotherElement=(
  <a  href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser='milo';

const reactElement= React.createElement(
  'a',
  {href: 'https://google.com',
    target: '_blank'
  },
  'Click me to visit Google',
  anotherUser

)

createRoot(document.getElementById('root')).render(
 
   // <App />
    reactElement
)
