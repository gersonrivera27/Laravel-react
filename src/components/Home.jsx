import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap"
import video from "../images/video.mp4";
import "../stylesheets/home.css"



const Home = () => {
    return <div>

<video class="video" autoPlay playsInline muted loop>
        <source src={video}/>
        </video>
        <h1>Training with us</h1>
        <div className='header'>
        <ul > <Link className="btn btn-dark" to="/create">Join Us</Link></ul>
            
        </div>

        <Outlet/>





    </div>
}

export default Home;