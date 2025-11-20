import React from "react";
import "./styles.scss";
import { AudioLines, ChevronRight, Search } from "lucide-react";
function index() {
  return (
    <div id="search-music">
      <div className="wrapper">
        <div className="search-field">
          <div className="icon">
            <Search size={20} />
          </div>
          <input
            className="search-input"
            type="text"
            placeholder="What do you want to listen to?"
          />
        </div>
        <div className="search-btn">
          <div className="icon">
            <AudioLines size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
