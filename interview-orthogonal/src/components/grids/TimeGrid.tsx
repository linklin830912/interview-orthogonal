import React, { useMemo, useContext } from "react";
import style from "./styles/timeGridStyle.module.css";
import TimeGridBlock from "./TimeGridBlock";
import { InterviewPanelContext } from "../contexts/InterviewPanelContext";
type timeGridProps = {
  index: number;
};
function TimeGrid(props: timeGridProps) {
  const { startHour, endHour, hourCount } = useContext(InterviewPanelContext);
  const blockArray = useMemo<number[]>(() => {
    return new Array(Math.abs(endHour - startHour)).fill(0);
  }, [startHour, endHour]);

  return (
    <div className={style.container_div}>
      {blockArray.map((x, index) => (
        <React.Fragment key={index}>
          <div className={style.line_div}></div>
          <TimeGridBlock
            //remember: the index is base on hours not counts
            index={(startHour + props.index * endHour + index) * 2}
            timeLabel={startHour + index}
            isDisplayLabel={true}
          />
          <div className={style.half_line_div}></div>
          <TimeGridBlock
            index={(startHour + props.index * hourCount + index) * 2 + 1}
            timeLabel={startHour + index}
            isLastBlock={index === blockArray.length - 1}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
export default TimeGrid;
