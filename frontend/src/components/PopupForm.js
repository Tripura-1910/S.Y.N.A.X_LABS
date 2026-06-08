import React, { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const ProjectPopup = ({ isOpen, onClose }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

  // ESC close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(form.current);

  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const project = formData.get("project")?.trim();
  const message = formData.get("message")?.trim();

  if (!name || name.length < 3) {
    return toast.error("Please enter a valid name");
  }

  if (!validateEmail(email)) {
    return toast.error("Please enter a valid email address");
  }

  if (!project || project.length < 3) {
    return toast.error("Please enter a project type");
  }

  if (!message || message.length < 20) {
    return toast.error(
      "Please provide more details about your project (minimum 20 characters)"
    );
  }

  setLoading(true);

  try {
    await emailjs.sendForm(
      "service_xs797fp",
      "template_r47nqhp",
      form.current,
      "uxETAUVZJdDUlICYT"
    );

    toast.success("🚀 Message sent successfully!");
    form.current.reset();
    onClose();
  } catch (error) {
    toast.error("❌ Failed to send message");
    console.error(error);
  } finally {
    setLoading(false);
  }
};

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xl"
    >
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-3xl rounded-full -top-32 -left-32" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-500/20 blur-3xl rounded-full bottom-0 right-0" />

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-xl relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl p-8"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white">
              Start Your Project 🚀
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Tell us about your idea — we’ll build it.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <X className="text-white" />
          </button>
        </div>

        {/* FORM (IMPORTANT FIX: ref attached here) */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-xl bg-black/30 text-white border border-white/10 focus:border-blue-500 outline-none"
            required
          />

         <input
  type="email"
  name="email"
  placeholder="Email Address"
  autoComplete="email"
  className="w-full px-4 py-3 rounded-xl bg-black/30 text-white border border-white/10 focus:border-blue-500 outline-none"
  required
/>

          <input
            name="project"
            placeholder="Project Type"
            className="w-full px-4 py-3 rounded-xl bg-black/30 text-white border border-white/10 focus:border-blue-500 outline-none"
            required
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Describe your idea..."
            className="w-full px-4 py-3 rounded-xl bg-black/30 text-white border border-white/10 focus:border-blue-500 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Sending..." : "Submit Request"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default ProjectPopup;