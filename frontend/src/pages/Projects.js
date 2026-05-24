import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  Star,
  Award,
  CheckCircle,
} from "lucide-react";

import ProjectPopup from "../components/PopupForm";

import image1 from "../assets/R.jpg"
import image2 from "../assets/Maintenance-image-1920x1067.jpeg"
import image3 from "../assets/hospital.png"
import image4 from "../assets/aimern1.jpg"
import image5 from "../assets/kj.jpg"
import image6 from "../assets/billing.avif"
import image7 from "../assets/synax.png"

const projects = [
  {
    title: "Online Aquarium Management System",
    category: "MCA Major Project",
    tech: "React, Node.js, MongoDB",
    description:
      "Complete aquarium inventory, customer orders, delivery management and admin dashboard.",
    image:
      image1,
  },
  {
    title: "AI Student Performance Predictor",
    category: "BCA Mini Project",
    tech: "Python, Machine Learning",
    description:
      "Machine learning model to predict student academic performance.",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  },
  {
    title: "Hospital Management System",
    category: "MCA Major Project",
    tech: "Java, MySQL",
    description:
      "Patient management, appointment booking, billing and reporting system.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
  },
   {
    title: "Apartment Management System",
    category: "Management System",
    tech: "HTML, CSS, Bootstrap, JavaScript, PHP, MySQL",
    description:
      "A complete apartment management platform for handling residents, maintenance requests, payments, notices, and administrative operations.",
    image: image2,
  },

  {
    title: "Hospital Management System",
    category: "Healthcare Solution",
    tech: "HTML, CSS, Bootstrap, JavaScript, PHP, MySQL",
    description:
      "Comprehensive hospital management software featuring patient records, appointments, doctor management, billing, and reporting modules.",
    image: image3,
  },

  {
    title: "Advanced E-Commerce System",
    category: "AI Powered E-Commerce",
    tech: "React, Node.js, MongoDB, AI Integration",
    description:
      "Multi-module e-commerce platform with AI chatbot assistance, voice-based navigation, smart product recommendations, order tracking, inventory management, and customer analytics.",
    image: image4,
    featured: true,
  },

  {
    title: "College Event Management System",
    category: "Educational Platform",
    tech: "HTML, CSS, Bootstrap, JavaScript, PHP, MySQL",
    description:
      "Event registration, participation management, scheduling, notifications, certificate generation, and administrative dashboards for colleges.",
    image: image5,
  },

  {
    title: "Retail Shop Billing Software",
    category: "Business Software",
    tech: "React, Node.js, MongoDB",
    description:
      "Modern billing and inventory management solution currently under development, designed for retail businesses with invoice generation, stock management, sales tracking, and reporting.",
    image: image6,
    status: "In Development",
  },

  {
    title: "S.Y.N.A.X Labs Official Website",
    category: "Company Portfolio",
    tech: "React, Tailwind CSS, Framer Motion",
    description:
      "Modern company website showcasing services, projects, student solutions, academic guidance, and digital innovation under the S.Y.N.A.X Labs brand.",
    image: image7,
  },

];

const successStories = [
  {
    title: "MCA Final Year Student",
    text: "Successfully submitted major project with complete documentation and secured excellent evaluation.",
  },
  {
    title: "BCA Mini Project",
    text: "Delivered within deadline including source code, report and presentation.",
  },
  {
    title: "Machine Learning Project",
    text: "Custom AI-based solution developed with full explanation and viva support.",
  },
];

const Projects = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-950 text-white min-h-screen">

      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <ProjectPopup isOpen={open} onClose={() => setOpen(false)} />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 blur-3xl" />

        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black"
          >
            Our <span className="text-blue-500">Projects</span>
          </motion.h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg">
            Explore some of the successful academic and software projects
            delivered by S.Y.N.A.X Labs for students and clients.
          </p>
        </div>
      </section>


      <div className="mb-20 rounded-3xl overflow-hidden border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-cyan-500/10 p-10">
  <div className="flex items-center gap-3 mb-4">
    <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm">
      ⭐ Flagship Project
    </span>
  </div>

  <h2 className="text-4xl font-black mb-4">
    AI-Powered E-Commerce Platform
  </h2>

  <p className="text-slate-300 text-lg max-w-4xl">
    A next-generation e-commerce solution featuring AI chatbot support,
    voice navigation, intelligent product recommendations, customer
    analytics, inventory management, order processing, and multi-role
    administration modules.
  </p>

  <div className="flex flex-wrap gap-3 mt-6">
    <span className="px-4 py-2 bg-slate-800 rounded-xl">
      AI Chatbot
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-xl">
      Voice Navigation
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-xl">
      Smart Recommendations
    </span>

    <span className="px-4 py-2 bg-slate-800 rounded-xl">
      Multi-Module System
    </span>
  </div>
</div>


      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">

          <div className="flex items-center gap-3 mb-12">
            <FolderGit2 className="text-blue-500" />
            <h2 className="text-4xl font-bold">
              Featured Projects
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />



                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold mt-4">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mt-3">
                    {project.description}
                  </p>

                  <div className="mt-4 text-sm text-cyan-400">
                    {project.tech}
                  </div>

                  

                  
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      

      {/* Success Stories */}
      <section className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-5xl font-black">
              Student Success Stories
            </h2>

            <p className="mt-4 text-slate-400">
              Helping students achieve project success through guidance,
              development, and documentation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {successStories.map((story, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="rounded-3xl bg-slate-900 border border-slate-800 p-8"
              >
                <Award className="text-yellow-400 mb-5" size={40} />

                <h3 className="text-xl font-bold mb-4">
                  {story.title}
                </h3>

                <p className="text-slate-400">
                  {story.text}
                </p>

                <div className="flex mt-5 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">

          <div className="max-w-5xl mx-auto rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-12 text-center">

            <CheckCircle
              size={60}
              className="mx-auto text-green-400 mb-6"
            />

            <h2 className="text-4xl font-black">
              Trusted by Students
            </h2>

            <p className="mt-6 text-slate-300 text-lg">
              From BCA and MCA projects to AI, Web Development,
              Java, Python and MERN Stack solutions, S.Y.N.A.X Labs
              has helped students complete their academic goals with
              confidence.
            </p>

            <button 
            onClick={() => setOpen(true)}
            className="mt-8 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition">
              Start Your Project
            </button>

          </div>

        </div>
      </section>

    </div>
  );
};

export default Projects;