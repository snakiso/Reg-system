import { PersonLine } from "@/components/personLine/PersonLine";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  argTypes: {},
  component: PersonLine,
  tags: ["autodocs"],
  title: "Components/PersonLine",
} satisfies Meta<typeof PersonLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PersonLineUnchecked: Story = {
  args: {
    done: false,
    name: "ЕРМИЛОВА Марина Петровна",
    position:
      "МОО «Дальневосточное объединение промышленников и предпринимателей»",
    table: "10",
  },
};

export const PersonLineChecked: Story = {
  args: {
    done: true,
    name: "ЕРМИЛОВА Марина Петровна",
    position:
      "МОО «Дальневосточное объединение промышленников и предпринимателей»",
    table: "10",
  },
};
