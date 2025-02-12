import React from "react";
import Image from "next/image";

const Logo = ({ className, logoImage, logoText }) => {
  return (
    <div className={`w-1/2    ${className}`}>
      <div className="">
        <Image
          src={logoImage}
          alt="Meetus Logo"
          width={744}  
          height={523}
          className=" mb-2"
        />
        <Image
          src={logoText}
          alt="Meetus Logo"
          width={413}  
          height={75}
          className=""
        />

</div>
    </div>
  );
};

export default Logo;