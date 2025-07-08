"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import WaitlistForm from "./components/WaitlistForm";

export default function MoveAppLanding() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const features = [
    { emoji: "🎯", title: "Real-Time Drop Map" },
    { emoji: "🗓️", title: "Live Events Feed" },
    { emoji: "🤝", title: "Linkups & Meetups" },
    { emoji: "🔥", title: "Hype Score System" },
    { emoji: "📍", title: "Location-Based Sorting" },
    { emoji: "💬", title: "Anonymous Vibe Chat" },
  ];

  const infoBlocks = [
    {
      title: "Explore Any Event",
      description:
        "Discover everything — from wild parties to pickup games, concerts, and pop-ups, no matter where you are.",
    },
    {
      title: "Instant Updates",
      description:
        "Get real-time notifications so you never miss the moves that matter most to you.",
    },
    {
      title: "Connect Effortlessly",
      description:
        "Easily meet up with others and chat anonymously or openly to keep the vibe flowing.",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-6 py-4 bg-black bg-opacity-80 backdrop-blur-md border-b border-gray-900">
        <h1 className="text-5xl font-extrabold tracking-wide">What&rsquo;s The Move</h1>
        <div className="space-x-8 hidden md:flex text-lg font-medium">
          <a href="#home" className="hover:text-purple-400 transition">
            Home
          </a>
          <a href="#features" className="hover:text-purple-400 transition">
            Features
          </a>
          <a href="#waitlist" className="hover:text-purple-400 transition">
            Join Waitlist
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="text-center py-40 px-6 bg-gradient-to-b from-black via-transparent to-black"
      >
        <motion.h1
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-8xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent"
        >
          What&rsquo;s The Move
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl max-w-3xl mx-auto text-gray-400 mb-12"
        >
          A real-time interactive map + feed to discover anything — parties, pickup
          basketball, popups, jam sessions, or chill kickbacks — wherever you are.
        </motion.p>
        {!submitted ? (
          <WaitlistForm />
        ) : (
          <p className="text-green-400 text-lg font-medium mt-6">
            🔥 You&rsquo;re on the list. We&rsquo;ll notify you at launch.
          </p>
        )}
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-purple-500/70">
          ⚙️ Interactive Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
          {features.map(({ emoji, title }, i) => (
            <motion.div
              key={i}
              whileHover={{
                scale: 1.08,
                borderColor: "#7c3aed",
                boxShadow: "0 0 12px #7c3aed",
              }}
              className="bg-zinc-900 rounded-3xl shadow-lg p-10 text-center border border-gray-800 cursor-pointer select-none"
            >
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                className="text-7xl mb-5"
              >
                {emoji}
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-300">{title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INFO BLOCKS */}
      <section className="py-20 px-6 max-w-6xl mx-auto flex flex-col sm:flex-row justify-around gap-10">
        {infoBlocks.map(({ title, description }, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8, boxShadow: "0 0 15px #7c3aed" }}
            className="flex-1 bg-zinc-900 rounded-2xl p-8 text-center cursor-pointer transition-shadow border border-transparent hover:border-purple-700"
          >
            <h4 className="text-2xl font-bold mb-3 text-purple-500">{title}</h4>
            <p className="text-gray-400 text-lg">{description}</p>
          </motion.div>
        ))}
      </section>

      {/* WAITLIST CTA */}
      <section
        id="waitlist"
        className="py-24 px-6 text-center bg-black"
      >
        <h2 className="text-6xl font-extrabold mb-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-transparent bg-clip-text">
          Be First to Know
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 text-lg">
          Join the early list and get notified when we launch in your city. We&rsquo;re
          rolling out move by move.
        </p>
        {!submitted ? (
          <WaitlistForm />
        ) : (
          <p className="text-green-400 text-lg font-medium">✅ You&rsquo;re all set. Keep an eye on your inbox.</p>
        )}
      </section>

      {/* FOOTER */}
      <footer className="text-center py-12 text-gray-500 text-sm border-t border-gray-900 bg-black">
        <p>© 2025 WTM — What&rsquo;s The Move?</p>
      </footer>
    </div>
  );
}
