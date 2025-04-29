"use client";
import React from "react";
import { Sun, Moon } from "lucide-react";
import Cookie from "js-cookie";
import styles from "./ThemeToggle.module.css";
import { useBoop } from "../hooks/useBoop";
import { motion, AnimatePresence } from "motion/react";

interface ThemeToggleProps {}

const ThemeToggle: React.FC<ThemeToggleProps> = () => {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [isBooped, variants, trigger] = useBoop({
    rotation: 20,
    timing: 200,
  });

  React.useEffect(() => {
    const currentTheme =
      (document.documentElement.getAttribute("data-color-theme") as
        | "light"
        | "dark") || "light";
    setTheme(currentTheme);
  }, []);

  function handleClick() {
    const root = document.documentElement;
    const currentTheme =
      (root.getAttribute("data-color-theme") as "light" | "dark") || "light";
    const nextTheme = currentTheme === "light" ? "dark" : "light";

    setTheme(nextTheme);
    Cookie.set("color-theme", nextTheme, { expires: 365 });
    root.setAttribute("data-color-theme", nextTheme);
  }

  return (
    <motion.button
      className={styles.themeToggle}
      onClick={handleClick}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
      onMouseEnter={trigger}
      animate={isBooped ? "boop" : "rest"}
      variants={variants}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ scale: 0.6, opacity: 0, rotate: 90 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          exit={{ scale: 0.6, opacity: 0, rotate: -90 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "light" ? <Sun size="1.25rem" /> : <Moon size="1.25rem" />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
