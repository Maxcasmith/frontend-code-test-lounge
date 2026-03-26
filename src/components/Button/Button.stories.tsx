// Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
    size: "medium",
    disabled: false,
    iconLeft: "search",
    iconRight: "check",
    onClick: () =>
      new Promise((res) => {
        console.log("Loading...");
        setTimeout(() => {
          console.log("Hello Lounge");
          res();
        }, 1000);
      }),
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
    size: "medium",
    disabled: false,
    iconLeft: "arrow-left",
    iconRight: "arrow-right",
    onClick: () =>
      new Promise((res) => {
        console.log("Loading...");
        setTimeout(() => {
          console.log("Hello Lounge");
          res();
        }, 1000);
      }),
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
    size: "medium",
    disabled: false,
    iconLeft: "check",
    iconRight: "external-link",
    onClick: () =>
      new Promise((res) => {
        console.log("Loading...");
        setTimeout(() => {
          console.log("Hello Lounge");
          res();
        }, 1000);
      }),
  },
};

export const Disabled: Story = {
  args: {
    variant: "primary",
    children: "Disabled Button",
    size: "small",
    disabled: true,
    onClick: () =>
      new Promise((res) => {
        console.log("Loading...");
        setTimeout(() => {
          console.log("Hello Lounge");
          res();
        }, 1000);
      }),
  },
};

export const Large: Story = {
  args: {
    variant: "secondary",
    children: "Large Button",
    size: "large",
    disabled: false,
    onClick: () =>
      new Promise((res) => {
        console.log("Loading...");
        setTimeout(() => {
          console.log("Hello Lounge");
          res();
        }, 1000);
      }),
  },
};
