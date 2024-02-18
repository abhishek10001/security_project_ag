import React, {useState} from 'react';
import './Landing.css'
import cbh from '../Landing/Media/chb.jpg'
import damodar from '../Landing/Media/Damodar.jpg'
import tapti from '../Landing/Media/Tapti.avif'
import gangad from './Media/Ganga hostel.jpg'
import mamu from './Media/mamu.webp'
import twenty from './Media/247.jpg'
function LandingPage(){
    return(
    <body>
            
            <main>
        <h1>JNU ONE</h1>
        <h2>Everything you need in one place</h2>

        <button>Sign Up Now</button>

            </main>

        <div className="container">
        <div className="main_content">
            <div className="Heading_content">
                <h1>Hostels : </h1>
                <a href="Hostels/hostel_page.html">See All &rarr;</a>
            </div>
            <div className="contentList">
                <a href="#" id="hostel1" className="boxes">
                    <img src={cbh} alt=""/>
                    <h2>Chandrabhaga Hostel</h2>
                </a>

                <a href="#"  id="hostel2" className="boxes">
                    <img src={damodar} alt=""/>
                    <h2>Damodar Hostel</h2>
                </a>

                <a href="#"  id="hostel3" className="boxes">
                    <img src={tapti} alt=""/>
                    <h2>Tapti Hostel</h2>
                </a>
            </div>
        </div>
        
    </div>


    <div id="Gallery_container">
        <h1>JNU <br/> The Most Beautiful Campus in Delhi</h1>
        <button onClick="window.location.href='Gallery/Gallery.html'">Check out the Gallery</button>
    
    </div>


    <div className="container">
        <div className="main_content">
            <div className="Heading_content">
                <h1>Facilites : </h1>
                <a href="Facilites/facilites_page.html">See All &rarr;</a>
            </div>
            <div className="contentList">
                <a href="#" id="hostel1" className="boxes">
                    <img src={gangad} alt=""/>
                    <h2>Ganga Dhaba</h2>
                </a>

                <a href="#"  id="hostel2" className="boxes">
                    <img src={mamu} alt=""/>
                    <h2>Mamu Dhaba</h2>
                </a>

                <a href="#"  id="hostel3" className="boxes">
                    <img src={twenty} alt=""/>
                    <h2>24/7</h2>
                </a>
            </div>
        </div>
        
    </div>
    
        
        
        </body>
        
    );
}

export default LandingPage;