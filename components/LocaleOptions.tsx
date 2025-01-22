import { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";
import { usePathname, useRouter } from "@/i18n/routing";

type Props = {
  onClose: () => void;
  style: React.CSSProperties;
};

export default function LocaleOptions({ onClose, style }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params?.locale as string;

  const handleSelectChange = (locale: Locale) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale }
    );
    onClose();
  };

  return (
    <ul 
      role="listbox"
      className="absolute z-[80] mt-1 max-h-60 w-[120px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-light_orange ring-opacity-20 focus:outline-none sm:text-sm"
      style={style}
      onMouseDown={(e) => e.stopPropagation()}
    >
      {routing.locales.map((locale) => (
        <li
          key={locale}
          role="option"
          aria-selected={locale === currentLocale}
          onClick={(e) => {
            e.stopPropagation();
            handleSelectChange(locale);
          }}
          className={`relative cursor-pointer select-none py-2 pl-3 pr-9 transition-colors
            ${locale === currentLocale 
              ? 'bg-light_orange/10 text-light_orange' 
              : 'text-gray-900 hover:bg-light_orange/5 hover:text-light_orange'
            }`}
        >
          <span className="block truncate">
            {locale.toUpperCase()}
          </span>
          {locale === currentLocale && (
            <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-light_orange">
              ✓
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
