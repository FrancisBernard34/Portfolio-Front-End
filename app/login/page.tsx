"use client";

import { useFormStatus } from "react-dom";
import { useEffect, useActionState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { loginUser } from "../actions/loginUser";
import { useRouter } from "next/navigation";

// Submit Button Component with pending state
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full p-4 text-base bg-[#2a2a2a] text-white terminal-text hover:bg-[#1f1e1e] rounded-xl transition-colors cursor ${
        pending ? "opacity-70 cursor-not-allowed" : ""
      }`}
    >
      {pending ? "Loading" : "Login"}
    </button>
  );
}

type LoginResponse = {
  token?: string;
  user?: {
    id: string;
    email: string;
    name?: string;
  };
};

type State = {
  status: "idle" | "error" | "success";
  message?: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
  data?: LoginResponse;
};

export default function LoginPage() {
  const router = useRouter();
  
  const initialState: State = {
    status: "idle",
    message: "",
    errors: {},
  };

  const [state, formAction] = useActionState(loginUser, initialState);

  // Handle successful login
  useEffect(() => {
    if (state?.status === "success") {
      router.push("/dashboard"); // Redirect to dashboard on success
    }
  }, [state, router]);

  const formVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <main className="min-h-screen bg-[#1E1E1E] flex flex-col items-center justify-center p-4 px-8 sm:px-4 relative">
      <div className="floating-circle floating-circle-1 top-[10%] left-[10%]" />
      <div className="floating-circle floating-circle-2 bottom-[20%] right-[15%]" />
      <div className="floating-circle floating-circle-3 top-[40%] right-[30%]" />

      <Link
        href="/"
        className="absolute top-8 left-8 text-white/80 hover:text-[#D35F0C] transition-colors flex items-center gap-2 terminal-text"
        tabIndex={0}
        aria-label="Go back to home"
      >
        <ArrowLeft className="w-5 h-5" />
        Back_to_Home
      </Link>

      <motion.div
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-md"
      >
        <div className="torn-paper mb-8 text-center">
          <h1 className="text-3xl font-bold terminal-text">Login_</h1>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg relative overflow-hidden">
          <form action={formAction} className="space-y-6 relative z-10">
            {/* Error Messages */}
            {state?.status === "error" && (
              <div className="p-3 rounded-lg bg-red-100 border border-red-300 text-red-500 text-sm terminal-text">
                {state.message || "Please check your credentials and try again."}
              </div>
            )}
            
            <div>
              <label
                htmlFor="email"
                className="block text-base mb-2 terminal-text text-[#1E1E1E]"
              >
                Email_
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-4 text-base rounded-xl bg-[#D35F0C]/30 text-[#1E1E1E] terminal-text focus:outline-none focus:ring-2 focus:ring-[#D35F0C] placeholder:text-[#636262]"
                placeholder="Enter your email"
                aria-describedby={state?.errors?.email ? "email-error" : undefined}
              />
              {state?.errors?.email && (
                <p id="email-error" className="mt-1 text-sm text-red-500 terminal-text">
                  {state.errors.email[0]}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-base mb-2 terminal-text text-[#1E1E1E]"
              >
                Password_
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="w-full p-4 text-base rounded-xl bg-[#D35F0C]/30 text-[#1E1E1E] terminal-text focus:outline-none focus:ring-2 focus:ring-[#D35F0C] placeholder:text-[#636262]"
                placeholder="Enter your password"
                aria-describedby={state?.errors?.password ? "password-error" : undefined}
              />
              {state?.errors?.password && (
                <p id="password-error" className="mt-1 text-sm text-red-500 terminal-text">
                  {state.errors.password[0]}
                </p>
              )}
            </div>

            <SubmitButton />
          </form>
        </div>
      </motion.div>
    </main>
  );
}
