import React, {useState} from 'react';
import ReactPlayer from 'react-player/lazy';
import './OnePageTest.css';
/* import video1 from './resource/20220921_174259.mp4' */


function OnePageTest() {
/*     const [videoFilePath, setVideoFilePath] = useState(null);


    const handleVideoUpload = (event) => {
        setVideoFilePath(URL.createObjectURL('./resource/20220921_174259.mp4'));
    };

    setVideoFilePath(URL.createObjectURL('./resource/20220921_174259.mp4')); */

    return (
        
        <div >
{/*             <video muted autoPlay loop>
                <source src="{video1}" type="video/mp4" width="750" height="500" controls/>
            </video> */}
<video
  src="/videos/20220921_174259.mp4"
  width="390px"
  height="600px"

  controls
  autoplay
  loop
></video>
        </div>
        
    );
};

export default OnePageTest;

/* export default class OnePageTest extends React.Component {
    constructor() {
        const [videoFilePath, setVideoFilePath] = useState(null);


        const handleVideoUpload = (event) => {
            setVideoFilePath(URL.createObjectURL('./resource/20220921_174259.mp4'));
        };
    }

    render() {
        return (
            <div class="AllPage">
                <Video muted autoPlay loop>
                    <source src="./resource/20220921_174259.mp4" type="video/mp4" />
                </Video>

            </div>
            
        );
    }
} */