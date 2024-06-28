import type { Meta, StoryObj } from "@storybook/react";

import { Key } from "./Key";

const meta = {
  argTypes: {},
  component: Key,
  tags: ["autodocs"],
  title: "Components/Key",
} satisfies Meta<typeof Key>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OneKey: Story = {
  args: {
    children: "B",
    disabled: false,
    isActive: true,
  },
};

export const DisabledOneKey: Story = {
  args: {
    children: "B",
    disabled: true,
    isActive: false,
  },
};
