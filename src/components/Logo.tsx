import React from "react";
import LogoImage from "../assets/images/logo.png";
import Image from "../Image";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-4 lg:space-x-4">
      <Image src={LogoImage} alt="Rydeu Logo" className="h-8 mr-3" />
    </div>
  );
};

export default Logo;
