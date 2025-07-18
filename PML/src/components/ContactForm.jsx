// src/components/ContactForm.jsx
import React from "react";

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">
          Get In Touch
        </h2>

        <div className="flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Contact Information</h3>
            <p className="text-gray-600 mb-6">
              Ready to discuss how we can help your business? Reach out to us through any of the channels below.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: "fas fa-map-marker-alt",
                  title: "Our Office",
                  details: "123 Financial District, Suite 500\nCity, State 12345",
                },
                {
                  icon: "fas fa-phone-alt",
                  title: "Phone",
                  details: "+1 (555) 123-4567",
                },
                {
                  icon: "fas fa-envelope",
                  title: "Email",
                  details: "info@pmlprofessionals.com",
                },
                {
                  icon: "fas fa-clock",
                  title: "Hours",
                  details: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday - Sunday: Closed",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="text-primary text-xl mr-4 mt-1">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 whitespace-pre-line">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2">
            <form className="bg-secondary p-8 rounded-lg">
              {[
                { id: "name", label: "Your Name", type: "text" },
                { id: "email", label: "Email Address", type: "email" },
                { id: "phone", label: "Phone Number", type: "tel" },
              ].map(({ id, label, type }) => (
                <div key={id} className="mb-6">
                  <label htmlFor={id} className="block text-gray-700 font-medium mb-2">{label}</label>
                  <input
                    type={type}
                    id={id}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              ))}

              <div className="mb-6">
                <label htmlFor="service" className="block text-gray-700 font-medium mb-2">Service Interested In</label>
                <select
                  id="service"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="tax">Tax Advisory</option>
                  <option value="audit">Audit Services</option>
                  <option value="advisory">Business Advisory</option>
                  <option value="software">Software Solutions</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-accent transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
