import clsx from "clsx";
import styles from "./Button.module.css";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...delegated
}: ButtonProps) {
  return (
    <button
      {...delegated}
      className={clsx(styles.btn, styles[variant], styles[size], className)}
    >
      {children}
    </button>
  );
}
