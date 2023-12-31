import "./globals.css";
import type { Metadata } from "next";

import { Header } from "./Header";
import RecoilProvider from "./providers/RecoilProvider";
import NextAuthProvider from "./providers/NextAuth";
import { BodyForStopScroll } from "./BodyForStopScroll";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <NextAuthProvider>
        <RecoilProvider>
          <BodyForStopScroll>
              <Header />
              {children}
          </BodyForStopScroll>
        </RecoilProvider>
      </NextAuthProvider>
    </html>
  );
}
