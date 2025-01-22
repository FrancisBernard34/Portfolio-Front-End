"use client";

import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/types/locale";

export default function LanguageSelector({locale}: {locale: Locale}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${locale}/${path}`);
  };

  return (
    <div className="flex">
      <select value={locale} onChange={handleLanguageChange} className="text-white bg-blue-500 border-none focus:outline-none focus:ring-0">
        <option value="en">EN</option>
        <option value="pt-br">PT-BR</option>
        <option value="es">ES</option>
      </select>
    </div>
  );
}