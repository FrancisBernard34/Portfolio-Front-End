import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function SuccessSubmissionPage() {
  const t = await getTranslations('SuccessSubmission');
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#1E1E1E] text-white pb-20 gap-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold terminal-text">
          {t('title')}
        </h1>
        <p className="text-lg sm:text-xl mt-4">
          {t('description')}
        </p>
      </div>
      <Link
        href="/"
        className="text-light_orange hover:underline flex items-center gap-2"
      >
        <ArrowLeft />
        {t('button-text')}
      </Link>
    </main>
  );
}
