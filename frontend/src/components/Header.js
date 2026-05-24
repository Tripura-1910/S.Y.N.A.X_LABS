import React, { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={logo}
                alt="S.Y.N.A.X Labs"
                className="w-full h-full object-contain"
              />
            </div>

            <div>
              <h1 className="text-2xl font-black tracking-wide">
                <span className="text-white">S.Y.N.A.X</span>
                <span className="text-blue-500"> LABS</span>
              </h1>
              <p className="text-[10px] tracking-[3px] text-slate-400 uppercase">
                Innovate • Build • Elevate
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative text-slate-300 hover:text-white transition font-medium group"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* CONTACT INFO (DESKTOP) */}
          <div className="hidden lg:flex items-center gap-6 text-sm text-slate-300">

            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-400" />
              <span>samuelthomas2002@gmail.com</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-blue-400" />
              <span>+91 79029 01032</span>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-400" />
              <span>Kerala, India</span>
            </div>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[600px]" : "max-h-0"
        }`}
      >
        <div className="bg-slate-950 border-t border-slate-800 px-6 py-6">

          <div className="flex flex-col gap-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 hover:text-blue-400 transition font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* MOBILE CONTACT INFO */}
            <div className="mt-4 space-y-3 text-slate-300 text-sm">

              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <span className="break-all">
                  samuelthomas2002@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-400" />
                <span>+91 79029 01032</span>
              </div>

              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                <span>Kerala, India</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;