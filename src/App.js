import './App.css';
import 'react-pro-sidebar/dist/css/styles.css'
import {
    FaHome,
    FaCameraRetro,
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
import React, {useState} from 'react';
import ReactPlayer from 'react-player/lazy';
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
                        <FaHome style={{
                            width: 30,
                            height: 30,
                            padding: 15,
                            paddingLeft: 30,
                            color: 'white',
                            display: 'flex',
                            position: 'absolute',
                        }} />
                        </a> 
                        <FaCameraRetro 
                        style={{
                            width: 30,
                            height: 30,
                            padding: 15,
                            paddingLeft: 100,
                            color: 'white',
                            display: 'flex',
                            position: 'absolute',
                        }} />
                        
                    </div>

            </div>
            <body>
                <div>
{/*                     <div className='player-wrapper'>
                    <input type="file" onChange={handleVideoUpload} />
                    <ReactPlayer url={videoFilePath} width="300" height="500" controls={true} />
                    </div> */}
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
                        </Routes>
                    </BrowserRouter>
                </div>
            </body>
        </div>
    );
}

export default App;
