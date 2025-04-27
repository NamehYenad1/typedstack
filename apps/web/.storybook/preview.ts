import type { Preview } from "@storybook/react";
import "../app/globals.css"; // Import global styles
import type { ThemeConfig } from "storybook-addon-data-theme-switcher";


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

// Configure storybook-addon-data-theme-switcher
export const initialGlobals = {
  // Set the default theme value
  dataTheme: "light", 
  dataThemes: {
    list: [
      // Define the light theme
      { name: "Light", dataTheme: "light", color: "#ffffff" }, 
      // Define the dark theme, matching globals.css [data-theme="dark"]
      { name: "Dark", dataTheme: "dark", color: "#0a0a0a" },  
    ],
    dataAttribute: "data-theme", // Ensure it uses data-theme
    clearable: false, // Don't allow clearing the theme
    toolbar: {
      title: "Theme", // Set toolbar title
      // icon: "mirror", // Optional: set an icon (e.g., 'mirror', 'circlehollow')
    },
  } satisfies ThemeConfig,
};

export default preview;
