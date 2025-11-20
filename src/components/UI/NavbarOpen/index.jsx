import React from "react";
import "./styles.scss";
import { Menu } from "lucide-react";
function index(props) {
  const { setShowNav } = props;
  return (
    <div
      id="navbar-open"
      onClick={() => {
        setShowNav(true);
      }}
    >
      <Menu size={26} />
    </div>
  );
}

export default index;
