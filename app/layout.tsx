import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SiteSettingsProvider } from "@/components/site-settings-provider";
import { defaultDescription, siteName, siteUrl } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName,
    url: siteUrl,
    title: siteName,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <SiteSettingsProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </SiteSettingsProvider>
      </body>
    </html>
  );
}
