import React from 'react'

function Online() {
  return (
    <>
        <div className='w-100 d-flex align-items-center justify-content-center' style={{marginTop:"2rem"}}>
            <div className='w-75'>
                <h4 className='fw-bolder ps-2' style={{color:'black'}}>Restaurants with online food delivery in Kochi</h4>
                <div style={{minWidth:"1200px"}} className='options'>
                    <button style={{border:"1px rgba(2, 6, 12, 0.1) solid",padding:"5px 10px",borderRadius:"2rem",backgroundColor:"white",marginRight:".5rem"}}>Filter<i class="fa-solid fa-sliders ms-2"></i></button>
                    <button style={{border:"1px rgba(2, 6, 12, 0.1) solid",padding:"5px 10px",borderRadius:"2rem",backgroundColor:"white",marginRight:"0.5rem"}}>Sort By<i class="fa-solid fa-angle-down ms-2"></i></button>
                    <button style={{border:"1px rgba(2, 6, 12, 0.1) solid",padding:"5px 10px",borderRadius:"2rem",backgroundColor:"white",marginRight:"0.5rem"}}>Fast Delivery</button>
                    <button style={{border:"1px rgba(2, 6, 12, 0.1) solid",padding:"5px 10px",borderRadius:"2rem",backgroundColor:"white",marginRight:"0.5rem"}}>Ratings 4.0+</button>
                    <button style={{border:"1px rgba(2, 6, 12, 0.1) solid",padding:"5px 10px",borderRadius:"2rem",backgroundColor:"white",marginRight:"0.5rem"}}>Pure Veg</button>
                    <button style={{border:"1px rgba(2, 6, 12, 0.1) solid",padding:"5px 10px",borderRadius:"2rem",backgroundColor:"white",marginRight:"0.5rem"}}>Offers</button>
                    <button style={{border:"1px rgba(2, 6, 12, 0.1) solid",padding:"5px 10px",borderRadius:"2rem",backgroundColor:"white",marginRight:"0.5rem"}}>Rs. 300-Rs. 600</button>
                    <button style={{border:"1px rgba(2, 6, 12, 0.1) solid",padding:"5px 10px",borderRadius:"2rem",backgroundColor:"white",marginRight:"0.5rem"}}>Less than Rs. 300</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Online