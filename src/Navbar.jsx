import './App.css';
import './Navbar.css';
import React from 'react';
import Logo from './Logo';
import './Topsectioncss.css';
import { useState } from 'react';
import Login from './Login';
function Navbar() {
    const [disp,setdisp]= useState("");
    const [displval,setdisplval]= useState(false);
    const [navpadding,setpadding]= useState(0);
    const [navbgcolor,setnavbgcolor]= useState("");
    const navdisp = ()=>{
        if(window.innerWidth>800){
            setdisp("block");
            setpadding(0);
            
        }else{
            setdisp("none");
            setpadding(0);
        }
    }
    const onlogin = (val)=>{   
        setdisplval(val);
    }
    window.addEventListener('resize', navdisp);
    
    const togglefun=()=>{
    if(disp=="" || disp=="none"){
        setdisp("block");
        setpadding(30);
    }
    else{
        setdisp("none");
        setpadding(0);
    }
    }
    window.onscroll = () => {
        if(window.scrollY <= 300) 
        setnavbgcolor("");
        else setnavbgcolor(" #33374a");
      };
    return (
    <>
    <div className="topdiv ">
        <div >
        <div className="navbar" style={{width:disp,backgroundColor:navbgcolor}}>
        </div>
            <div className="flexContainer">
                <div className="flexContainerlogo">
                    <Logo />
                </div>
                <div className="flexContainerlink" style={{padding:navpadding}}>
                    <div className="navlink" style={{display:disp}}><a >Home</a></div>
                    <div className="navlink" style={{display:disp}}><a >AboutUs</a></div>
                    <div className="navlink" style={{display:disp}}><a >ContactUs</a></div>
                    <div className="navlink" style={{display:disp}}><a onClick={() => onlogin(true)}>Login/SignUp</a></div> 
                </div> 
            </div>
        </div>
        <button className="toggle" style={{color:'white',height:'40px'}} onClick={ togglefun}>
                <p style={{position:'relative',top:'-20px'}}>___</p>
                <p style={{position:'relative',top:'-42px'}}>___</p>
                <p style={{position:'relative',top:'-64px'}}>___</p>
        </button> 
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
    
    {displval ? <Login displ= "block"
       crossbtncb={onlogin}
      /> : <span /> }
    </div>      
   
    </>
        
  );
}

export default Navbar;
