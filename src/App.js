import React, { useState } from "react";
import style from "./App.module.css";
import SidebarItem from "./components/sidebarItem/SidebarItem";
import Slider from "./components/slider/Slider";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import Download from "./components/Download/Download";
// import * as htmltoimage from "html-to-image";
// import * as Download from "downloadjs";

const Default = [
  {
    name: "Brightness",
    property: "brightness",
    value: "100",
    range: {
      min: "0",
      max: "200",
    },
    unit: "%",
  },
  {
    name: "Contrast",
    property: "contrast",
    value: "100",
    range: {
      min: "0",
      max: "200",
    },
    unit: "%",
  },
  {
    name: "Saturation",
    property: "saturate",
    value: "100",
    range: {
      min: "0",
      max: "200",
    },
    unit: "%",
  },
  {
    name: "GrayScale",
    property: "grayscale",
    value: "0",
    range: {
      min: "0",
      max: "100",
    },
    unit: "%",
  },
  {
    name: "Sepia",
    property: "sepia",
    value: "0",
    range: {
      min: "0",
      max: "100",
    },
    unit: "%",
  },
  {
    name: "Hue Rotate",
    property: "hue-rotate",
    value: "0",
    range: {
      min: "0",
      max: "360",
    },
    unit: "deg",
  },
  {
    name: "Blur",
    property: "blur",
    value: "0",
    range: {
      min: "0",
      max: "20",
    },
    unit: "px",
  },
  {
    name: "Opacity",
    property: "opacity",
    value: "100",
    range: {
      min: "0",
      max: "100",
    },
    unit: "%",
  },
  {
    name: "Invert",
    property: "invert",
    value: "0",
    range: {
      min: "0",
      max: "200",
    },
    unit: "%",
  },
];

const App = () => {
  const [image, setImage] = useState(null);
  const [options, setOptions] = useState(Default);
  const [selection, setSelection] = useState(0);

  const selectOption = options[selection];

  const handelChange = (e) => {
    const Url = URL.createObjectURL(e.target.files[0]);

    setImage(Url);
  };

  const sliderChange = ({ target }) => {
    setOptions((pre) => {
      return pre.map((option, index) => {
        if (index !== selection) return option;
        return { ...option, value: target.value };
      });
    });
  };

  const filters = () => {
    const filter = options.map((prop) => {
      return `${prop.property}(${prop.value}${prop.unit})`;
    });
    return {
      filter: filter.join(" "),
      backgroundImage: `url(${image})`,
    };
  };

  // const download = () => {
  //   htmltoimage.toPng(document.getElementById("img")).then((data) => {
  //     Download(data, `${Date.now()}.png`);
  //   });
  // };

  return (
    <div className={style.container}>
      {image ? (
        <div>
          <button
            className={style.back}
            type="submit"
            onClick={() => setImage("")}
          >
            <ArrowBackIosNewOutlinedIcon />
          </button>
          <div className={style.main} id="img" style={filters()} />
        </div>
      ) : (
        <div className={style.upload}>
          <h1>PhotoShopClone</h1>
          <input type="file" accept="image/*" onChange={handelChange} />
        </div>
      )}
      <div className={style.sidebar}>
        {options.map((option, index) => (
          <SidebarItem
            key={index}
            name={option.name}
            active={index === selection}
            handelClick={() => setSelection(index)}
          />
        ))}
        <Download />
      </div>
      <Slider
        min={selectOption.range.min}
        max={selectOption.range.max}
        value={selectOption.value}
        handelChange={sliderChange}
      />
    </div>
  );
};

export default App;
