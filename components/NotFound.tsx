import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function NotFound() {
  const t = useTranslations("NotFound");
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="text-white text-3xl">{t("title")}</div>
      <Link href="/" className="text-light_orange">{t("button-text")}</Link>
    </div>
  );
}
