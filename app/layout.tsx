import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvaultbookie.com'),
  title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
  description: "A small team that sets up cricket betting IDs over WhatsApp. Written by the people who actually answer the messages.",
  keywords: "cricket betting ID, IPL betting ID, online betting ID India, Bet Vault",
  openGraph: {
    title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
    description: "A small team that sets up cricket betting IDs over WhatsApp.",
    type: "website",
  },
  verification: {
    google: "aAusyjh5_-9ytMEdDEDSftWfjd7XLzGMNe6-NqlEeuA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,500;0,600;0,700;1,500&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
