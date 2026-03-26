//Mostly generated with Claude Code
export type SpinnerSize = "small" | "medium" | "large";

interface SpinnerProps {
  size?: SpinnerSize;
  color?: "light" | "dark";
  className?: string;
}

const sizeStyles: Record<SpinnerSize, string> = {
  small: "w-3 h-3 border-[1.5px]",
  medium: "w-4 h-4 border-2",
  large: "w-5 h-5 border-2",
};

const colorStyles = {
  light: "text-white",
  dark: "text-black",
};

export function Spinner({
  size = "medium",
  color,
  className = "",
}: SpinnerProps) {
  const c = color && colorStyles[color];

  return (
    <span
      role="status"
      aria-label="Loading"
      className={[
        sizeStyles[size],
        "inline-block",
        "rounded-full",
        "border-current",
        "border-t-transparent",
        "animate-spin",
        c,
        className,
      ].join(" ")}
    />
  );
}
