import { useState } from "react";

export default function WaitlistForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    setStatus("loading");

    try {
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
        throw new Error("Formspree submission failed.");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="w-full">
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
          disabled={status === "loading"}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition px-8 py-3 rounded-xl font-semibold"
        >
          {status === "loading" ? "Submitting..." : "Join Waitlist"}
        </button>
      </form>

      {status === "success" && (
        <p className="text-green-400 text-sm mt-3 text-center">
          🎉 You&apos;re on the list!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-sm mt-3 text-center">
          ❌ Something went wrong. Try again.
        </p>
      )}
    </div>
  );
} 