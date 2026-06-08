import React from "react";
import {
  User,
  Briefcase,
  Mail,
  Phone,
  GraduationCap,
  MapPin,
  Award,
} from "lucide-react";

import OwnerImage from "../assets/Owner.png"

const AboutUs = () => {
  const projects = [
    {
      title: "AI Voice Assistant",
      description:
        "A fully voice-controlled AI assistant capable of conversations, task automation, and smart integrations.",
    },
    {
      title: "POS Billing Software",
      description:
        "Modern billing and inventory management software with barcode scanning and customer management.",
    },
    {
      title: "E-Commerce Platforms",
      description:
        "Custom online stores with secure payments, inventory tracking, and admin dashboards.",
    },
    {
      title: "Business Websites",
      description:
        "Fast and responsive websites for startups, local businesses, and professionals.",
    },
  ];

  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "AI Integration",
    "REST APIs",
    "Tailwind CSS",
    "Vercel Deployment",
    "Cloud Hosting",
    "Automation",
    "Java",
    "Flutter",
    "PHP",
    "Linux"
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              About <span className="text-cyan-400">Us</span>
            </h1>

            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Building modern software, AI solutions, and digital experiences
              that help businesses grow faster.
            </p>
          </div>
        </div>
      </section>

    {/* Owner Section */}
<section className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid lg:grid-cols-2 gap-12 items-center">

    {/* Left - Photo */}
    <div className="flex justify-center">
      <div className="relative">

        <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full" />

        <img
          src={OwnerImage} // put your image in public folder
          alt="Samuel T Thomas"
          className="relative w-80 h-80 object-cover rounded-3xl border-4 border-cyan-500/40 shadow-2xl"
        />
        <div className="mt-6 text-center">
  <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-full">
    <User size={18} className="text-cyan-400" />
    <span className="text-sm">
      Founder & Lead Developer
    </span>
  </div>
</div>

      </div>
    </div>

    {/* Right - Details */}
    <div>

      <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm">
        Founder & Full Stack Developer
      </span>

      <h2 className="text-5xl font-bold mt-5 mb-3">
        Samuel T Thomas
      </h2>
      <div className="flex flex-wrap gap-3 mt-4 mb-6">
  <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm">
    Full Stack Developer
  </span>

  <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm">
    AI Engineer
  </span>

  <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm">
    Entrepreneur
  </span>
</div>

      <p className="text-slate-400 text-lg mb-8">
        Passionate software developer specializing in AI solutions,
        business automation, cloud applications, POS systems and
        modern web technologies.
      </p>

      {/* Qualifications */}
   {/* Qualification & Details */}
<div className="grid sm:grid-cols-2 gap-4 mb-8">

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
    <GraduationCap className="text-cyan-400" size={28} />
    <div>
      <h4 className="font-semibold">BCA Graduate</h4>
      <p className="text-sm text-slate-400">
        Bachelor of Computer Applications
      </p>
    </div>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
    <Award className="text-cyan-400" size={28} />
    <div>
      <h4 className="font-semibold">+2 Education</h4>
      <p className="text-sm text-slate-400">
        Higher Secondary Education
      </p>
    </div>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
    <Award className="text-cyan-400" size={28} />
    <div>
      <h4 className="font-semibold">10th Standard</h4>
      <p className="text-sm text-slate-400">
        Secondary School Education
      </p>
    </div>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4">
    <MapPin className="text-cyan-400" size={28} />
    <div>
      <h4 className="font-semibold">Piravom, Kerala</h4>
      <p className="text-sm text-slate-400">
        India
      </p>
    </div>
  </div>

</div>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
          <h3 className="text-3xl font-bold text-cyan-400">100+</h3>
          <p className="text-slate-400">Projects Built</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
          <h3 className="text-3xl font-bold text-cyan-400">2+</h3>
          <p className="text-slate-400">Years Experience</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
          <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
          <p className="text-slate-400">Clients Served</p>
        </div>

        <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800">
          <h3 className="text-3xl font-bold text-cyan-400">Kerala</h3>
          <p className="text-slate-400">Based In India</p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* Skills */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technologies & Skills
          </h2>

          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-5 py-3 bg-slate-800 rounded-full border border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 p-8 rounded-3xl"
            >
              <Briefcase className="text-cyan-400 mb-4" />

              <h3 className="text-xl font-semibold mb-3">
                {project.title}
              </h3>

              <p className="text-gray-400">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold text-cyan-400">100+</h3>
              <p className="text-gray-400">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">2+</h3>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">50+</h3>
              <p className="text-gray-400">Business Clients</p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400">Commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl p-12">
          <h2 className="text-4xl font-bold mb-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-300 mb-8">
            Looking for a developer to build your next software product,
            website, AI solution, or business platform?
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>+91 7902901032</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>samueltthomas2002@gmail.com</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;