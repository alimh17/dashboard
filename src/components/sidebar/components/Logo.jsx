import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center items-center">
      <img src={process.env.PUBLIC_URL + "/img/logo.png"} />
    </div>
  );
};

export default Logo;
