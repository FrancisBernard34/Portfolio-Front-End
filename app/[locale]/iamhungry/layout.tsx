import { Locale } from '@/i18n/routing';
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: Locale}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Hungry'});
  return {
    title: t('title'),
  };
}

export default function HungryLayout({ children }: { children: React.ReactNode }) {
  return children;
}