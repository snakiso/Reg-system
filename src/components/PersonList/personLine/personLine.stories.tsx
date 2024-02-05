import { PersonLine } from "@/components/PersonList/personLine/PersonLine";
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
    data: {
      id: 13,
      name: "Марина",
      organization:
        "МОО «Дальневосточное объединение промышленников и предпринимателей»",
      phone: "",
      photo: "",
      position: "Директор",
      registered: false,
      secondName: "Петровна",
      table: "",
      thirdName: "ЕРМИЛОВА",
    },
  },
};

export const PersonLineChecked: Story = {
  args: {
    data: {
      id: 13,
      name: "Марина",
      organization:
        "МОО «Дальневосточное объединение промышленников и предпринимателей»",
      phone: "",
      photo: "",
      position: "Директор",
      registered: true,
      secondName: "Петровна",
      table: "",
      thirdName: "ЕРМИЛОВА",
    },
  },
};
