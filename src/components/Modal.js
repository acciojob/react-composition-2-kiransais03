import React from "react";

const Modal = (props)=>{

    return (<>
    <button className="showbtn" style={{backgroundColor:"red",color:"white",cursor:"pointer"}} onClick={()=>{props.onClose(true)}}>Show Modal</button>
    {props.show && props.children}
    </>)
}

export default Modal;