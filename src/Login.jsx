import React, { useState } from 'react';
import './Login.css';
import Userlogin from './Userlogin';
import LoginBA from './LoginBA';
function Login(props){
    const [divwidth,setWidth] =useState("500px");
    const [btndisp,setbtn]=useState(props.displ);
    const [displval,setdisplval]= useState(false);
    const [loginbusdisp,setBdisplval]=useState(false);
    const [createdisp,setcreateacc]=useState("none");
    const [createbusdisp,setcreatebus]=useState("none");
    const setdivWidth=()=>{
        if(window.innerWidth>500){
            setWidth("500px");
            
        }else{
            setWidth("100%");
        }
    }
    window.addEventListener('resize', setdivWidth);
    const onlogin=(val)=>{
        setbtn("none");
        setdisplval(val);
        //props.crossbtncb(false);
        
    }
    const onloginBA=(val)=>{
        setbtn("none");
        setBdisplval(val);
        
    }
    const crossbtncallback=(val)=>{
        setdisplval(val);
        setBdisplval(val);
        props.crossbtncb(false);
    }
    return (
    <>
    <div className="formdiv" style={{display:btndisp}}>
         <h3><span style={{color:'pink'}}><b>Helping</b><span style={{color:'white'}}>hand</span></span> </h3>
         <button className="crossbtn" onClick={()=>{
            props.crossbtncb(false);
         }}><span style={{fontSize:'25px'}}>&#10008;</span></button>
         <button  className="forminput" onClick={() => onlogin(true)}> Login </button><br/>
         <button  className="forminput" onClick={() => onloginBA(true)}>Login BusinessAcc..</button><br/>
         <button  className="forminput">Create Account</button><br/>
         <button  className="forminput">Create BusinessAcc</button>
    </div>
    {displval ? <Userlogin displ= "block" crossbtncb={crossbtncallback} /> : <span /> }
    {loginbusdisp ? <LoginBA displ= "block" crossbtncb={crossbtncallback} /> : <span /> }
    </>
       
    );
}
export default Login;