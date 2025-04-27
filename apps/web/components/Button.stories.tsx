import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";

const meta = {
  title: "UIKit/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "radio", options: ["primary", "ghost"] },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    children: { control: "text" },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {
  args: { children: "Playground", variant: "primary", size: "md" },
};

const sizes = ["sm", "md", "lg"] as const;
const variants = ["primary", "ghost"] as const;

export const VariantsAndSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {variants.map((variant) => (
        <div
          key={variant}
          style={{ display: "flex", gap: "1rem", alignItems: "center" }}
        >
          <span style={{ minWidth: "60px", textTransform: "capitalize" }}>
            {variant}
          </span>
          {sizes.map((size) => (
            <Button key={size} {...args} size={size} variant={variant}>
              {size.toUpperCase()}
            </Button>
          ))}
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
      <Button {...args} variant="primary" isDisabled>
        Primary Disabled
      </Button>
      <Button {...args} variant="ghost" isDisabled>
        Ghost Disabled
      </Button>
    </div>
  ),
};
