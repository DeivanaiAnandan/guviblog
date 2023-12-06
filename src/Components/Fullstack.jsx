import React from 'react';
import Middlenavbar from './Middlenavbar';
import Card from './Card';

function Fullstack({data}) {
  return (
    <>
<div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <h1>
                   Full Stack Development
                </h1>
                <p>
                Are you a curious geek with an unstoppable urge to develop? Then, your Full Stack Development knack would be sun-glazed with an innovative and informative piece of knowledge that comes from Top industrialists and Appreneurs!
                </p>
                <p>The GUVI Blog’s Full Stack Development category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
            </div>
        </div>
        <Middlenavbar></Middlenavbar>
    </div>
    <div className="container">
      <div className="row">
                {
                    data.map((item,index)=>{
                        if(item.id === 'Fullstack') 
                            return <Card key={index} data={item} /> 

                        return null
                    })
                }
            </div>
    </div>
    </>
  )
}

export default Fullstack