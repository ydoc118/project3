import React, { useState, useEffect } from "react";
import "../../pages/Business"

const QRCode = require("qrcode");

export default function QrGen({currentDisc}){
    const [qrImg, setQrImg] = useState("");
    const [imgStyle, setImgStyle] = useState("none");

    useEffect(()=> {
        var opts = {
            errorCorrectionLevel: 'H',
            type: 'image/jpeg',
            quality: 0.9,
            margin: 1,
            width: 250
        }
    
        QRCode.toDataURL("'" + {currentDisc} + "'", opts, function(err, url){
            if (err) {console.log(err)}
            setQrImg(url)
        });
    },[imgStyle])

    

    function buttonClick(event) {
        event.preventDefault();
        console.log("QR Discout is: " + currentDisc)
        setImgStyle("block");
    }

    return(
        <div>
            <button onClick={buttonClick}>Generate QR Code</button>
            <img style={{display: imgStyle}} src={qrImg} id="qrCode"></img>
        </div>
    )
}