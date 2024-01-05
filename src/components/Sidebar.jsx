import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si'
import { MdOutlineCancel } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { links } from '../data/dumm'


const Sidebar = () => {

  const activeMenu = true;

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2 text-black'
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:bg-light-gray m-2'

  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
          <div className='flex justify-between items-center'>
            <Link to="/" onClick={() => {}} className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
              <SiShopware /> <span> Shoppy </span>
            </Link>
            <TooltipComponent content="Menu">
              <button type='button'
              onClick={() => {}} className='text-xl rounded-full p-3 hover:bg-gray-500 mt-4 block md:hidden '>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div>
            <div className='mt-10'>
              { links.map((item) => (
                <div key={item.title}>
                  <p className='text-gray-400 m-3 mt-4 uppercase'>
                    {item.title}
                  </p>
                  {item.links.map((link, index) =>(
                    <NavLink 
                      key={index} 
                      to={`/${link.name}`} 
                      onClick={() => {}} 
                      isActive={(match, location) => {
                        if (!match) {
                          return false;
                        }
                        return true;
                      }}
                      className={({ isActive }) => (
                        isActive ? `${activeLink} hover:bg-light-gray` : `${normalLink} hover:bg-light-gray`
                      )}
                    >
                    {link.icon}
                    <span className="capitalize">
                      {link.name}
                    </span>
                    </NavLink>
                ))}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar