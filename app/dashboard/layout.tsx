import { Metadata } from "next";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}
