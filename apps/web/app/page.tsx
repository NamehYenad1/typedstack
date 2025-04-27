"use client";

import Image, { type ImageProps } from "next/image";
import { Button as RepoButton } from "@repo/ui/button"; // Renamed to avoid conflict
import styles from "./page.module.css";
import { Button } from "../components/Button"; // Local Button
import { Card } from "../components/Card"; // Local Card
import { appToastQueue } from "../components/ToastQueue"; // Toast Queue

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
  const showToast = () => {
    console.log("showToast called, adding toast to queue...");
    appToastQueue.add({
      title: "Hello from Toast!",
      description: "This is a sample toast notification.",
      variant: "info",
    });
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button
          variant="primary"
          size="md"
          onPress={showToast}
          className="mt-4"
        >
          Show Toast
        </Button>

        <Card className="mt-8" style={{ width: "300px" }}>
          <Card.Header>
            <Card.Title>Sample Card</Card.Title>
          </Card.Header>
          <Card.Content>
            <Card.Description>
              This is a card component added to the page.
            </Card.Description>
          </Card.Content>
          <Card.Footer>
            <Button variant="ghost">Action</Button>
          </Card.Footer>
        </Card>
      </main>
    </div>
  );
}
