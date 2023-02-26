import React from 'react';
// images/jukjun/1 (x).png

const PPT_COUNT = 39

function showImage() {

    var path = ""
    var imgArray = [];
    for (var i = 1; i <= PPT_COUNT; i++) {
        path = "images/jukjun/1 (" + i + ").png"

        imgArray.push(
            <img className="imageStyle" src={path} onClick={() => this.openPopup(path)}/>
        )
    }
    return imgArray;
}

function JukjunES() {

    return (
        <div>{showImage()}</div>
    );
}

export default JukjunES;