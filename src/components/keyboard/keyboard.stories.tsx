import { Keyboard } from "@/components/keyboard/Keyboard";
import { Key } from "@/components/ui/key/Key";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  argTypes: {},
  component: Keyboard,
  tags: ["autodocs"],
  title: "Components/Keyboard",
} satisfies Meta<typeof Keyboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NumberKeyboard: Story = {
  args: {},
  render: (args) => {
    const letters = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
    ];

    return (
      <Keyboard {...args}>
        {letters.map((l, index) => {
          return <Key key={index}>{l}</Key>;
        })}
      </Keyboard>
    );
  },
};

export const LetterKeyboard: Story = {
  args: {},
  render: (args) => {
    const letters = [
      "А",
      "Б",
      "В",
      "Г",
      "Д",
      "Е",
      "Ж",
      "З",
      "И",
      "К",
      "Л",
      "М",
      "Н",
      "О",
      "П",
      "Р",
      "С",
      "Т",
      "Я",
    ];

    return (
      <Keyboard {...args}>
        {letters.map((l, index) => {
          return <Key key={index}>{l}</Key>;
        })}
      </Keyboard>
    );
  },
};
