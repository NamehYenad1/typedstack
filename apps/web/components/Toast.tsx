"use client"; // Required for hooks and event handlers

import React from "react";
import {
  Button,
  Text,
  UNSTABLE_Toast as AriaToast,
  ToastProps as AriaToastProps,
  UNSTABLE_ToastRegion as AriaToastRegion,
  ToastRegionProps as AriaToastRegionProps,
  UNSTABLE_ToastContent as AriaToastContent,
  composeRenderProps,
  QueuedToast,
} from "react-aria-components";
import { XIcon } from "lucide-react";
import clsx from "clsx";
import styles from "./Toast.module.css";
// Import only the type, queue is used internally
import { appToastQueue, type AppToastContent } from "./ToastQueue";

// --- Toast Component ---
// Add generic type argument to AriaToastProps
export interface ToastProps
  extends Omit<AriaToastProps<AppToastContent>, "toast" | "children"> {
  toast: QueuedToast<AppToastContent>;
}

export function Toast({ toast, className, ...props }: ToastProps) {
  const variant = toast.content.variant ?? "info";

  return (
    <AriaToast
      toast={toast}
      {...props}
      // Remove unused renderProps parameter
      // Add generic type argument to ToastRenderProps
      className={composeRenderProps(className, (classNames) =>
        clsx(styles.toast, styles[variant], classNames)
      )}
    >
      <AriaToastContent className={styles.content}>
        <Text slot="title" className={styles.title}>
          {toast.content.title}
        </Text>
        {toast.content.description && (
          <Text slot="description" className={styles.description}>
            {toast.content.description}
          </Text>
        )}
      </AriaToastContent>
      <Button
        slot="close"
        className={styles.closeButton}
        aria-label="Close toast"
      >
        <XIcon size={16} />
      </Button>
    </AriaToast>
  );
}

// --- ToastRegion Component ---
// Also Omit 'children' as it's handled internally
export function ToastRegion(
  props: Omit<AriaToastRegionProps<AppToastContent>, "queue" | "children">
) {
  // Destructure className and other props
  const { className, ...restProps } = props;
  return (
    <AriaToastRegion
      // Explicitly set the global queue
      queue={appToastQueue}
      // Spread the rest of the props
      {...restProps}
      // Compose className correctly
      className={composeRenderProps(className, (classNames) =>
        clsx(styles.region, classNames)
      )}
    >
      {/* Internal render function */}
      {(renderProps: { toast: QueuedToast<AppToastContent> }) => (
        <Toast toast={renderProps.toast} />
      )}
    </AriaToastRegion>
  );
}
