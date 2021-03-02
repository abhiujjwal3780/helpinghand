import React from 'react';
import './Navbar.css';
function Logo(){
    return(
        <>
        <div className="navlogo ">
         <span style={{color:'white',fontFamily:'Fantasy ',fontSize:'19px'}}>H</span>
         <span  style={{color:'white',fontSize:'17px'}}>h</span>
         <span style={{position:'fixed',left:'70px',color:'pink'}}><b>Helping</b><span>hand</span></span> 

        </div>
        </>
    );
}
export default Logo;