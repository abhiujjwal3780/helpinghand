import React, { useState } from 'react';
import './Login.css';
import * as show from './Login';
function LoginBA(props){
    const [dispbtn,setbtnval] =useState(props.displ);
    const [divwidth,setWidth] =useState("500px");
    const onsubmit =(event)=>{
        event.preventDefault();
        alert("form submited");
        props.crossbtncb(false);
    }
    const setdivWidth=()=>{
        if(window.innerWidth>500){
            setWidth("500px");
            
        }else{
            setWidth("100%");
        }
    }
    window.addEventListener('resize', setdivWidth);
    //window.addEventListener('afterLoad', setdivWidth);
    return (
        <div className="formdiv" style={{display:dispbtn}}>
            <h3><span style={{color:'pink'}} ><b>Login</b></span></h3>
            <button className="crossbtn"  onClick={()=>{
            props.crossbtncb(false);
            }}><span style={{fontSize:'25px'}}>&#10008;</span></button>
            <form onSubmit={onsubmit}>
                <input
                type="email"
                placeholder="enter your email"
                name="email"
                className="forminput"
                /><br/>
                <input
                type="password"
                name="password"
                placeholder="enter your password"
                className="forminput"
                /><br/>
                <button type="submit" className="forminput" name="submitbtn" style={{backgroundColor:'pink'}}>Submit</button>
            </form>
        </div>
    );
}
export default LoginBA;