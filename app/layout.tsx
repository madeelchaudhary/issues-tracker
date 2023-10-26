import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, Theme } from "@radix-ui/themes";

import Navbar from "@/components/Navbar";

import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import AuthProvider from "./AuthProvider";
import QueryClientProvider from "./QueryClientProvider";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "Track issues and statistics of the issue tracker.",
  authors: [{ name: "M Adeel", url: "https://github.com/madeelchaudhary" }],
  applicationName: "Issue Tracker",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AuthProvider>
          <QueryClientProvider>
            <Theme accentColor="violet">
              <Navbar />
              <Container>{children}</Container>
            </Theme>
          </QueryClientProvider>
          <Toaster toastOptions={{ duration: 2000 }} />
        </AuthProvider>
      </body>
    </html>
  );
}
