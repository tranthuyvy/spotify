import React from 'react'
import { RiHomeSmileFill } from "react-icons/ri";
import { MdOutlineLibraryMusic } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import Players from './Players';
import '../styles/Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='sidebar_container'>
      <div className='top_links'>
        <div className='logo'>
          <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png' alt='Spotify' />
        </div>
        <ul>
          <li>
            <RiHomeSmileFill />
            <span>Home</span>
          </li>
          <li>
            <IoMdSearch />
            <span>Search</span>
          </li>
          <li>
            <MdOutlineLibraryMusic />
            <span>Your Lyrik</span>
          </li>
        </ul>
      </div>
      <Players />
    </div>
  )
}

export default Sidebar
