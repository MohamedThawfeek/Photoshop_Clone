import React from "react";
import * as htmltoimage from "html-to-image";
import * as downloadjs from "downloadjs";
import style from "./Download.module.css";

const Download = () => {
  const download = () => {
    htmltoimage.toPng(document.getElementById("img")).then((data) => {
      downloadjs(data, `${Date.now()}.png`);
    });
  };
  return (
    <div>
      <button onClick={download} className={style.dwn}>
        Download
      </button>
    </div>
  );
};

export default Download;
