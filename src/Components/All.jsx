import React from 'react'
import Middlenavbar from './Middlenavbar';
import Card from './Card';
import Blogimage from '../assets/Blog.webp'

function All({data}) {
  return (
    <>
        <div className="container-fluid">
        
        <div className="row">
          <img
              style={{width:'100%',boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.5)"}}
               className="responsive-image d-sm-none d-md-block"
               
                src={Blogimage}
                alt=""
              />
          
        <Middlenavbar></Middlenavbar>
        
        </div>
        <div className="container ">
        <div className="row">
        {
                      data.map((item,index)=>{
                         
                              return <Card key={index} data={item} />
   
                      })
                  }
        </div>
      </div>
      </div>
    </>
  )
}

export default All