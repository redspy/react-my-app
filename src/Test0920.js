import React from "react";


export default class Test0920 extends React.Component {

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

    render() {
        const data = {
            description: [
                /* 1번 */'아빠랑 소을이랑555555555',
                /* 2번 */'선우 다을 태강 새친구 기차 놀이',
                /* 3번 */'소을다을 남매 사랑해',
                /* 4번 */'다을셀카',
                /* 5번 */'소을셀카',
            ],
            imageData: [
                require('./resource/0920/20220920_093228.jpg'),
                require('./resource/0920/img_20220920174954510.jpg'),
                require('./resource/0920/20220920_172326.jpg'),
                require('./resource/0920/20220920_173014.jpg'),
                require('./resource/0920/20220920_173021.jpg'),
            ]
        };

        return (
            <div>
                <div class="titleStyle">{this.props.title}</div>
                <div>
                    {
                        data.imageData.map((path, index) => {
                            // this.imageCard(path, data.description[index]);
                            return (
                                <div className="contentBorder">
                                <img className="imageStyle"
                                    src={path}
                                    />
                                <div className="contentStyle">
                                    {data.description[index]}
                                </div>
                                </div>      
                            );                      
                        })
                    }
                </div>
{/*                 <div>{this.imageCard(data.imageData[0], data.description[0])}</div>
                <div>{this.imageCard(data.imageData[1], data.description[1])}</div>
                <div>{this.imageCard(data.imageData[2], data.description[2])}</div>
                <div>{this.imageCard(data.imageData[3], data.description[3])}</div>
                <div>{this.imageCard(data.imageData[4], data.description[4])}</div>    */}               
            </div>
        );
    }
}
