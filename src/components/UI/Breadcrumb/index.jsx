import React from "react";
import "./styles.scss";
import { ChevronRight } from "lucide-react";
function index() {
  return (
    <div id="bread-crumb">
      <div className="name">Artist</div>
      <div className="icon">
        <ChevronRight size={16} />
      </div>
      <div className="name active">Top 2024</div>
    </div>
  );
}

export default index;
