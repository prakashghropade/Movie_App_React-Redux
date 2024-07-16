import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { IoSearch } from "react-icons/io5";
import { navigation } from '../constants/navigation';


const Header = () => {

    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
      if(searchInput){
      navigate(`/search?q=${searchInput}`)
      }
    }, [searchInput]);


    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75 z-10'>
      <div className='container mx-auto px-4 flex items-center h-full'>
         <Link to="/">
            <img src={logo} alt='logo' width={120}/>
         </Link>

         <nav className=' hidden lg:flex items-center gap-1 ml-5'>
            {
                navigation.map((nav, index) => {
                    return (
                         <div key={index}>
                            <NavLink  to={nav.href} className={ ({isActive}) => `px-2 hover:text-neutral-100 ${isActive} && "text-neutral-100"}`}>
                               {nav.lable}
                            </NavLink>
                         </div>
                    )
                })
            } 
         </nav>

         <div className='ml-auto flex items-center gap-5'>
            <form className='flex items-center gap-2' onSubmit={
                handleSubmit
            }>
                <input
                type='text'
                placeholder='Search here...'
                className='bg-transparent px-4 py-1 outline-none border-none hidden lg:block'
                onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className='text-2xl text-white'>
                <IoSearch />   
                </button>
            </form>
            <div className='w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all'>
                <img src={userIcon} width='w-full h-full '/>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Header
