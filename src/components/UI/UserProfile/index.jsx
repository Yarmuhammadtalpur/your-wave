import React from "react";
import { Bell, ChevronRight, LayoutGrid, Settings2 } from "lucide-react";
import "./styles.scss";
import Image from "next/image";
function index() {
  return (
    <div id="user-profile">
      <div className="wrapper">
        <div className="updates-list">
          <LayoutGrid size={20} />
          <Settings2 size={20} />
          <Bell size={20} />
        </div>
        <div className="profile">
          <div className="img-wrapper">
            <Image
              className="avatar"
              src={"/placeholder.png"}
              height={30}
              width={30}
            />
          </div>
          <div className="user-name">Sam Y.</div>
        </div>
      </div>
    </div>
  );
}

export default index;
