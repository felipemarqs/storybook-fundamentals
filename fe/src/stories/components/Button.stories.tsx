import type {Meta, StoryObj} from "@storybook/react";
import {action} from "@storybook/addon-actions";

import {Button} from "@/components/ui/button";
const meta = {
  title: "Components/Button",
  component: Button,
  //tags: ["autodocs"],
  args: {
    children: "Button",
    onClick: action("onClick"),
  },
  argTypes: {
    onClick: {
      name: "onClick",
      table: {
        category: "Event Listeners",
      },
    },
    asChild: {
      name: "AsChild",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    disabled: {
      control: "boolean",
      name: "disabled",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
    size: {
      options: ["default", "sm", "lg", "icon"],
      control: "inline-radio",
      name: "size",
      table: {
        type: {
          summary: "enum ('default', 'sm', 'lg', 'icon') ",
          detail: "'default'| 'sm'| 'lg'| 'icon'",
        },
      },
    },
    variant: {
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
      control: "select",
      name: "variant",
      table: {
        type: {
          summary:
            "enum ('default', 'destructive', 'outline', 'secondary','ghost','link') ",
          detail:
            "'default'| 'destructive'| 'outline'| 'secondary'|'ghost'|'link'",
        },
        category: "Appearance",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default",
    variant: "default",
  },
  render: (props) => <Button {...props}>{props.children}</Button>,
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
  render: (props) => (
    <Button {...props}>
      <span className="mr-1">👨‍💻</span>

      {props.children}
    </Button>
  ),
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
  render: (props) => <Button {...props}>{props.children}</Button>,
};
