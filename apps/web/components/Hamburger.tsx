"use client";

import React from "react";
import clsx from "clsx";
import styles from "./Hamburger.module.css";

// Hamburger Icon SVG
const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

// Close Icon SVG
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

interface HamburgerProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const Hamburger: React.FC<HamburgerProps> = ({
  isOpen,
  onClick,
  className,
}) => {
  return (
    <button
      className={clsx(styles.hamburgerButton, className)}
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
};

export default Hamburger;
