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
        {[1, 2, 4, 4, 5, 6]?.map((song, i) => (
          <div className="songs-playlist mt-4" key={"song" + i}>
            <div className="songs-item">
              <div className="song-detail">
                <div className="song-avatar">
                  <Image src={"/placeholder.png"} height={20} width={20} />
                </div>
                <div className="song-title">
                  <div className="title">Getting Even</div>
                  <div className="artist">White Lies</div>
                </div>
              </div>
              <div className="duration">2:02</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default index;
