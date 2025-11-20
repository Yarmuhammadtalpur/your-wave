"use client";
import React, { useState } from "react";

import Image from "next/image";

import Link from "next/link";
import "./styles.scss";
import { Dot, Heart } from "lucide-react";
function index() {
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

        <div className="like-info mt-4">
          <div className="icon-heart">
            <Heart size={14} />
          </div>
          <div className="likes">456k Likes</div>
          <div className="icon">
            <Dot size={14} />
          </div>
          <div className="songs-total">22 songs</div>
        </div>
      </div>
    </div>
  );
}

export default index;
