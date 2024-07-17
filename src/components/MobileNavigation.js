import React from 'react'
import { MobileNavigation } from '../constants/navigation'
import { NavLink } from 'react-router-dom'

const MobileNavigationcom = () => {
  return (
    <section className='lg:hidden h-14 bg-black bg-opacity-70 backdrop-blur-2xl fixed bottom-0 w-full z-39'>
         <div className='flex items-center justify-between h-full text-neutral-400 '>
            {
                MobileNavigation.map((nav, index) =>{
                    return (
                        <NavLink key={index} 
                        to={nav.href}
                        className={({isActive}) => `px-3 flex-h-full items-center felx-col justify-center ${isActive && "text-white"} `}
                        >
                            <div className='text-2xl'>
                            {nav.icon}
                            </div>
                            <p className='text-sm'>{nav.lable}</p>
                        </NavLink>
                    )
                })
            }
         </div>
    </section>
  )
}

export default MobileNavigationcom
