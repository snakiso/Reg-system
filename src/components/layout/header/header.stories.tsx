import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "@/components/layout/header/Header";

const meta = {
  argTypes: {},
  component: Header,
  tags: ["autodocs"],
  title: "Components/Header",
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderView: Story = {
  args: {},
};
