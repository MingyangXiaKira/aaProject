import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/" className="flex items-center">
            <img src="src/assets/logo.png" alt="logo" className="h-20 mr-2" />
            <span className="text-xl font-bold">University Recommendation</span>
        </Link>
    );
};

export default Logo;
