import { useState } from 'react'
import Accordion from './component/Accordion'

function App() {
  
  const mystyle = {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems:"center",
    justifyContent: "center",
    flexDirection:"column"
  };

  return (
    <>
      <div style={mystyle}>
      <Accordion/>
      </div>
    </>
  )
}

export default App
