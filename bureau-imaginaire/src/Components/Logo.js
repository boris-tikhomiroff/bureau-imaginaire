import * as React from "react";

import image from "../img/logo_carre_BI.png";

export default function Logo() {
    return (
        <div className="logo" style={{textAlign: 'center'}}>
            <img src={image} alt="Logo" width="200"></img>
        </div>
    )
}