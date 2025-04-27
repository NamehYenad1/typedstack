"use client"; // Required for hooks and event handlers
import { motion } from "framer-motion"; // Ensure using framer-motion
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
import { appToastQueue, type AppToastContent } from "./ToastQueue";

export interface ToastProps
  extends Omit<AriaToastProps<AppToastContent>, "toast" | "children"> {
  toast: QueuedToast<AppToastContent>;
}

export function Toast({ toast, className, style, ...props }: ToastProps) {
  const variant = toast.content.variant ?? "info";

  return (
    // Apply motion to a wrapper div
    <motion.div
      layout // Animate layout changes
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }} // Adjust exit animation if needed
      transition={{ type: "spring", stiffness: 300, damping: 30 }} // Use spring physics
    >
      <AriaToast
        toast={toast}
        {...props}
        // Pass className and style using composeRenderProps to AriaToast
        className={composeRenderProps(className, (classNames) =>
          clsx(styles.toast, styles[variant], classNames)
        )}
        style={style} // Pass style prop through
      >
        {/* Keep original children structure */}
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
    </motion.div>
  );
}

// --- ToastRegion Component ---
// Also Omit 'children' as it's handled internally
export function ToastRegion(
  props: Omit<AriaToastRegionProps<AppToastContent>, "queue" | "children">
) {
  const { className, style, ...restProps } = props;
  return (
    <AriaToastRegion
      queue={appToastQueue}
      {...restProps}
      className={composeRenderProps(className, (classNames) =>
        clsx(styles.region, classNames)
      )}
      style={composeRenderProps(style, (styleProps) => styleProps)}
    >
      {(renderProps: { toast: QueuedToast<AppToastContent> }) => (
        // Render the Toast component which now includes the motion wrapper
        <Toast toast={renderProps.toast} />
      )}
    </AriaToastRegion>
  );
}
