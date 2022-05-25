import React from "react"

export default class Test0525 extends React.Component {
    render () {
        return (
            <div>
            <p>5월 25일 오늘의 일기</p>
            <br></br>
            <img src={require('./resource/0525/20220525_090930.jpg')} width="530" height="400" />
            <div> 우쿠렐레날 </div>
            <img src={require('./resource/0525/20220525_170452.jpg')} width="530" height="400" />
            <div> 다을이 놀이기구 </div>
            <img src={require('./resource/0525/20220525_193301.jpg')} width="530" height="400" />
            <div> 모두 다 식사시간 </div>
            
        </div>);
    }
}
