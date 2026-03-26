// Button.tsx
import {
  ReactNode,
  useState,
  useRef,
  useMemo,
  type HTMLAttributes,
} from "react";
import { Spinner } from "../Spinner/Spinner";
import { iconMap, type IconName } from "../Icon/IconMap";
import { styles } from "./Button.styles";

export type ButtonType = "primary" | "secondary" | "ghost";
export type ButtonSize = "small" | "medium" | "large";

const ButtonStates = {
  READY: "READY",
  SELECTED: "SELECTED",
} as const;

type ButtonState = (typeof ButtonStates)[keyof typeof ButtonStates];

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonType;
  size: ButtonSize;
  children: ReactNode;
  iconLeft?: IconName;
  iconRight?: IconName;
  disabled?: boolean;
  onClick?: () => Promise<void>;
}

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "medium",
    iconLeft,
    iconRight,
    children,
    onClick,
    disabled,
    ...rest
  } = props;

  const [buttonState, setButtonState] = useState<ButtonState>(
    ButtonStates.READY,
  );

  const isLoading = useRef(false);

  const handleClick = async () => {
    if (isLoading.current) return;
    isLoading.current = true;
    setButtonState(ButtonStates.SELECTED);

    try {
      if (!onClick) return;
      await onClick();
    } catch (err) {
      console.error(err);
    } finally {
      isLoading.current = false;
      setButtonState(ButtonStates.READY);
    }
  };

  const clsx = useMemo(
    () => cls(variant, size, buttonState),
    [variant, size, buttonState],
  );

  const IconLeft = iconLeft ? iconMap[iconLeft] : null;
  const IconRight = iconRight ? iconMap[iconRight] : null;

  return (
    <button
      type="button"
      {...rest}
      className={clsx}
      disabled={buttonState === ButtonStates.SELECTED || disabled}
      onClick={handleClick}
    >
      <span className="relative flex items-center justify-between gap-2">
        {buttonState === ButtonStates.SELECTED && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner
              size={size}
              color={variant === "primary" ? "light" : "dark"}
            />
          </span>
        )}
        {IconLeft && <IconLeft size={size} />}
        {children}
        {IconRight && <IconRight size={size} />}
      </span>
    </button>
  );
}

function cls(variant: ButtonType, size: ButtonSize, buttonState: ButtonState) {
  const v = styles.variant[variant];
  return [
    ...styles.base,
    ...v.base,
    ...styles.size[size],
    ...(buttonState === ButtonStates.SELECTED ? v.selected : v.disabled),
  ].join(" ");
}
