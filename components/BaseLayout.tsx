import { clsx } from "clsx";
import { Space_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import LocaleSwitcher from "@/components/LocaleSwitcher";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale}>
      <body className={clsx(spaceMono.className, "flex h-full flex-col")}>
        <NextIntlClientProvider messages={messages}>
          <LocaleSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
