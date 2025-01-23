import Image from "next/image";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-[#f47e00] text-[#1E1E1E] py-20"
    >
      <div className="w-full lg:container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 pl-4 lg-max:pl-0 terminal-text text-white">
          {t("title")}
        </h2>
        <div className="w-full flex flex-col lg-max:flex-row gap-8 xl:gap-12 items-center justify-center selection:bg-gray-300">
          <div className="w-[90%] lg:w-2/3 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg relative overflow-hidden">
            {/* Floating Circles */}
            <div className="floating-circle floating-circle-1 top-[-20px] left-[-20px]" />
            <div className="floating-circle floating-circle-2 bottom-[-40px] right-[270px] sm-max:right-[450px]" />
            <div className="floating-circle floating-circle-3 top-[40%] left-[70%]" />

            <p className="text-base sm:text-xl mb-6 terminal-text text-left">
              {t.rich("description-1", {
                span: (chunks) => (
                  <span className="text-[#D35F0C] font-semibold">{chunks}</span>
                ),
              })}
            </p>
            <p className="text-base sm:text-xl mb-6 terminal-text text-left">
              {t.rich("description-2", {
                span: (chunks) => (
                  <span className="text-[#D35F0C] font-semibold">{chunks}</span>
                ),
              })}
            </p>
            <p className="text-base sm:text-xl mb-6 terminal-text text-left">
              {t.rich("description-3", {
                span: (chunks) => (
                  <span className="text-[#D35F0C] font-semibold">{chunks}</span>
                ),
              })}
            </p>
            <p className="text-base sm:text-xl mb-6 terminal-text text-left">
              {t.rich("description-4", {
                span: (chunks) => (
                  <span className="text-[#D35F0C] font-semibold">{chunks}</span>
                ),
              })}
            </p>
          </div>
          <div className="w-fit p-10 aspect-square bg-white/10 rounded-xl flex items-center justify-center select-none pointer-events-none">
            <Image
              className="w-[200px] h-[200px] sm-min:w-[200px] sm-min:h-[200px] lg:w-[300px] lg:h-[300px] 2xl:w-[500px] 2xl:h-[500px] "
              src="/profile.png"
              alt="Profile"
              width={600}
              height={600}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
