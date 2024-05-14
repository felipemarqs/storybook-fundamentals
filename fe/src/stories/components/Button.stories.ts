import type {Meta, StoryObj} from "@storybook/react";

import {Button} from "@/components/ui/button";
const meta = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};
