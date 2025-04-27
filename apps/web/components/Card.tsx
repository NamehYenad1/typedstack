import React, { createContext, forwardRef } from "react";
import clsx from "clsx";
import Image from "next/image"; // Import next/image
import styles from "./Card.module.css";

// --- Context (Optional) ---
interface CardContextProps {}
const CardContext = createContext<CardContextProps | null>(null);

// --- Subcomponents ---

// Card.Header
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
const Header = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.header, className)} {...props}>
        {children}
      </div>
    );
  }
);
Header.displayName = "Card.Header";

// Card.Title
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // Allow semantic heading level override
}
const Title = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, as: Component = "h3", ...props }, ref) => {
    return (
      <Component ref={ref} className={clsx(styles.title, className)} {...props}>
        {children}
      </Component>
    );
  }
);
Title.displayName = "Card.Title";

// Card.Image
interface CardImageProps
  extends Omit<
    React.ImgHTMLAttributes<HTMLImageElement>,
    "src" | "alt" | "width" | "height"
  > {
  // Omit conflicting props
  src: string;
  alt: string;
  width: number; // Add width prop
  height: number; // Add height prop
  className?: string;
}
const ImageComponent = forwardRef<HTMLImageElement, CardImageProps>( // Renamed to avoid conflict with import
  ({ src, alt, width, height, className, ...props }, ref) => {
    // Use next/image Image component
    return (
      <Image
        ref={ref} // Note: ref might not be directly applicable to next/image like this, depending on usage. Consider if ref is truly needed here.
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={clsx(styles.image, className)}
        {...props}
      />
    );
  }
);
ImageComponent.displayName = "Card.Image";

// Card.Content
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
const Content = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.content, className)} {...props}>
        {children}
      </div>
    );
  }
);
Content.displayName = "Card.Content";

// Card.Description
interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  // Changed to p for semantics
  children: React.ReactNode;
  className?: string;
}
const Description = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={clsx(styles.description, className)} {...props}>
        {children}
      </p>
    );
  }
);
Description.displayName = "Card.Description";

// Card.Footer
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
const Footer = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.footer, className)} {...props}>
        {children}
      </div>
    );
  }
);
Footer.displayName = "Card.Footer";

// --- Main Card Component ---

interface CardRootProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

// Define the main Card component function using forwardRef
const CardRootComponent = forwardRef<HTMLDivElement, CardRootProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={clsx(styles.card, className)} {...props}>
        {children}
      </div>
    );
  }
);
CardRootComponent.displayName = "Card";

// Define the type for the component with attached subcomponents
type CardComponent = React.ForwardRefExoticComponent<
  CardRootProps & React.RefAttributes<HTMLDivElement>
> & {
  Header: typeof Header;
  Title: typeof Title;
  Image: typeof ImageComponent; // Update type definition
  Content: typeof Content;
  Description: typeof Description;
  Footer: typeof Footer;
};

// Cast the component to the correct type
const CardRoot = CardRootComponent as CardComponent;

// Attach subcomponents
CardRoot.Header = Header;
CardRoot.Title = Title;
CardRoot.Image = ImageComponent; // Update attached subcomponent
CardRoot.Content = Content;
CardRoot.Description = Description;
CardRoot.Footer = Footer;

export const Card = CardRoot;
