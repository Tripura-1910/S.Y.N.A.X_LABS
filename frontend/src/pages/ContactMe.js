import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

import { FaGithub,
 FaLinkedin,
  FaInstagram, } from "react-icons/fa";
import { toast } from "react-toastify";
import { FaPersonDotsFromLine } from "react-icons/fa6";

const ContactMe = () => {
  const form = useRef();
  const [, setLoading] = useState(false);
  const contacts = [
    
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+91 7902901032",
      link: "https://wa.me/917902901032",
      color: "text-green-400",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@samueltthomas2002@gmail.com",
      link: "mailto:samueltthomas2002@gmail.com",
      color: "text-blue-400",
    },
    {
      icon: FaInstagram,
      title: "Instagram",
      value: "@S.Y.N.A.X_LABS",
      link: "https://www.instagram.com/s.y.n.a.x_labs?igsh=a3J4NTJteHpjN3Mz",
      color: "text-pink-400",
    },
    {
      icon: FaGithub,
      title: "GitHub",
      value: "github.com/Tripura-1910",
      link: "https://github.com/Tripura-1910",
      color: "text-white",
    },
    {
      icon: FaLinkedin,
      title: "LinkedIn",
      value: "S.Y.N.A.X LABS",
      link: "https://linkedin.com",
      color: "text-cyan-400",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Piravom, Ernakulam, Kerala",
      link: "#",
      color: "text-yellow-400",
    },
    {
      icon: FaPersonDotsFromLine,
      title: "PortFolio",
      value: "portfolio.samuel",
      link: "https://portfolio-one-ochre-63.vercel.app/",
      color: "text-white",
    },
  ];

  const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const sendEmail = async (e) => {
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
    return toast.error("Please enter a valid project type");
  }

  if (!message || message.length < 20) {
    return toast.error(
      "Please describe your project in at least 20 characters"
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

    toast.success("Message sent successfully!");
    form.current.reset();
  } catch (error) {
    toast.error("Failed to send message");
    console.error(error);
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black"
          >
            Contact <span className="text-blue-500">S.Y.N.A.X LABS</span>
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg">
            Have a project idea, academic requirement, or software solution
            in mind? Reach out and let's build something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {contacts.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -10 }}
                  className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/30 transition-all"
                >
                  <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6">
                    <Icon size={30} className={item.color} />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-400 break-all">
                    {item.value}
                  </p>
                </motion.a>
              );
            })}

          </div>

        </div>
      </section>

      {/* Contact Form */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="max-w-5xl mx-auto rounded-3xl border border-slate-800 bg-slate-900 overflow-hidden">

            <div className="grid lg:grid-cols-2">

              {/* Left */}
              <div className="p-10 bg-gradient-to-br from-blue-600/10 to-cyan-500/10">

                <h2 className="text-4xl font-black mb-6">
                  Let's Discuss Your Project
                </h2>

                <p className="text-slate-300 leading-relaxed">
                  Whether you're a BCA, MCA, B.Tech student looking
                  for project assistance or a business seeking software
                  solutions, we're here to help.
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">
                    <MessageCircle className="text-green-400" />
                    <span>Quick WhatsApp Support</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-blue-400" />
                    <span>Email Consultation</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Send className="text-cyan-400" />
                    <span>Project Guidance & Documentation</span>
                  </div>

                </div>

              </div>

              {/* Right */}
              <div className="p-10">

                <form 
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6">

                  <div>
                    <label className="block mb-2 text-slate-400">
                      Full Name
                    </label>

                 <input
  type="text"
  name="name"
  placeholder="Enter your name"
  minLength={3}
  maxLength={50}
  required
  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
/>
                  </div>

                  <div>
                    <label className="block mb-2 text-slate-400">
                      Email Address
                    </label>

                  <input
  type="email"
  name="email"
  placeholder="Enter your email"
  autoComplete="email"
  required
  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
/>
                  </div>

                  <div>
                    <label className="block mb-2 text-slate-400">
                      Project Type
                    </label>

                    <input
  type="text"
  name="project"
  placeholder="MCA Project, Website, Software..."
  minLength={3}
  maxLength={100}
  required
  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
/>
                  </div>

                  <div>
                    <label className="block mb-2 text-slate-400">
                      Message
                    </label>

                   <textarea
  rows="5"
  name="message"
  placeholder="Tell us about your project..."
  minLength={20}
  maxLength={1000}
  required
  className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
/>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-[1.02] transition"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container mx-auto px-6">

          <div className="max-w-5xl mx-auto rounded-3xl border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-12 text-center">

            <MessageCircle
              size={60}
              className="mx-auto text-green-400 mb-6"
            />

            <h2 className="text-4xl font-black">
              Need Immediate Assistance?
            </h2>

            <p className="mt-6 text-slate-300 text-lg">
              Chat directly on WhatsApp for quick project discussions,
              pricing, documentation support, and technical guidance.
            </p>

            <a
              href="https://wa.me/917902901032"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 px-8 py-4 rounded-xl bg-green-500 text-black font-bold hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactMe;