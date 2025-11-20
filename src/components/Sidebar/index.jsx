"use client";
import React, { useState } from "react";

import Image from "next/image";
import { CircleX, Music } from "lucide-react";
import Link from "next/link";
import "./styles.scss";
function index(props) {
  const { setShowNav } = props;
  const [activeNav, setActiveNav] = useState("#library");
  const NavItemsMain = [
    {
      title: "Library",
      route: "#library",
      icon: "",
    },
    {
      title: "Browse",
      route: "#browse",
      icon: "",
    },
    {
      title: "Songs",
      route: "#songs",
      icon: "",
    },
    {
      title: "Albums",
      route: "#albums",
      icon: "",
    },
    {
      title: "Artist",
      route: "#artist",
      icon: "",
    },
    {
      title: "Radio",
      route: "#radio",
      icon: "",
    },
  ];
  return (
    <div id="sidebar-main">
      <div className="wrapper">
        <div className="logo">
          <Image src="/placeholder.png" alt="" height={30} width={100} />
          <div
            className="icon-close"
            onClick={() => {
              setShowNav(false);
            }}
          >
            <CircleX size={16} />
          </div>
        </div>
        <div className="nav-items-wrapper">
          {NavItemsMain?.map((nav) => (
            <div
              className={`nav-item ${
                activeNav == nav?.route ? "active" : null
              }`}
              key={nav?.route}
            >
              <div className="icon">
                <Music size={18} />
              </div>
              <Link
                onClick={() => setActiveNav(nav?.route)}
                href={"#"}
                className="nav-name"
              >
                {nav?.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default index;
