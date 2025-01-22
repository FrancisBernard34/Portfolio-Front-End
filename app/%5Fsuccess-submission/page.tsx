import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function SuccessSubmissionPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#1E1E1E] text-white pb-20 gap-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl font-bold terminal-text">
          Success_Submission
        </h1>
        <p className="text-lg sm:text-xl mt-4">
          Your message has been sent successfully.
        </p>
      </div>
      <Link href="/" className="text-light_orange hover:underline flex items-center gap-2">
        <ArrowLeft />
        Go back to the homepage
      </Link>
    </main>
  );
}
