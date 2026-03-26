export const styles = {
  base: [
    "font-medium",
    "border-box",
    "cursor-pointer",
    "uppercase",
    "transition-colors",
    "disabled:cursor-auto",
  ],
  variant: {
    primary: {
      base: [
        "bg-button-background-primary",
        "text-button-text-primary",
        "hover:bg-button-background-primary-hover",
        "focus:border-button-border-primary-focus",
      ],
      disabled: [
        "disabled:bg-button-background-disabled",
        "disabled:text-button-text-disabled",
      ],
      selected: [
        "disabled:bg-button-background-primary",
        "disabled:text-transparent",
      ],
    },
    secondary: {
      base: [
        "bg-button-background-secondary",
        "border",
        "border-button-border-secondary",
        "hover:bg-button-background-secondary-hover",
        "focus:border-button-border-secondary-focus",
      ],
      disabled: [
        "disabled:bg-button-background-disabled",
        "disabled:text-button-text-disabled",
      ],
      selected: ["bg-button-background-secondary", "disabled:text-transparent"],
    },
    ghost: {
      base: [
        "hover:bg-button-background-ghost-hover",
        "focus:border",
        "focus:border-button-border-ghost-focus",
      ],
      disabled: [
        "disabled:bg-transparent",
        "disabled:text-button-text-disabled",
      ],
      selected: ["disabled:bg-white", "disabled:text-transparent"],
    },
  },
  size: {
    small: ["p-2"],
    medium: ["p-4"],
    large: ["p-6"],
  },
} as const;
