import React from 'react'
import "./Navbar.css"


const Navbar = () => {
    return (
        <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
            <div className='search'>
                <input type='text' placeholder='seacrh...' />
            <i />
            </div>
           <div className='nav-logo'>
               <h2 className='logo-text'>L O G O</h2>
           </div>
           <div className='icons'>
               <img className='icon-item' src='https://static.thenounproject.com/png/6478-200.png' alt='' height='30px'/>
               <img className='icon-item' src='https://i.pinimg.com/originals/74/ab/48/74ab48240e34df5e05a398e997a42b0e.png' alt='' height='30px'/>
           </div>
        </div>
    )
}

export default Navbar
