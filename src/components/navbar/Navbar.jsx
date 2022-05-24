import React from "react";

import Left from "./components/Left";
import Right from "./components/Right";

export default function Navbar() {
  return (
    <nav className=" flex">
      <Left />
      <Right />
    </nav>
  );
}
