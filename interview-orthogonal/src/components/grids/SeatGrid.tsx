import React from "react";
import style from "./styles/seatGridStyle.module.css";
import image from "../../../public/pic.png";
import TimeGrid from "./TimeGrid";

type seatGridProps = {
  index: number;
};
function SeatGrid(props: seatGridProps) {
  return (
    <div className={style.container_div}>
      <div className={style.header_div}>
        <h3>1 Seat</h3>
      </div>
      <div className={style.img_div}>
        <img src={image} alt={"logo"} />
      </div>
      <div className={style.content_div}>
        <TimeGrid key={props.index} index={props.index} />
      </div>
    </div>
  );
}

export default SeatGrid;
