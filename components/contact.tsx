"use client";

import { useActionState, useEffect } from "react";
import { useFormStatus } from "react-dom";
import { handleContactFormSubmit } from "../app/actions/submitFormContact";
import { useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  const t = useTranslations('Contact');
  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full p-4 text-sm sm:text-base bg-[#2a2a2a] text-white terminal-text hover:bg-[#1f1e1e] rounded-xl transition-colors cursor ${
        pending ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Loading" : t('form.button.label')}
    </button>
  );
};

type ContactResponse = {
  message: string;
  error?: string;
  statusCode?: number;
};

type State = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  data?: ContactResponse;
};

export default function Contact() {
  const router = useRouter();
  const t = useTranslations('Contact');

  const initialState: State = {
    status: "idle",
    message: "",
    errors: {},
  };

  const [state, formAction] = useActionState(
    handleContactFormSubmit,
    initialState
  );

  useEffect(() => {
    if (state?.status === "success") {
      router.push("/_success-submission");
    }
  }, [state, router]);
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#f47e00] text-[#1E1E1E] py-20"
    >
      <div className="container mx-auto px-8 sm:px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 terminal-text text-white">
          {t('title')}
        </h2>
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg w-full lg:max-w-[70%] xl:max-w-[50%] mx-auto relative overflow-hidden">
          {/* Floating Circles */}
          <div className="floating-circle floating-circle-1 top-[-20px] left-[-20px]" />
          <div className="floating-circle floating-circle-2 bottom-[-30px] right-[-20px]" />
          <div className="floating-circle floating-circle-3 top-[40%] left-[60%]" />

          <div className="max-w-2xl mx-auto relative z-10 selection:bg-black/20">
            <form action={formAction} className="space-y-6">
              {/* Error Messages */}
              {state?.status === "error" && (
                <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-red-500 text-sm terminal-text">
                  {state.message || t('form.error-message')}
                </div>
              )}
              <div>
                <label
                  htmlFor="name"
                  className="block text-base sm:text-xl mb-2 terminal-text text-[#1E1E1E]"
                >
                  {t('form.name.label')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-4 text-sm sm:text-base rounded-xl bg-[#f47e00]/30 text-[#1E1E1E] terminal-text focus:outline-none placeholder:text-[#636262]"
                  placeholder={t('form.name.placeholder')}
                />
                {state?.errors?.name && (
                  <div className="text-red-500 text-sm terminal-text">
                    {state.errors.name.join(", ")}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-base sm:text-xl mb-2 terminal-text text-[#1E1E1E]"
                >
                  {t('form.email.label')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-4 text-sm sm:text-base rounded-xl bg-[#f47e00]/30 text-[#1E1E1E] terminal-text focus:outline-none placeholder:text-[#636262]"
                  placeholder={t('form.email.placeholder')}
                />
                {state?.errors?.email && (
                  <div className="text-red-500 text-sm terminal-text">
                    {state.errors.email.join(", ")}
                  </div>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-base sm:text-xl mb-2 terminal-text text-[#1E1E1E]"
                >
                  {t('form.message.label')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full p-4 text-sm sm:text-base rounded-xl bg-[#f47e00]/30 text-[#1E1E1E] terminal-text focus:outline-none placeholder:text-[#636262]"
                  placeholder={t('form.message.placeholder')}
                />
                {state?.errors?.message && (
                  <div className="text-red-500 text-sm terminal-text">
                    {state.errors.message.join(", ")}
                  </div>
                )}
              </div>
              <SubmitButton />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
