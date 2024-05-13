import React, { useEffect, useState } from 'react'
import { Squash as Hamburger } from 'hamburger-react'

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [screenWidth,setScreenWidth] = useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
      if(window.innerWidth<1024){
        setOpenMenu(false)
      }
    };
    window.addEventListener('resize', handleResize);
  },[])
  return (
    <header className='bg-BBackground'>
      <div className={`navbar max-lg:py-1 max-lg:px-3 py-10 px-28 items-center flex max-lg:block ${openMenu || (screenWidth > 1024) ? 'menu-open' : ''}`}>
        <div className=' flex'>
          <a className=' font-bold text-3xl text-Borange max-xl:text-2xl max-lg:text-lg max-sm:text-md self-center'>Collers</a>
          <div className='ml-auto lg:hidden'>
          <Hamburger className='text-Borange' color='#78350f' size={15} toggled={openMenu} toggle={setOpenMenu} />
          </div>
        </div>
        <div className={`menu ml-auto inline max-lg:flex max-lg:flex-col max-lg:ml-0 text-lg`}>
          <a href='#' className='navbarElement max-lg:flex max-lg:self-center'>Products</a>
          <a href='#' className='navbarElement max-lg:flex max-lg:self-center'>Solutions</a>
          <a href='#' className='navbarElement max-lg:flex max-lg:self-center'>Pricing</a>
          <a href='#' className='navbarElement max-lg:flex max-lg:self-center'>Resources</a>
          <a href='#' className='navbarElement max-lg:flex max-lg:self-center'>Log In</a>
          <a href='#' className='navbarElement px-5 py-3 border-2 rounded-lg max-lg:flex max-lg:self-center'>Sign up now</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar