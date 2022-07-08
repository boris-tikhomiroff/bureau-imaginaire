import * as React from "react";

import image from "../img/logo_carre_BI.png";

export default function Logo() {
    return (
        <div className="logo_home" style={{textAlign: 'center'}}>
            <img src={image} alt="Logo" width="400"></img>
        </div>
    )
}