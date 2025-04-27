import { UNSTABLE_ToastQueue as ToastQueue } from "react-aria-components";

// Define the type for your toast content.
export interface AppToastContent {
  title: string;
  description?: string;
  variant?: "info" | "success" | "warning" | "error"; // Add variant
}

// Create and export a global ToastQueue.
export const appToastQueue = new ToastQueue<AppToastContent>({
  // Optional: Configure max visible toasts, etc.
  // maxVisibleToasts: 5,
});
