import React from "react";
import "./styles.scss";
import { BadgeCheck, Radio } from "lucide-react";
function index() {
  return (
    <div id="banner-home">
      <div className="home-imge">
        <img src="/white-lies-.jpg" alt="" />
      </div>
      <div className="banner-details">
        <div className="verified">
          <div className="icon">
            <BadgeCheck size={16} />
          </div>
          Verified User
        </div>
        <div className="title">White Lies</div>
        <div className="listeners">
          <div className="ico">
            <Radio size={16} />
          </div>
          135456 listeners for the month
        </div>
      </div>
    </div>
  );
}

export default index;
