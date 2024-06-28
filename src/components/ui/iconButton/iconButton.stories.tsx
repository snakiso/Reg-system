import type { Meta, StoryObj } from "@storybook/react";

import { ListIcon } from "../../../assets/icons/listIcon";
import { PersonIcon } from "../../../assets/icons/personIcon";
import { IconButton } from "./IconButton";

const meta = {
  argTypes: {},
  component: IconButton,
  tags: ["autodocs"],
  title: "Components/IconButton",
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListIconButton: Story = {
  args: {
    children: <ListIcon />,
    disabled: false,
  },
};

export const PersonIconButton: Story = {
  args: {
    children: <PersonIcon />,
    disabled: true,
  },
};
