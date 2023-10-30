import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button/Button";
import { RippleEffect } from "./RippleEffect";

const meta: Meta<typeof Button> = {
  title: "UI Kit/Ripple",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "text",
      table: {
        type: { summary: "hex | string" },
        defaultValue: { summary: "var(--accent--extra)" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: ({ color }) => (
    <Button>
      <RippleEffect color={color} /> Ripple Effect with Button
    </Button>
  ),
};
