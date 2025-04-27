import clsx from "clsx";
import styles from "./Button.module.css";
import React from "react";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  type ButtonRenderProps,
} from "react-aria-components";

export interface ButtonProps extends AriaButtonProps {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string | ((states: ButtonRenderProps) => string);
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...delegated
}: ButtonProps) {
  return (
    <AriaButton
      {...delegated}
      className={(states) =>
        clsx(
          styles.btn,
          styles[variant],
          styles[size],
          typeof className === "function" ? className(states) : className
        )
      }
    >
      {children}
    </AriaButton>
  );
}
