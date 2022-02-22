import React from "react";

const date = new Date().getFullYear();
const copyright = "Copyright © " + date;

function Footer(){
    return(
        <footer>{copyright}</footer>
    )
}

export default Footer;