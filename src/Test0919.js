import React from "react";


export default class Test0919 extends React.Component {

    imageCard(imagePath, description) {
        return (
            <div className="contentBorder">
            <img className="imageStyle"
                src={imagePath}
                />
            <div className="contentStyle">
                {description}
            </div>
        </div>
        );
    }


    title() {
        return "9월 19일 오늘의 일기";
    }

    render() {
        const data = {
            description: [
                '눈내리는 마을',
                '쉬는 시간 라라라 안녕4',
                '꼬로록 아이 시원해 딸기맛우유',
                '풍년일쌔 랄랄라 전통놀이해요',
            ],
            imageData: [
                require('./resource/0919/20220918_161057.jpg'),
                require('./resource/0919/20220918_154804.jpg'),
                require('./resource/0919/20220918_163740.jpg'),
                require('./resource/0919/img_20220919171623497.jpg'),
            ],
            _1번: '눈내리는 마을',
            _2번: '쉬는 시간 라라라 안녕4',
            _3번: '꼬로록 아이 시원해 딸기맛우유',
            _4번: '풍년일쌔 랄랄라 전통놀이해요',
            _1번이미지: require('./resource/0919/20220918_161057.jpg')
        };

        return (
            <div>
                <div class="titleStyle">{this.title()}</div>
                <div>
                    {
                        this.imageCard(data.imageData[0], data.description[0])
                    }
                </div>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={data.imageData[0]}
                        />
                    <div className="contentStyle">
                        {data._1번}
                    </div>
                </div>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={data.imageData[1]}
                        />
                    <div className="contentStyle">
                        {data._2번}
                    </div>
                </div>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={data.imageData[2]}
                        />                       
                    <div className="contentStyle">
                        {data.description[2]}
                    </div>
                </div>
                <div className="contentBorder">
                    <img className="imageStyle"
                        src={data.imageData[3]}
                        />                       
                    <div className="contentStyle">
                    {data.description[3]}
                    </div>      
                </div>        
            </div>
        );
    }
}
