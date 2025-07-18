// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-bold mb-6">About PML</h3>
            <p className="mb-6 opacity-80">
              PML Professional Services is a leading provider of audit, tax advisory, and financial software solutions committed to delivering exceptional value to our clients.
            </p>
            <div className="flex space-x-4">
              {["linkedin-in", "twitter", "facebook-f"].map((icon, idx) => (
                <a key={idx} href="#" className="text-white hover:text-secondary transition">
                  <i className={`fab fa-${icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Our Core Values</h3>
            <ul className="space-y-3 opacity-80">
              {[
                "Integrity and Professionalism",
                "Client-Centered Approach",
                "Innovation and Excellence",
                "Collaborative Teamwork",
                "Sustainable Growth",
              ].map((value, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "#home", text: "Home" },
                { href: "#about", text: "About Us" },
                { href: "#services", text: "Our Services" },
                { href: "#contact", text: "Contact" },
                { href: "#", text: "Privacy Policy" },
                { href: "#", text: "Terms of Service" },
              ].map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="opacity-80 hover:text-secondary transition">
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-opacity-20 border-white mt-12 pt-8 text-center opacity-80">
          <p>&copy; 2023 PML Professional Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
