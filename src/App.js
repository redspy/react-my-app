import './App.css';
import 'react-pro-sidebar/dist/css/styles.css'
import {
    FaHome,
    FaCameraRetro,
    FaMusic,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart
} from "react-icons/fa";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Diary from './Diary'
import dailyData from "./DiaryDefine.js"
import OnePageTest from './OnePageTest';
import React, {useState, useEffect, useRef} from 'react';
import CameraPage from './CameraPage.js'
import FlyPhonics_3_1 from './FlyPhonics_3_1.js'
import FlyPhonics_3_2 from './FlyPhonics_3_2.js'
import JukjunES from './JukjunES.js'

function App() {
    var routelist = Object.keys(dailyData);

    var titleList = {};

    var i = 0;
    for(var key in dailyData)
    {
        titleList[i] = dailyData[key].title;
        i++;
    }
    const [videoFilePath, setVideoFilePath] = useState(null);


    const webcamCallback = () => {

    }

    const handleVideoUpload = (event) => {
        setVideoFilePath(URL.createObjectURL(event.target.files[0]));
    };


    

    return (
        <div className="App">
            <div class="myHeader">
                <div class="titleText">
                    <p>소을이♥다을이의 일기</p>
                </div>   
                    <div style={{
                        width:80,
                        position: 'relative',
                    }}>
                        <a href="/"> 
                            <FaHome className='faHomeStyle' />
                        </a> 
                        
                        <a href="camera"> 
                            <FaCameraRetro className='faCameraStyle' />
                        </a>

                        <a href="">
                            <FaMusic className='faMusicStyle'/>
                        </a>
                    </div>

            </div>
            <body>
                <div>
                    <p>English Tree</p>
                    <a href="FlyPhonics_3_1">
                        <button class="dateSelectButton">3-1</button>
                    </a>
                    <a href="FlyPhonics_3_2">
                        <button class="dateSelectButton">3-2</button>
                    </a>
                </div>
                <div>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Home data={dailyData}></Home>}></Route>
                            {                                
                                routelist.map((routeString, index) =>{
                                    return (
                                        <Route path={routeString} element={<Diary title={dailyData[routeString].title} image={dailyData[routeString].imageData} description={dailyData[routeString].description}></Diary>}></Route>
                                    );
                                })
                            }
                            <Route path="0" element={<OnePageTest></OnePageTest>}></Route> 
                            <Route path="camera" element={<CameraPage></CameraPage>}></Route> 
                            <Route path="FlyPhonics_3_1" element={<FlyPhonics_3_1></FlyPhonics_3_1>}></Route>
                            <Route path="FlyPhonics_3_2" element={<FlyPhonics_3_2></FlyPhonics_3_2>}></Route>
                            <Route path="jukjun" element={<JukjunES></JukjunES>}></Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </body>
        </div>
    );
}

export default App;
