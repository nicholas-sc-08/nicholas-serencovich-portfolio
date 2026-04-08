import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import ThemeProvider from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Potifolio",
  description: "",
  icons: {
    icon: [
      {
        url: "/NSLlogo.png", // Caminho para o arquivo na pasta public
        href: "/NSLogo.png",
      },
    ],
    // Opcional: ícone para iPhone/iOS
    apple: [
      {
        url: "/NSLogo.png",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  return (
    <html suppressHydrationWarning lang={lang} className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}>
      <head />
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute={"class"} defaultTheme={"light"} enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
