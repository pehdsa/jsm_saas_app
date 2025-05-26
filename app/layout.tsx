import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { HeaderComponent } from "@/components/HeaderComponent";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Converso",
  description: "Real-time AI Teaching Platform",
};
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bricolage.variable} antialiased pb-20`}>
        <ClerkProvider appearance={{ variables: { colorPrimary: "#fe5933" } }}>
          <HeaderComponent />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
