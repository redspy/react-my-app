import React from "react";

export default class Test0919 extends React.Component {


    title() {
        return "9월 19일 오늘의 일기";
    }

    

    render() {
        const user = {
            description: [
                '눈내리는 마을',
                '쉬는 시간 라라라 안녕4',
                '꼬로록 아이 시원해 딸기맛우유',
                '풍년일쌔 랄랄라 전통놀이해요',
            ],
            _1번: '눈내리는 마을',
            _2번: '쉬는 시간 라라라 안녕4',
            _3번: '꼬로록 아이 시원해 딸기맛우유',
            _4번: '풍년일쌔 랄랄라 전통놀이해요'
        };

        return (
            <div>
                <p>{this.title()}</p>
                <br></br>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={require('./resource/0919/20220918_161057.jpg')}
                        />
                    <div className="contentStyle">
                        {user._1번}
                    </div>
                </div>
                <br/><br/>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={require('./resource/0919/20220918_154804.jpg')}
                        />
                    <div className="contentStyle">
                        {user._2번}
                    </div>
                </div>
                <br/><br/>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={require('./resource/0919/20220918_163740.jpg')}
                        />                       
                    <div className="contentStyle">
                        {user.description[2]}
                    </div>
                </div>
                <br/><br/>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={require('./resource/0919/img_20220919171623497.jpg')}
                        />                       
                    <div className="contentStyle">
                    {user.description[3]}
                    </div>      
                </div>
                <br/><br/>          
            </div>
        );
    }
}
