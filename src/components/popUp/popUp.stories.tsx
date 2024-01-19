import { PopUp } from "@/components/popUp/PopUp";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  argTypes: {},
  component: PopUp,
  tags: ["autodocs"],
  title: "Components/PopUp",
} satisfies Meta<typeof PopUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PopupView: Story = {
  args: {
    title: "Подтвердить регистрацию?",
  },
};
