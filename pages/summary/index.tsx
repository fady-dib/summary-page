import React from "react";
import "../summary/summary.css"
import Description from "../../components/Description/Description";

const Summary: React.FC = () => {

    return (
        <div className="container">
            <div className="col-1">
                <img className="div-img" src="/div.png"/>
                <Description></Description>
            </div>
            
            <div className="col-2">

            </div>
        </div>
    )

}

export default Summary;