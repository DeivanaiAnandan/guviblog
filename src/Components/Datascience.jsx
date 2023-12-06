import React from 'react'
import Middlenavbar from './Middlenavbar'
import Card from './Card'

function Datascience({data}) {
  return (
    <><div className="container-fluid">
        <div className="row">
            <div className="col-lg-12">
                <h1>
                    Data Science
                </h1>
                <p>
                One of the most propelling careers on the planet today, Data Science is a vast arena of diverse technologies and techniques. Are you ready to step into the world of Data? Then you probably should not miss this corner of articles that is an assorted curation out of tedious research & exploration.
                </p>
                <p>The GUVI Blog’s Data Science category is here to help you steer through a lot of opinions that float on the internet. High-Quality content curated by experts!</p>
            </div>
        </div>
        <Middlenavbar></Middlenavbar>
    </div>
    <div className="container">
      <div className="row">
                {
                    data.map((item,index)=>{
                        if(item.id === 'Datascience') 
                            return <Card key={index} data={item} /> 

                        return null
                    })
                }
            </div>
    </div>
    </>
  )
}

export default Datascience