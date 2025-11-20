import React from "react";
import {
  ChevronRight,
  Heart,
  ListMusic,
  Pause,
  Repeat,
  Shuffle,
  StepBack,
  StepForward,
  Volume2,
} from "lucide-react";
import Image from "next/image";
import "./styles.scss";
function index() {
  return (
    <div id="song-playing-bar">
      <div className="wrapper">
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
        </div>
        <div className="song-playback">
          <div className="action-btn">
            <Repeat size={16} />
            <StepBack size={16} />
            <div className="play">
              <Pause size={16} />
            </div>
            <StepForward size={16} />
            <Shuffle size={16} />
          </div>
          <div className="playback">
            <div className="played-time">02:28</div>
            <div className="bar">
              <div className="bar-flled"></div>
            </div>
            <div className="playback-total">03:12</div>
          </div>
        </div>
        <div className="status-action">
          <ListMusic size={20} />
          <Heart size={20} />
          <Volume2 size={20} />
          <div className="bar">
            <div className="bar-flled"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
