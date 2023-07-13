import React from "react";

export default function Image() {
    const imageContainerStyle = {
        width: '600%',
        maxWidth: '1000px',
        height: 'auto',
        padding: '19px',
        display: 'center ',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const imageStyle = {
        maxWidth: '90%',
        maxHeight: '100%',
    };

    return (
        <div style={imageContainerStyle}>
            <img src="yo.png" alt="Yo" style={imageStyle} />
        </div>
    );
}