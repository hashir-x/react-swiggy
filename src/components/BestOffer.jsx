import React from 'react'

function BestOffer() {
  return (
    <> 
        <div className='w-100 d-flex align-items-center justify-content-center' style={{marginTop:"7rem"}}>
            <div className='w-75'>
                <h4 style={{color:"black"}} className='fw-bolder ps-2'>Best offers for you</h4>
                <div className='bestOfferImageContainer' style={{overflowX:"auto",whiteSpace:"nowrap"}}>
                    <img style={{width:"452px",display:"inline-block",height:"auto"}} src="https://swiggy-clone-site.netlify.app/static/media/Banner3.dabf82bb335e37885164.png" alt="image" />
                    <img style={{width:"452px",display:"inline-block",height:"auto"}} src="https://swiggy-clone-site.netlify.app/static/media/Banner1.59e666e290b50fabf4dc.png" alt="image" />
                    <img style={{width:"452px",display:"inline-block",height:"auto"}} src="https://swiggy-clone-site.netlify.app/static/media/Banner2.1070a43a3549ef20ca41.png" alt="image" />
                    <img style={{width:"452px",display:"inline-block",height:"auto"}} src="https://swiggy-clone-site.netlify.app/static/media/Banner4.c6330cf4ab0878879d89.png" alt="image" />
                </div>
            </div>
        </div>
    </>
  )
}

export default BestOffer