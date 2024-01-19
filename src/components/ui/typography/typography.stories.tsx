import type { Meta, StoryObj } from "@storybook/react";

import { Typography } from "./Typography";

const meta = {
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: [
        "body0s",
        "body1m",
        "body1s",
        "body2m",
        "body2s",
        "body3r",
        "h1",
      ],
    },
  },
  component: Typography,
  tags: ["autodocs"],
  title: "Components/Typography",
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Body0s: Story = {
  args: {
    children: "Card content",
    variant: "body0s",
  },
};

export const Body1s: Story = {
  args: {
    children: "Card content",
    variant: "body1s",
  },
};

export const Body1m: Story = {
  args: {
    children: "Card content",
    variant: "body1m",
  },
};

export const Body2s: Story = {
  args: {
    children: "Card content",
    variant: "body2s",
  },
};

export const Body2m: Story = {
  args: {
    children: "Card content",
    variant: "body2m",
  },
};

export const Body3r: Story = {
  args: {
    children: "Card content",
    variant: "body3r",
  },
};

export const H1: Story = {
  args: {
    children: "Card content",
    variant: "h1",
  },
};
