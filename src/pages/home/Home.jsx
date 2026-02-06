import React, { useEffect, useState } from 'react'
import  {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Library from '../library/Library';
import Feed from '../feed/Feed';
import Trending from '../trending/Trending';
import Favorites from '../favorites/Favorites';
import Player from '../player/Player';
import './home.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Login from '../auth/Login';
function Home() {
  const [token,setToken]=useState("");
  useEffect(()=>{
  const token=window.localStorage.getItem("token");
  const hash=window.location.hash;
  window.location.hash="";
  if(!token && hash){
  const _token=hash.split("&")[0].split("=")[1];
  window.localStorage.setItem("token",_token);
  setToken(_token);
  }else{
    setToken(token);
  }
  },[]);
  return !token ?(
    <Login/>

  ):(
    <Router>
   <div className='main-body'> 
    
         {/* <Sidebar/>
        <Routes>
            <Route path="/" element={<Library/>} />
            <Route path="/feed" element={<Feed/>} />
            <Route path="/trending" element={<Trending/>} />
            <Route path="/favorites" element={<Favorites/>} />
            <Route path="/player" element={<Player/>} />
        </Routes>*/}
        </div>
    </Router>
         
  )
}

export default Home