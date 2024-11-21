"use client";

import { signInWithProvider } from "@/app/actions";

export const ProviderLoginButtons = () => {
  const handleProviderSignIn = async (provider: "google" | "github") => {
    await signInWithProvider(provider);
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <button
        type="button"
        className="border border-gray-300 px-4 py-2 rounded"
        onClick={() => handleProviderSignIn("google")}
      >
        Sign in with Google
      </button>
      <button
        type="button"
        className="border border-gray-300 px-4 py-2 rounded"
        onClick={() => handleProviderSignIn("github")}
      >
        Sign in with GitHub
      </button>
    </div>
  );
};
