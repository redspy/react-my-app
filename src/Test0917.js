import React from "react";

export default class Test0917 extends React.Component {
    render() {
        return (
            <div>
                <p>9월 17일 오늘의 일기</p>
                <br></br>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={require('./resource/0917/20220917_153501.jpg')}

                        />
                    <div className="contentStyle">
                        {/*1번*/}싫어 싫어
                    </div>
                </div>
                <br/><br/>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={require('./resource/0917/20220917_153611.jpg')}
                        />
                    <div className="contentStyle">
                        {/*2번*/}다을셀카통나무
                    </div>
                </div>
                <br/><br/>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={require('./resource/0917/20220917_154011.jpg')}
                        />
                    <div className="contentStyle">
                        {/*3번*/}소을셀카안녕
                    </div>
                </div>
                <br/><br/>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={require('./resource/0917/20220917_154023.jpg')}
                        />
                    <div className="contentStyle">
                        {/*4번*/}정글숲을 지나모가나올까
                    </div>      
                </div>
                <br/><br/>          
            </div>
        );
    }
}
