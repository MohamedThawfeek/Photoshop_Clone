import React from "react";
import style from "./Slider.module.css";

const Slider = ({ min, max, value, handelChange }) => {
  return (
    <div className={style.container}>
      <input
        type="range"
        className={style.slider}
        min={min}
        max={max}
        value={value}
        onChange={handelChange}
      />
    </div>
  );
};

export default Slider;
