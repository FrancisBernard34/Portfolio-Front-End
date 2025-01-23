import clsx from "clsx";
import NotFound from "@/components/NotFound";
import { Space_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default async function BaseLayout({locale }: {locale: string}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={clsx(spaceMono.className, "w-screen h-screen flex justify-center items-center bg-[#1e1e1e]")}>
        <NextIntlClientProvider messages={messages}>
          <NotFound />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
