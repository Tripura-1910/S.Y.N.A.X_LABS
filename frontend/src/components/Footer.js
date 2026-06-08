import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
  ArrowUpRight,
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center">
                <Code2 className="text-white" size={24} />
              </div>

              <div>
                <h2 className="text-2xl font-black text-white">
                  S.Y.N.A.X
                </h2>
                <p className="text-xs text-slate-400 tracking-widest">
                  LABS
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              Building future-ready software solutions including
              AI Development, MERN Applications, Python Projects,
              Java Solutions, Mobile Apps, SaaS Platforms and
              Academic Project Support.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>AI Development</li>
              <li>MERN Stack Applications</li>
              <li>Python Development</li>
              <li>Java Applications</li>
              <li>Mobile App Development</li>
              <li>Academic Projects</li>
            </ul>
          </div>

          {/* Quick Links */}
  {/* Quick Links */}
<div>
  <h3 className="text-white font-semibold text-lg mb-5">
    Quick Links
  </h3>

  <ul className="space-y-3">
    {[
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
      {name:"About Us", path: "/about-us"},
    ].map((item) => (
      <li key={item.name}>
        <Link
          to={item.path}
          className="text-slate-400 hover:text-blue-400 transition flex items-center gap-2"
        >
          <ArrowUpRight size={15} />
          {item.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact Information
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">
                <Phone
                  size={18}
                  className="text-blue-500 mt-1"
                />
                <div>
                  <p className="text-slate-400 text-sm">
                    Phone
                  </p>
                  <p className="text-white">
                    +91 7902901032
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail
                  size={18}
                  className="text-blue-500 mt-1"
                />
                <div>
                  <p className="text-slate-400 text-sm">
                    Email
                  </p>
                  <p className="text-white break-all">
                    samuelthomas2002@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={18}
                  className="text-blue-500 mt-1"
                />
                <div>
                  <p className="text-slate-400 text-sm">
                    Location
                  </p>
                  <p className="text-white">
                    Piravom, Ernakulam,
                    Kerala, India
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © {currentYear} S.Y.N.A.X LABS. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link to="/privacy-policy" className="hover:text-blue-400 cursor-pointer transition">
              Privacy Policy
            </Link>

            <Link to="/terms-of-service" className="hover:text-blue-400 cursor-pointer transition">
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;