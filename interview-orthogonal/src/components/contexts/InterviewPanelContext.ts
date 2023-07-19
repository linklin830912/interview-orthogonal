import { createContext } from "react";

type interviewPanelContextType = {
  startHour: number;
  endHour: number;
  hourCount: number;
  seatCount: number;
  startIndex: number;
  endIndex: number;
  updateIndexes: (x: { start: number; end: number }) => void;

  isMouseDownOnStartIndexButton: boolean;
  updateIsMouseDownOnStartIndexButton: (x: boolean) => void;
  isMouseDownOnEndIndexButton: boolean;
  updateIsMouseDownOnEndIndexButton: (x: boolean) => void;

  dragAtIndex: number | undefined;
  updateDragAtIndex: (x?: number) => void;
};

const defaultInterviewPanelContextType = {} as interviewPanelContextType;
export const InterviewPanelContext = createContext<interviewPanelContextType>(
  defaultInterviewPanelContextType
);
