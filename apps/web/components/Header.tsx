"use client"; // Keep this directive

import { useState } from "react"; // Import useState
import Link from "next/link"; // Import Link from next/link
import styles from "./Header.module.css";
import clsx from "clsx";
import Hamburger from "./Hamburger"; // Import the new Hamburger component
import ThemeToggle from "./ThemeToggle"; // Import ThemeToggle (will be created next)

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={clsx(styles.header)}>
      <h1>TypedStack</h1>

      {/* Use the Hamburger component */}
      <Hamburger
        isOpen={isMobileMenuOpen}
        onClick={toggleMobileMenu}
        className={styles.hamburgerButton} // Pass className for positioning/media queries
      />

      <nav
        className={clsx(
          styles.nav,
          isMobileMenuOpen ? styles.mobileNavOpen : null
        )}
        aria-label="Main navigation"
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {/* Render the ThemeToggle component */}
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
