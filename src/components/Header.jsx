import React from 'react'
import './header.css'

function Header() {
  return (
    <>
       <header className='shadow container-fluid d-flex w-100 shadow justify-content-evenly align-items-center' style={{height:"5rem",position:"fixed",top:'0',minWidth:'1200px',zIndex:"1",backgroundColor:"white"}}>
        {/* left side */}
            <div style={{height:"5rem",minWidth:'460px'}} className='d-flex align-items-center gap-4 ps-4'>
                <img className='img-fluid swiggy-logo' style={{height:'3.5rem'}} src="https://www.theknowhowlib.com/wp-content/uploads/2020/05/Swiggy-2.png" alt="" />
                <div className='d-flex gap-2 align-items-center swiggy-location'>
                    <a className='place' style={{fontSize:"14px",fontWeight:"bold",textUnderlineOffset:'.5rem',textDecorationThickness:'0.1rem'}} href="">Kakkanad</a>
                    <span className='location' style={{fontSize:"14px",color:"rgb(104, 107, 120)"}}>C8FW+F7C, Marine Drive, Kochi....</span>
                    <i style={{color:"rgb(231, 136, 56)"}} className='fa-solid fa-angle-down'></i>
                </div>
            </div>
            {/* right side */}
            <div style={{gap:"3.8rem",minWidth:"620px",marginLeft:"10rem"}} className='d-flex justify-content-between align-items-center p-3'>
                <div className='nav_link'>
                    <i className='fa-solid fa-magnifying-glass me-2 nav_icon'></i>
                    <span className='nav_text'>Search</span>
                </div>
                <div className='nav_link'>
                    <i class="fa-light fa-percent me-2 nav_icon"></i>
                    <span className='nav_text'>Offers</span>
                    <sup style={{color:'rgb(231, 136, 56)'}}>New</sup>
                </div>
                <div className='nav_link'>
                    <i className='fa-solid fa-light fa-bowl-food me-2 nav_icon'></i>
                    <span className='nav_text'>Help</span>
                </div>
                <div className='nav_link'>
                    <i className='fa-regular fa-user me-2 nav_icon'></i>
                    <span className='nav_text'>Profile</span>
                </div>
                <div className='nav_link'>
                    <i class="fa-solid fa-cart-shopping me-2 nav_icon"></i>
                    <span className='nav_text'>Cart</span>
                </div>
            </div>
       </header>
    </>
  )
}

export default Header