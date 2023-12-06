import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Middlenavbar from './Middlenavbar'

function Career({data}) {
  return (
    <>
    
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <img src="https://www.guvi.in/blog/wp-content/uploads/2022/04/July-last-week-offer-cover-2048x453.webp"
            alt=""/>
            </div>
        </div>
        <Middlenavbar></Middlenavbar>
    </div>
    <div className="container">
      <div className="row">
                {
                    data.map((item,index)=>{
                        if(item.id === 'Career') 
                            return <Card key={index} data={item} /> 

                        return null
                    })
                }
            </div>
    </div>
    </>
  )
}

export default Career