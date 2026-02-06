import React from 'react'
import './sidebar.css'

import SidebarButton from './SidebarButton'

import { MdFavorite } from "react-icons/md";
import { FaGripfire, FaPlay } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
function Sidebar() {
  return (
    <div className='sidebar-container'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl-ATQ7SO7UTgw4wpXtfmtWcW2752rMitsOw&s"
       alt="profile" className='profile-img' />
      
      <div>
        <SidebarButton title="Feed" to="/feed" icon={MdSpaceDashboard}/>
        <SidebarButton title="Trending" to="/trending" icon={FaGripfire}/>
        <SidebarButton title="Player" to="/player" icon={FaPlay}/>
        <SidebarButton title="Favorites" to="/favorites" icon={MdFavorite}/>
        <SidebarButton title="Library" to="/library" icon={IoLibrary}/>
      </div>
       <SidebarButton title="Sign Out" to="/logout" icon={FaSignOutAlt}/>
    </div>
    
  )
}

export default Sidebar