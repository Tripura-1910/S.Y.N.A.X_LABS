import React, { useState } from "react";
import {
  Code2,
  Globe,
  Smartphone,
  Database,
  Cloud,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

import ProjectPopup from "../components/PopupForm";

const services = [
  {
    icon: <Code2 size={32} />,
    title: "Custom Software Development",
    description:
      "Scalable and secure software solutions tailored to your business requirements.",
  },
  {
    icon: <Globe size={32} />,
    title: "Web Development",
    description:
      "Modern, responsive, and high-performance websites built with the latest technologies.",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile App Development",
    description:
      "Cross-platform Android and iOS applications with exceptional user experiences.",
  },
  {
    icon: <Database size={32} />,
    title: "Backend & API Development",
    description:
      "Robust server-side architectures, APIs, and database solutions for modern applications.",
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Solutions",
    description:
      "Deploy, manage, and scale applications efficiently using cloud infrastructure.",
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Security & Maintenance",
    description:
      "Continuous monitoring, security audits, updates, and long-term technical support.",
  },
];

const Services = () => {
  const [open, setOpen] = useState(false);
  return (


    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}

        <ProjectPopup isOpen={open} onClose={() => setOpen(false)} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/10 to-cyan-500/20 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32 text-center">
          <span className="inline-block px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
            OUR SERVICES
          </span>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Transforming Ideas Into
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Digital Excellence
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-400 text-lg md:text-xl">
            At S.Y.N.A.X Labs, we design, build, and scale innovative digital
            solutions that help businesses thrive in a rapidly evolving world.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-900/40">
  <div className="max-w-7xl mx-auto px-6">
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold">
        STUDENT PROJECT SERVICES
      </span>

      <h2 className="text-4xl md:text-5xl font-black text-white mt-6 mb-4">
        Academic Project Solutions for
        <span className="text-blue-500"> Future Developers</span>
      </h2>

      <p className="max-w-3xl mx-auto text-slate-400 text-lg">
        We help BCA, MCA, B.Tech, M.Tech, and Diploma students build
        industry-level projects with complete source code, documentation,
        guidance, and deployment support.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all">
        <h3 className="text-2xl font-bold text-white mb-4">
          Mini Projects
        </h3>
        <p className="text-slate-400">
          Custom and ready-made mini projects for BCA, MCA, B.Tech,
          Diploma, and Computer Science students.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all">
        <h3 className="text-2xl font-bold text-white mb-4">
          Major Projects
        </h3>
        <p className="text-slate-400">
          Full-scale academic projects built using modern technologies
          such as MERN Stack, Java, Python, and AI.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all">
        <h3 className="text-2xl font-bold text-white mb-4">
          Documentation
        </h3>
        <p className="text-slate-400">
          Professional project reports, synopsis, UML diagrams,
          presentations, and IEEE-format documentation.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all">
        <h3 className="text-2xl font-bold text-white mb-4">
          AI & Machine Learning
        </h3>
        <p className="text-slate-400">
          Innovative AI, Machine Learning, and Data Science projects
          designed for academic and research purposes.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all">
        <h3 className="text-2xl font-bold text-white mb-4">
          Project Guidance
        </h3>
        <p className="text-slate-400">
          One-to-one mentoring, project architecture explanation,
          implementation support, and technical guidance.
        </p>
      </div>

      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-blue-500/40 transition-all">
        <h3 className="text-2xl font-bold text-white mb-4">
          Viva & Presentation Support
        </h3>
        <p className="text-slate-400">
          Prepare confidently with project explanations,
          presentation materials, and viva preparation sessions.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

      <div className="text-center">
        <h3 className="text-5xl font-black text-blue-500">100+</h3>
        <p className="text-slate-400 mt-2">Projects Delivered</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-black text-blue-500">50+</h3>
        <p className="text-slate-400 mt-2">Students Assisted</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-black text-blue-500">15+</h3>
        <p className="text-slate-400 mt-2">Technologies Covered</p>
      </div>

      <div className="text-center">
        <h3 className="text-5xl font-black text-blue-500">24/7</h3>
        <p className="text-slate-400 mt-2">Support Available</p>
      </div>

    </div>
  </div>
</section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900/50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">
              Our Development Process
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A proven workflow that ensures successful project delivery from
              concept to deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              "Discovery",
              "Planning",
              "Development",
              "Launch",
            ].map((step, index) => (
              <div
                key={index}
                className="relative p-8 rounded-3xl border border-slate-800 bg-slate-950 text-center"
              >
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-xl font-bold">
                  {index + 1}
                </div>

                <h3 className="text-xl font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-400 font-semibold">
              WHY S.Y.N.A.X LABS
            </span>

            <h2 className="text-5xl font-black mt-4 mb-6">
              Building Future-Ready Solutions
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              We combine innovation, technical expertise, and strategic
              thinking to deliver software products that drive growth and
              efficiency.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              "Experienced Development Team",
              "Modern Technologies & Frameworks",
              "Scalable Architecture",
              "Fast Delivery & Agile Process",
              "Long-Term Support & Maintenance",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900 border border-slate-800"
              >
                <div className="w-3 h-3 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[40px] overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-500 p-[1px]">
          <div className="bg-slate-950 rounded-[40px] px-8 py-16 text-center">
            <h2 className="text-5xl font-black mb-4">
              Ready to Build Something Amazing?
            </h2>

            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your next project and create innovative digital
              experiences together.
            </p>

            <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition-all">
              Get Started
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;