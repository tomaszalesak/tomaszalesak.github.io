import { Container, Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const siteUrl = "https://www.tomaszalesak.eu";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Tomáš Zálešák – Senior Software Engineer",
  description:
    "Portfolio of Tomáš Zálešák, a senior software engineer based in the EU specializing in .NET, React.js, TypeScript, and cloud technologies.",
  keywords: [
    "senior software engineer",
    "full-stack developer",
    ".NET",
    "React",
    "TypeScript",
    "portfolio",
    "Tomáš Zálešák",
  ],
  authors: [{ name: "Tomáš Zálešák", url: siteUrl }],
  creator: "Tomáš Zálešák",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Tomáš Zálešák",
    title: "Tomáš Zálešák – Senior Software Engineer",
    description:
      "Portfolio of Tomáš Zálešák, a senior software engineer based in the EU specializing in .NET, React.js, TypeScript, and cloud technologies.",
    images: [
      {
        url: `${siteUrl}/portrait.jpeg`,
        width: 400,
        height: 400,
        alt: "Tomáš Zálešák",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Tomáš Zálešák – Senior Software Engineer",
    description:
      "Portfolio of Tomáš Zálešák, a senior software engineer based in the EU.",
    images: [`${siteUrl}/portrait.jpeg`],
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#111113"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Theme
            accentColor="indigo"
            grayColor="slate"
            radius="medium"
            scaling="100%"
          >
            <Container size="2" px="4" py="6" asChild>
              <main>{children}</main>
            </Container>
          </Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
