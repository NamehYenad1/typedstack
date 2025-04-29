import type { Metadata } from "next";
import localFont from "next/font/local";
import { cookies } from "next/headers"; // Import cookies
import "./globals.css";
import { ToastRegion } from "../components/Toast";
import Header from "../components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "TypedStack",
  description: "Web application for TypedStack",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read theme cookie
  const savedTheme = (await cookies()).get("color-theme");
  const theme = savedTheme?.value === "dark" ? "dark" : "light"; // Default to light

  return (
    <html
      lang="en"
      data-color-theme={theme} // Set data attribute ONLY
    >
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* The ThemeToggle component inside Header will handle client-side updates */}
        <Header />
        {children}
        <ToastRegion />
      </body>
    </html>
  );
}
