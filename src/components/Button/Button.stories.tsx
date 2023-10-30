import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI Kit/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      table: {
        type: { summary: "primary | secondary | tertiary" },
        defaultValue: { summary: "primary" },
      },
    },
    size: {
      control: "select",
      options: ["s", "m", "l"],
      table: {
        type: { summary: "s | m | l" },
        defaultValue: { summary: "s" },
      },
    },
    isLoading: {
      control: "boolean",
      table: {
        type: { summary: "boolean | false" },
        defaultValue: { summary: "undefined" },
      },
    },
    children: {
      defaultValue: "Button",
      control: "text",
      type: "string",
      table: {
        type: { summary: "ReactNode" },
        defaultValue: { summary: "undefined" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: any = {
  render: ({ mode, children, size, isLoading }: any) => (
    <>
      <Button mode={mode} size={size} isLoading={isLoading} children={children} />
      <Button mode={mode} size={size} isLoading={isLoading} children={children} />
      <Button mode={mode} size={size} isLoading={isLoading} children={children} />
    </>
  ),
};
