import { useState } from "react";

export default function WaitlistForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xpwrnawr", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: data,
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        className="bg-zinc-900 text-white placeholder-gray-500 px-5 py-3 rounded-xl w-full sm:w-auto border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition px-8 py-3 rounded-xl font-semibold"
      >
        Join Waitlist
      </button>

      {status === "success" && (
        <p className="text-green-400 text-sm mt-3">You&apos;re on the list! ✅</p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-3">Something went wrong. Try again.</p>
      )}
    </form>
  );
} 