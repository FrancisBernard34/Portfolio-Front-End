import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {Locale} from '@/types/locale';
import {cookies} from 'next/headers';
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  const cookieLocale = (await cookies()).get('NEXT_LOCALE')?.value;

  if (cookieLocale) {
    locale = cookieLocale;
  }

  if (!cookieLocale && (!locale || !routing.locales.includes(locale as Locale))) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import(`../messages/en.json`)
        : import(`../messages/${locale}.json`)
      )
    ).default
  };
});