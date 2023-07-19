import React, { useContext } from "react";
import style from "./styles/timeGridBlockStyle.module.css";
import { isTrue } from "../../utils/isTrue";
import { InterviewPanelContext } from "../contexts/InterviewPanelContext";

type timeGridBlockProps = {
  timeLabel: number;
  isDisplayLabel?: boolean;
  isLastBlock?: boolean;
  index: number;
};
function TimeGridBlock(props: timeGridBlockProps) {
  const {
    startIndex,
    endIndex,
    updateIndexes,

    isMouseDownOnStartIndexButton,
    updateIsMouseDownOnStartIndexButton,
    isMouseDownOnEndIndexButton,
    updateIsMouseDownOnEndIndexButton,

    dragAtIndex,
    updateDragAtIndex,
  } = useContext(InterviewPanelContext);
  const isSelected = props.index >= startIndex && props.index <= endIndex;

  const displayTimeLabel = `${("0" + props.timeLabel).slice(-2)}:00`;
  const displayLastBlockTimeLabel = `${("0" + (props.timeLabel + 1)).slice(
    -2
  )}:00`;

  return (
    // for dragging
    <div
      className={
        isTrue(isSelected)
          ? style.is_selected_container_div
          : style.container_div
      }
      onMouseDown={() => {
        if (isTrue(isSelected)) updateDragAtIndex(props.index);
      }}
      onMouseEnter={() => {
        if (isMouseDownOnStartIndexButton) {
          updateIndexes({ start: props.index, end: endIndex });
        } else if (isMouseDownOnEndIndexButton) {
          updateIndexes({ start: startIndex, end: props.index });
        } else if (dragAtIndex !== undefined) {
          const dis = props.index - dragAtIndex;
          updateIndexes({ start: startIndex + dis, end: endIndex + dis });
          updateDragAtIndex(props.index);
        }
      }}
    >
      {/* for decoration */}
      <div className={style.start_div} draggable={false}>
        {isTrue(props.isDisplayLabel) && (
          <h6 className={style.start_h6}>{displayTimeLabel}</h6>
        )}
      </div>
      <div className={style.end_div} draggable={false}>
        {isTrue(props.isLastBlock) && (
          <h6 className={style.end_h6}>{displayLastBlockTimeLabel}</h6>
        )}
      </div>

      {/* for add range */}
      {isTrue(isSelected) && props.index === startIndex && (
        <button
          className={style.start_button}
          onMouseDown={() => updateIsMouseDownOnStartIndexButton(true)}
        ></button>
      )}
      {isTrue(isSelected) && props.index === endIndex && (
        <button
          className={style.end_button}
          onMouseDown={() => updateIsMouseDownOnEndIndexButton(true)}
        ></button>
      )}
    </div>
  );
}
export default TimeGridBlock;
