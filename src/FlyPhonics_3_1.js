import React from 'react';
import ReactAudioPlayer from 'react-audio-player';


export default class FlyPhonics_3_1 extends React.Component {
    

    makeAudioTrack(number) {
        
        var source = ""
        var playerArray = [];
        for (var i = 1; i <= number; i++) {
            if (i < 10) {
                source = "sound/FlyPhonics/3-1/0" + i + " 트랙 " + i + ".mp3"
            }
            else {
                source = "sound/FlyPhonics/3-1/" + i + " 트랙 " + i + ".mp3"
            }
            
            playerArray.push(
                <div>
                    <p>{i}</p>            
                    <ReactAudioPlayer
                        src={source}
                        controls
                    />
                </div>
            )
        }
        return playerArray;
    }

    test() {
        return (
        <div>asdfkjhlksadjflsakjflaskdjflkj</div>
        )
    }

    render() {
        return (
            <div>
                {this.makeAudioTrack(58)}
            </div>
        );
    };
};

