import React from "react";
import Logo from "../Logo/logo";
import './style.css'


const Header: React.FC = () => {
    return (
        <div className="HeaderContainer">
            <div className="Header">
                <Logo/>
            </div>
        </div>
    )
}

export default Header;