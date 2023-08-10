
import React, { useState } from "react";
import './../styles/App.css';
import Modal from "./Modal"

const App = () => {

  let [show,setShow]=useState(false);

  return (
    <div  onClick={(e)=>{if(e.target.className!=="showbtn"){console.log(e.target);setShow(false)}}}>
        <Modal show={show} onClose={setShow} >
            <div className="model-overlay">
              <button className="model-close" 
             style={{cursor:"pointer"}} onClick={()=>{setShow(false)}}>Close</button>
              <p className="model-p">This is the content of the modal.</p>
            </div>
        </Modal>
    </div>
  )
}

export default App
