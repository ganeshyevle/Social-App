import React from 'react'
import Topbar from '../../components/topbrar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Rightbar from '../../components/rightbar/Rightbar'
import Feed from '../../components/feed/feed'

import "./home.css"


export default function Home() {
  return (
    <div>
      <Topbar/>
      <div className="homeContainer">
      <Sidebar/>
      <Feed/> 
      <Rightbar/>
      </div>
     
    </div>
  )
}
