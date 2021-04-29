
import React, { useRef,useEffect, useState,Fragment } from 'react'
import {BrowserRouter as Router , Route ,Switch,Link }  from 'react-router-dom';

const Landing = () => {

     const [btn,setBtn]=useState(false);
     console.log(btn)
    const refWolverine= useRef(null);

    useEffect(()=>{
        refWolverine.current.classList.add("startingImg");
        setTimeout(()=>{
        refWolverine.current.classList.remove("startingImg");
        setBtn(true);
        },1000);
    },[])

    const setLeftImg= ()=>{
        refWolverine.current.classList.add("leftImg");

    }
    const setRightImg= ()=>{
        refWolverine.current.classList.add("rightImg");

    }
    const clearImg = ()=>{
        if(refWolverine.current.classList.contains("leftImg"))
        {
            refWolverine.current.classList.remove("leftImg");

        }
        else if(refWolverine.current.classList.contains("rightImg"))
        {
            refWolverine.current.classList.remove("rightImg");

        } 
        
    }

    
  const displayBtn= btn && (
      <Fragment>
           <div onMouseOut={clearImg} onMouseMove={setLeftImg} className="leftBox">
                <Link to="/signup" className="btn-welcome">Inscription</Link>
            </div>
            <div onMouseOut={clearImg} onMouseMove={setRightImg} className="rightBox">
                <Link to="/login" className="btn-welcome">Connexion</Link>
            </div>
      </Fragment>
  )

  return (
    <main ref={refWolverine} className="welcomePage">
        {displayBtn}
    </main> 
  )
}

export default Landing;
