import React from "react";

import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

export default function MainLayout(props) {
  return (
    <main className="flex h-screen">
      <section className="w-1/4 flex flex-col items-center bg-dark_primary_next">
        <Sidebar />
      </section>
      <section className="w-3/4 bg-dark_primary">
        <Navbar />
        {props.children}
      </section>
    </main>
  );
}
