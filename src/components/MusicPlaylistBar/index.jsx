"use client";
import React, { useState } from "react";

import Image from "next/image";
import {
  BookOpen,
  ChevronLeft,
  CircleX,
  Grid3x3,
  Heart,
  LogOut,
  Mic,
  Music,
  Music2,
  Play,
  Radio,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import "./styles.scss";
function index() {
  const [activeNav, setActiveNav] = useState("#library");
  const NavItemsMain = [
    {
      title: "Library",
      route: "#library",
      icon: <Music size={18} />,
    },
    {
      title: "Browse",
      route: "#browse",
      icon: <Grid3x3 size={18} />,
    },
    {
      title: "Songs",
      route: "#songs",
      icon: <Music2 size={16} />,
    },
    {
      title: "Albums",
      route: "#albums",
      icon: <BookOpen size={16} />,
    },
    {
      title: "Artist",
      route: "#artist",
      icon: <Sparkles size={16} />,
    },
    {
      title: "Radio",
      route: "#radio",
      icon: <Radio size={16} />,
    },
  ];
  const NavItemsMusic = [
    {
      title: "Tracks",
      route: "#tracks",
      icon: <Play size={16} />,
    },
    {
      title: "Favorite",
      route: "#favorite",
      icon: <Heart size={16} />,
    },
    {
      title: "Podcast",
      route: "#Podcast",
      icon: <Mic size={16} />,
    },
  ];
  return (
    <div id="music-playlist-bar">
      <div className="wrapper">
        <div className="song">
          <Image
            className="song-img"
            src="/placeholder.png"
            alt=""
            height={30}
            width={100}
          />
        </div>
        <div className="song-info">
          <div className="type">CURATED ALBUM</div>
          <div className="name">Big TV</div>
          <div className="info">
            Enjoy vivd emotions with this stunning music album. Each track is a
            story.
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
