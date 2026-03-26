import { type PropsWithChildren } from "react";
import { type ButtonSize } from "../Button/Button";

export interface IconProps {
  size?: ButtonSize;
  className?: string;
}

const sizeMap: Record<ButtonSize, number> = {
  small: 16,
  medium: 20,
  large: 24,
};

export function BaseIcon({
  children,
  className,
  size = "medium",
}: PropsWithChildren<IconProps>) {
  const px = sizeMap[size];
  return (
    <svg
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {children}
    </svg>
  );
}
