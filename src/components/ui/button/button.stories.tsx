import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "@/components/ui/typography";

import { Button } from "./";

const meta = {
  argTypes: {
    variant: {
      control: { type: "radio" },
    },
  },
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <Typography as={"span"} variant={"body2m"}>
        Primary Button
      </Typography>
    ),
    disabled: false,
    variant: "primary",
  },
};

export const Outline: Story = {
  args: {
    children: (
      <Typography as={"span"} variant={"body2m"}>
        Outline Button
      </Typography>
    ),
    disabled: false,
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    children: (
      <Typography as={"span"} variant={"body2m"}>
        Disabled Button
      </Typography>
    ),
    disabled: true,
    variant: "primary",
  },
};
