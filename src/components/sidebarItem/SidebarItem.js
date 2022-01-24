import React from "react";
import style from "./SidebarItem.module.css";

const SidebarItem = ({ name, active, handelClick }) => {
  return (
    <button
      className={`${style.container} ${active ? style.active : null}`}
      onClick={handelClick}
    >
      {name}
    </button>
  );
};

export default SidebarItem;
