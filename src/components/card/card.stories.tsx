import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "@/components/card/Card";

const meta = {
  argTypes: {
    checked: [true, false],
  },
  component: Card,
  tags: ["autodocs"],
  title: "Components/Card",
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardUnchecked: Story = {
  args: {
    checked: false,
    id: 2313,
    organization:
      "МОО «Дальневосточное объединение промышленников и предпринимателей»",
    phone: "+7 (919) 556 - 45 -18",
    position: "член Правления",
    table: "12",
  },
};

export const CardChecked: Story = {
  args: {
    checked: true,
    id: 2313,
    organization:
      "МОО «Дальневосточное объединение промышленников и предпринимателей»",
    phone: "+7 (919) 556 - 45 -18",
    position: "член Правления",
    table: "12",
  },
};
