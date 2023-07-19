import type { Meta, StoryObj } from "@storybook/react";
import InterviewPanel from "../components/panels/InterviewPanel";

const meta = {
  title: "Interview/Interview-Panel",
  component: InterviewPanel,
} satisfies Meta<typeof InterviewPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TimeSchedule: Story = {
  args: {
    startHour: 0,
    endHour: 24,
    seatCount: 4,
  },
};
