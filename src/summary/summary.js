import React from 'react';
import './summary.scss'

const Summary = ()=>{


    return(
        <section className='container'>
        <div className='content'>
            <h1 className='title'>
                Hi, I am Aditya Rana
            </h1>
            <p className='description'>
               <i> I am a full stack engineer with over 2 years of experience in Reactjs and Node. Reach out to me for further opportunities. </i>
            </p>
            <a className='contactBtn' href='mailto:aditya.rana.se@gmail.com' >Contact Me </a>
        </div>
        <img className='heroImg' src={'../../assets/hero/myimg.jpg'} />
        <div className='topblur'/>
        <div className='bottomblur'/>


        </section>
    )
};

export default Summary;