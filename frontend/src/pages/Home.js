import React, { useState } from "react";
import {
  Rocket,
  CheckCircle,
  Bot,
  Brain,
  Database,
  Cpu,
  Sparkles,
  Briefcase,
  Globe,
  GitBranch,
  ArrowUpRight,
  ShieldCheck,
  BadgeDollarSign,
  Clock3,
  FileText,
  Headphones,
  FolderGit2,
} from "lucide-react";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Presentation,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiJsonwebtokens,
  SiFirebase,
} from "react-icons/si";
import ProjectPopup from "../components/PopupForm";
import { Link } from "react-router-dom";

const services = [
  {
    title: "AI & Machine Learning",
    desc: "Custom AI solutions, chatbots, recommendation systems, predictive analytics and automation.",
  },
  {
    title: "Python Development",
    desc: "Flask, Django, Automation Scripts, Data Processing and Enterprise Applications.",
  },
  {
    title: "Java Development",
    desc: "Desktop Applications, Spring Boot APIs and Enterprise Management Systems.",
  },
  {
    title: "MERN Stack Development",
    desc: "Modern web applications built using MongoDB, Express, React and Node.js.",
  },
  {
    title: "Mobile App Development",
    desc: "Android and cross-platform mobile applications for businesses and startups.",
  },
  {
    title: "Cloud Deployment",
    desc: "AWS, DigitalOcean, VPS deployment, CI/CD and production infrastructure.",
  },
  {
    title: "Academic Projects",
    desc: "BCA, MCA, B.Tech, M.Tech and Diploma final year projects.",
  },
  {
    title: "ERP & CRM Systems",
    desc: "Custom business management software for organizations.",
  },
];

const reasons = [
  {
    title: "100% Original Work",
    icon: ShieldCheck,
    color: "text-green-400",
  },
  {
    title: "Affordable Pricing",
    icon: BadgeDollarSign,
    color: "text-yellow-400",
  },
  {
    title: "On-Time Delivery",
    icon: Clock3,
    color: "text-blue-400",
  },
  {
    title: "Professional Documentation",
    icon: FileText,
    color: "text-purple-400",
  },
  {
    title: "Latest Technologies",
    icon: Cpu,
    color: "text-cyan-400",
  },
  {
    title: "Lifetime Technical Guidance",
    icon: Headphones,
    color: "text-pink-400",
  },
];

const projects = [
  {
    title: "AI Voice Assistant",
    description:
      "An intelligent voice-based assistant for automation, customer support, and business workflows.",
    comment:
      "🎙️ Built to understand natural conversations and automate repetitive tasks.",
  },
  {
    title: "POS Billing Software",
    description:
      "Complete billing and inventory management solution with barcode support.",
    comment:
      "🛒 Helps retailers manage sales, inventory, customers, and reports effortlessly.",
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Modern online stores with payments, order tracking, and admin dashboards.",
    comment:
      "📦 Designed to increase online sales with a smooth shopping experience.",
  },
  {
    title: "Business Websites",
    description:
      "Professional websites for startups, local businesses, and personal brands.",
    comment:
      "🌐 Fast, responsive, and optimized for SEO and lead generation.",
  },
  {
    title: "Mobile Applications",
    description:
      "Android and cross-platform applications built using modern technologies.",
    comment:
      "📱 User-friendly mobile experiences tailored to business requirements.",
  },
  {
    title: "Custom Software Solutions",
    description:
      "Tailor-made software systems for unique business needs and workflows.",
    comment:
      "⚙️ Every solution is developed around the client's specific requirements.",
  },
];

const stats = [
  {
    value: "100+",
    label: "Projects Completed",
    icon: FolderGit2,
  },
  {
    value: "50+",
    label: "Students Assisted",
    icon: CheckCircle,
  },
  {
    value: "15+",
    label: "Technologies",
    icon: Cpu,
  },
  {
    value: "24/7",
    label: "Support",
    icon: Headphones,
  },
];


const technologies = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-5xl" />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-gray-300 text-5xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-400 text-5xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="text-yellow-400 text-5xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400 text-5xl" />,
  },
  {
    name: "Bootstrap",
    icon: <FaBootstrap className="text-purple-500 text-5xl" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-white text-5xl" />,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens className="text-orange-400 text-5xl" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="text-yellow-500 text-5xl" />,
  },
];

const academicProjects = [
  {
    icon: <GraduationCap size={40} />,
    title: "Mini Projects",
    desc: "Innovative mini projects for students to strengthen practical knowledge and technical skills.",
  },
  {
    icon: <BookOpen size={40} />,
    title: "Main Projects",
    desc: "Industry-level final year projects for BCA, MCA, B.Tech, M.Tech and Polytechnic students.",
  },
  {
    icon: <FileText size={40} />,
    title: "Documentation",
    desc: "Complete project reports, SRS documents, UML diagrams and technical documentation.",
  },
  {
    icon: <Presentation size={40} />,
    title: "Project Presentation",
    desc: "Professional PPTs, viva preparation and project demonstration support.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotateX: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Home = () => {

   const [open, setOpen] = useState(false);

  return (

    
    <div className="bg-slate-950 text-white overflow-hidden">

   
      {/* Hero Section */}
<section className="relative min-h-screen flex items-center overflow-hidden">
  
     <div>


      {/* Popup */}
      <ProjectPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />

    </div>

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-black" />

  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[180px]" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[180px]" />

  {/* Animated Grid */}
  <div className="absolute inset-0 opacity-10">
    <div
      className="h-full w-full"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-28">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Side */}
      <div>

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 mb-6">
          <Rocket size={18} />
          Building Future Ready Software
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black leading-none">
          Building
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Future Ready
          </span>
          Solutions
        </h1>

        <p className="text-lg md:text-xl text-slate-300 mt-8 leading-relaxed max-w-xl">
          AI Development • MERN Stack • Python • Java • Mobile Apps •
          SaaS Platforms • Enterprise Software • Academic Projects
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">

          <button 
          onClick={() => setOpen(true)}
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition duration-300 shadow-xl shadow-blue-500/20">
            Start Your Project
          </button>

          <Link to="/services" className="px-8 py-4 rounded-2xl border border-slate-700 hover:border-blue-500 hover:bg-blue-500/10 transition duration-300">
            View Services
          </Link>

        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 transition">
            <h3 className="text-3xl font-bold text-blue-400">100+</h3>
            <p className="text-slate-400 text-sm">
              Projects
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 transition">
            <h3 className="text-3xl font-bold text-blue-400">50+</h3>
            <p className="text-slate-400 text-sm">
              Clients
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 transition">
            <h3 className="text-3xl font-bold text-blue-400">99%</h3>
            <p className="text-slate-400 text-sm">
              Satisfaction
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:border-blue-500/40 transition">
            <h3 className="text-3xl font-bold text-blue-400">24/7</h3>
            <p className="text-slate-400 text-sm">
              Support
            </p>
          </div>

        </div>

      </div>

      {/* Right Side */}
      <div className="relative">

        {/* Main Code Card */}
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition duration-500">

          <div className="flex gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          <div className="font-mono text-sm md:text-base space-y-3">
            <p className="text-cyan-400">
              const company = "S.Y.N.A.X LABS";
            </p>

            <p className="text-green-400">
              const mission = "Innovate. Build. Elevate.";
            </p>

            <p className="text-yellow-400">
              const services = [
            </p>

            <p className="pl-5 text-slate-300">
              "AI", "Python", "Java",
            </p>

            <p className="pl-5 text-slate-300">
              "MERN", "Mobile Apps"
            </p>

            <p className="text-yellow-400">];</p>

            <p className="text-blue-400">
              deploy(success);
            </p>
          </div>

        </div>

        {/* Floating Cards */}

        <div className="hidden md:block absolute -top-8 -right-8 bg-blue-500/10 border border-blue-500/30 backdrop-blur-xl rounded-2xl px-5 py-4 animate-bounce">
          <h4 className="font-semibold text-blue-300">
            AI Development
          </h4>
        </div>

        <div className="hidden md:block absolute -bottom-6 -left-6 bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-xl rounded-2xl px-5 py-4 animate-pulse">
          <h4 className="font-semibold text-cyan-300">
            MERN Stack
          </h4>
        </div>

        <div className="hidden lg:block absolute top-1/2 -right-12 bg-purple-500/10 border border-purple-500/30 backdrop-blur-xl rounded-2xl px-5 py-4 animate-bounce">
          <h4 className="font-semibold text-purple-300">
            Python & Java
          </h4>
        </div>

      </div>

    </div>

  </div>

</section>



<section className="py-28 px-6 bg-slate-900/40">

  <div className="max-w-7xl mx-auto">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <span className="text-blue-400 uppercase tracking-widest font-semibold">
        Academic Excellence
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Academic Project Solutions
      </h2>

      <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
        Complete support for BCA, MCA, B.Tech, M.Tech,
        Polytechnic and Computer Science students with
        innovative projects, documentation and presentation guidance.
      </p>
    </motion.div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
    >
      {academicProjects.map((project, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="group relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 p-8"
        >
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-cyan-500/0 group-hover:from-blue-600/10 group-hover:to-cyan-500/10 transition-all duration-500"></div>

          <div className="relative z-10">

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-6">
              {project.icon}
            </div>

            <h3 className="text-xl font-bold mb-4">
              {project.title}
            </h3>

            <p className="text-slate-400 leading-relaxed">
              {project.desc}
            </p>

          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>

</section>

      {/* Services */}
      <section className="py-24 px-6">
        <div className="container mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Our Services
            </h2>
            <p className="text-gray-400 mt-4">
              End-to-end software solutions tailored for students,
              startups and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-blue-500 transition-all hover:-translate-y-2"
              >
                <div className="text-blue-500 mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-400">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

{/* Technology Stack */}
<section className="py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <span className="text-blue-400 font-semibold uppercase tracking-widest">
        Our Stack
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Technologies We Master
      </h2>

      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        We leverage modern technologies to build fast, scalable,
        secure, and future-ready applications.
      </p>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

      {technologies.map((tech, index) => (
        <div
          key={index}
          className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
        >
          <div className="flex justify-center mb-5 group-hover:scale-110 transition-transform">
            {tech.icon}
          </div>

          <h3 className="font-semibold text-lg">
            {tech.name}
          </h3>
        </div>
      ))}

    </div>

    <div className="mt-14 text-center">
      <p className="text-slate-400">
        MERN • Authentication • Cloud Deployment • APIs • Modern UI/UX
      </p>
    </div>

  </div>
</section>
      
    {/* Projects We Build */}
<section className="py-24 px-6 bg-slate-900/50">
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <span className="text-blue-400 font-semibold tracking-wider uppercase">
        Our Expertise
      </span>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Projects We Build
      </h2>

      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        From startups to enterprise solutions, we develop powerful
        applications tailored to business and academic requirements.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

  {projects.map((project, index) => (
  <div
    key={index}
    className="bg-slate-900 border border-slate-800 p-8 rounded-3xl"
  >
    <Briefcase className="text-cyan-400 mb-4" />

    <h3 className="text-xl font-semibold mb-3">
      {project.title}
    </h3>

    <p className="text-gray-400 mb-6">
      {project.description}
    </p>

    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 text-blue-300 text-sm">
      {project.comment}
    </div>
  </div>
))}

    </div>

    {/* Bottom CTA */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300">
        🚀 Need a custom software solution? Let's build it together.
      </div>
    </div>

  </div>
</section>
      

      {/* Why Choose Us */}
 <section className="relative py-28 overflow-hidden bg-slate-950">

  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 blur-[140px]" />
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[140px]" />

  <div className="container mx-auto px-6 relative z-10">

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-20"
    >
      <span className="px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
        WHY STUDENTS TRUST US
      </span>

      <h2 className="text-5xl md:text-6xl font-black text-white mt-6">
        Why Choose
        <span className="text-blue-500"> S.Y.N.A.X LABS</span>
      </h2>

      <p className="max-w-3xl mx-auto mt-6 text-slate-400 text-lg">
        Helping BCA, MCA, B.Tech and Diploma students build
        impressive projects with complete documentation,
        mentorship and long-term support.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {reasons.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
            }}
            whileHover={{
              y: -10,
            }}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl p-8"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

            <div className="relative z-10">

              <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center mb-6">
                <Icon size={30} className={item.color} />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-slate-400">
                Trusted by students for delivering quality,
                accuracy and professional standards.
              </p>

            </div>
          </motion.div>
        );
      })}

    </div>

  </div>
</section>

<section className="py-24 bg-slate-900/40">

  <div className="container mx-auto px-6">

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-4 gap-8"
    >

      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
            }}
            whileHover={{
              scale: 1.05,
            }}
            className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 backdrop-blur-xl p-8 text-center"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

            <div className="relative z-10">

              <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-500/10 flex items-center justify-center mb-5">
                <Icon className="text-blue-400" size={32} />
              </div>

              <h2 className="text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {item.value}
              </h2>

              <p className="mt-3 text-slate-400 font-medium">
                {item.label}
              </p>

            </div>
          </motion.div>
        );
      })}

    </motion.div>

  </div>
</section>

      {/* Technologies */}
     <section className="py-24">
  <h2 className="text-center text-4xl font-bold mb-12">
    Technologies We Master
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {[
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Python",
      "Django",
      "Flask",
      "Java",
      "Spring Boot",
      "MySQL",
      "Firebase",
      "AWS",
      "Docker",
      "GitHub",
      "Tailwind",
      "Bootstrap",
      "AI",
      "Machine Learning",
    ].map((tech) => (
      <div
        key={tech}
        className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center"
      >
        {tech}
      </div>
    ))}
  </div>
</section>


<section className="relative py-28 overflow-hidden">

  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>

  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 blur-[180px]"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[180px]"></div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    <div className="grid lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 mb-6">
          <Sparkles size={16} />
          AI & Machine Learning
        </div>

        <h2 className="text-5xl lg:text-6xl font-black leading-tight">
          Intelligent
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            AI Solutions
          </span>
        </h2>

        <p className="text-slate-400 text-lg mt-6 leading-relaxed">
          We develop next-generation AI applications powered by
          Machine Learning, Natural Language Processing and
          intelligent automation to help businesses grow faster.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mt-10">

          {[
            "AI Chatbots",
            "Document Processing",
            "Recommendation Systems",
            "Predictive Analytics",
            "Workflow Automation",
            "Business Intelligence",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4"
            >
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span>{item}</span>
            </div>
          ))}

        </div>

        { /* <button className="mt-10 flex items-center gap-2 px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 font-semibold hover:scale-105 transition">
          Explore AI Services
         <ArrowRight size={18} />
       </button> */}

      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative"
      >

        {/* Main Circle */}
        <div className="relative flex items-center justify-center">

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[340px] h-[340px] rounded-full border border-blue-500/20"
          />

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-[260px] h-[260px] rounded-full border border-cyan-500/20"
          />

          <div className="w-44 h-44 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.4)]">
            <Brain size={70} />
          </div>

        </div>

        {/* Floating Cards */}

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-0 left-0 bg-slate-900 border border-slate-700 rounded-2xl p-4"
        >
          <Bot className="text-blue-400 mb-2" />
          <p className="font-medium">AI Chatbots</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-10 right-0 bg-slate-900 border border-slate-700 rounded-2xl p-4"
        >
          <Cpu className="text-purple-400 mb-2" />
          <p className="font-medium">Automation</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute bottom-16 left-0 bg-slate-900 border border-slate-700 rounded-2xl p-4"
        >
          <Database className="text-cyan-400 mb-2" />
          <p className="font-medium">Data Analytics</p>
        </motion.div>

        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 5.5, repeat: Infinity }}
          className="absolute bottom-0 right-0 bg-slate-900 border border-slate-700 rounded-2xl p-4"
        >
          <Brain className="text-green-400 mb-2" />
          <p className="font-medium">Machine Learning</p>
        </motion.div>

      </motion.div>

    </div>

  </div>
</section>


      {/* CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto">

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold">
              Let's Build Something Amazing Together
            </h2>

            <p className="mt-4 text-lg">
              From student projects to enterprise applications,
              we turn ideas into reality.
            </p>

            <button 
            onClick={() => setOpen(true)}
            className="mt-8 bg-white text-black px-8 py-4 rounded-xl font-bold">
              Get Started
            </button>
          </div>

        </div>
      </section>


      <section className="relative py-28 overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-slate-950"></div>
  <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-600/10 blur-[150px]" />
  <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-500/10 blur-[150px]" />

  <div className="max-w-7xl mx-auto px-6 relative z-10">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <span className="text-blue-400 uppercase tracking-widest font-semibold">
        My Work
      </span>

      <h2 className="text-4xl md:text-5xl font-black mt-4">
        Explore My Digital Presence
      </h2>

      <p className="text-slate-400 mt-5 max-w-2xl mx-auto">
        Browse my projects, contributions, portfolio, and software
        solutions developed through S.Y.N.A.X LABS.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid lg:grid-cols-2 gap-8">

      {/* GitHub Card */}
      <motion.a
        href="https://github.com/Tripura-1910"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-blue-500/10 transition-all duration-500"></div>

        <div className="relative z-10">

          <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mb-8">
            <GitBranch size={42} />
          </div>

          <h3 className="text-3xl font-bold mb-4">
            GitHub
          </h3>

          <p className="text-slate-400 leading-relaxed">
            Explore source code, open-source contributions,
            MERN applications, AI projects, Python solutions,
            and enterprise software development work.
          </p>

          <div className="mt-8 flex items-center gap-2 text-blue-400 font-medium">
            Visit GitHub
            <ArrowUpRight size={18} />
          </div>

        </div>
      </motion.a>

      {/* Portfolio Card */}
      <motion.a
        href="https://github.com/Tripura-1910"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="group relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 p-10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/20 transition-all duration-500"></div>

        <div className="relative z-10">

          <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center mb-8">
            <Globe size={42} />
          </div>

          <h3 className="text-3xl font-bold mb-4">
            Portfolio
          </h3>

          <p className="text-slate-300 leading-relaxed">
            Discover featured projects, client solutions,
            software products, UI/UX work, AI integrations,
            and full-stack applications developed by S.Y.N.A.X LABS.
          </p>

          <div className="mt-8 flex items-center gap-2 text-cyan-300 font-medium">
            View Portfolio
            <ArrowUpRight size={18} />
          </div>

        </div>
      </motion.a>

    </div>

    {/* Bottom Quote */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-center mt-16"
    >
      <div className="inline-flex items-center gap-3 px-6 py-4 rounded-full border border-blue-500/20 bg-blue-500/5">
        🚀 Building innovative software solutions one project at a time.
      </div>
    </motion.div>

  </div>

</section>

      

    </div>
  );
};

export default Home;