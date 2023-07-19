import React, { useMemo, useState } from "react";
import SeatGrid from "../grids/SeatGrid";
import style from "./styles/interviewPanelStyle.module.css";
import { InterviewPanelContext } from "../contexts/InterviewPanelContext";

type interviewPanelProps = {
  startHour: number;
  endHour: number;
  seatCount: number;
};

function InterviewPanel(props: interviewPanelProps) {
  const array = useMemo<number[]>(() => {
    return new Array(props.seatCount).fill(0);
  }, [props.seatCount]);

  const [indexes, setIndexes] = useState<{ start: number; end: number }>({
    start: 0,
    end: 0,
  });

  const [isMouseDownOnStartIndexButton, setIsMouseDownOnStartIndexButton] =
    useState<boolean>(false);
  const [isMouseDownOnEndIndexButton, setIsMouseDownOnEndIndexButton] =
    useState<boolean>(false);

  const [dragAtIndex, setDragAtIndex] = useState<number>();

  return (
    <InterviewPanelContext.Provider
      value={{
        startHour: props.startHour,
        endHour: props.endHour,
        hourCount: Math.abs(props.endHour - props.startHour),
        seatCount: props.seatCount,
        startIndex: indexes.start,
        endIndex: indexes.end,
        updateIndexes: setIndexes,

        isMouseDownOnStartIndexButton: isMouseDownOnStartIndexButton,
        updateIsMouseDownOnStartIndexButton: setIsMouseDownOnStartIndexButton,
        isMouseDownOnEndIndexButton: isMouseDownOnEndIndexButton,
        updateIsMouseDownOnEndIndexButton: setIsMouseDownOnEndIndexButton,

        dragAtIndex: dragAtIndex,
        updateDragAtIndex: setDragAtIndex,
      }}
    >
      <div className={style.container_div} onMouseUp={clearMouseEvents}>
        {array.map((x, index) => (
          <SeatGrid key={index} index={index} />
        ))}
      </div>
    </InterviewPanelContext.Provider>
  );

  function clearMouseEvents() {
    setTimeout(() => {
      setIsMouseDownOnStartIndexButton(false);
      setIsMouseDownOnEndIndexButton(false);
      setDragAtIndex(undefined);
    }, 200);
  }
}

export default InterviewPanel;
