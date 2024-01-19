import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "@/components/ui/textField/TextField";

const meta = {
  argTypes: {},
  component: TextField,
  tags: ["autodocs"],
  title: "Components/TextField",
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextFieldView: Story = {
  args: {},
};
