import React from "react";

import Logo from "./components/Logo";
import Menu from "./components/Menu";
import PlayList from "./components/PlayList";

const Sidebar = () => {
  return (
    <>
      <div className="h-1/4 w-full">
        <Logo />
      </div>
      <div className="h-3/4 w-full">
        <Menu />
        <PlayList />
      </div>
    </>
  );
};

export default Sidebar;
