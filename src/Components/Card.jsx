import React from 'react'

function Card({data}) {
  return (
    <>
    <div className="col-lg-6 col-xl-4 col-md-6  mt-5 justfy-content-center">
        <div className="card h-100 m-2" >
            <img src={data.image} className="card-img-top" alt="..." />
            <div className="card-body ">
                <h4 className=''>
                    {
                        data.name
                    }
                </h4>
                <p className="card-text">
                    {
                        data.desc
                    }

                </p>
            <a href="..." className='nav-link'>READ MORE</a>
            </div>
            </div>
            </div>
    </>
  )
}

export default Card