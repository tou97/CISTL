// Next.js imports
import type { Metadata } from "next";

// Styles
import "./globals.css";
import "@mantine/core/styles.css";
import { minimal_theme } from "./palette";

// Components
import ClientAppShell from "@/components/client_appshell/ClientAppShell";
import Footer from "@/components/footer/Footer";

// Mantine UI
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from "@mantine/core";

// Metadata configuration
export const metadata: Metadata = {
  title: "The Church in St. Louis",
  description: "The Church in St. Louis - Community and worship",
};

/**
 * Root layout component for the application
 */
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={minimal_theme}>
          <ClientAppShell>{children}</ClientAppShell>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
