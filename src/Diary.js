import React from "react";


export default class Diary extends React.Component {
    render() {
        return (
            <div>
                <div class="titleStyle">{this.props.title}</div>
                <div>
                    {

                        this.props.image.map((path, index) => {
                            return (
                                <div className="contentBorder">
                                <img className="imageStyle"
                                    src={path}
                                    />
                                <div className="contentStyle">
                                    {this.props.description[index]}
                                </div>
                                </div>      
                            );                      
                        })
                    }
                </div>             
            </div>
        );
    }
}
