"use client";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
import "./styles.scss";
export default function Home() {
  const [showNav, setShowNav] = useState(false);

  return (
    <main id="home-page">
      <div className="row gy-0 gx-1 ">
        <div className="col-12 col-md-2">
          <div className={`${showNav ? "show-nav" : "hide-nav"}`}>
            <Sidebar setShowNav={setShowNav} />
          </div>
        </div>
        <div className="col-12 col-md-8">
          <button onClick={() => setShowNav(!showNav)}>button test</button>

          <div className="main-content" style={{ height: "200vh" }}>
            main
          </div>
        </div>
        <div className="col-12 col-md-2">muic info</div>
      </div>
    </main>
  );
}
