import React from 'react'

function Ads() {
  return (
    <>
        <div className='w-100 d-flex justify-content-center align-items-center' style={{backgroundColor:"rgb(241, 240, 244)"}}>
            <div className='w-75 d-flex justify-content-center align-items-center mt-3 mb-3'>
                <h2 style={{color:"rgb(65, 68, 74)"}} className='fw-bolder'>For better experience,download <br /> the Swiggy app now</h2>
                <img style={{height:"60px",margin:"0px 30px 0px 90px"}} className='img-fluid' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png" alt="" />
                <img style={{height:"60px"}} className='img-fluid' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="" />
            </div>
        </div>
    </>
  )
}

export default Ads