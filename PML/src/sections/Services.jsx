// src/sections/Services.jsx

const services = [
  {
    icon: "fas fa-file-invoice-dollar",
    title: "Tax Advisory",
    text: "Strategic tax planning and compliance services to optimize your tax position.",
    link: "#tax",
  },
  {
    icon: "fas fa-search-dollar",
    title: "Audit Services",
    text: "Comprehensive audit services to ensure financial integrity and compliance.",
    link: "#audit",
  },
  {
    icon: "fas fa-lightbulb",
    title: "Business Advisory",
    text: "Expert guidance to help you navigate complex business challenges.",
    link: "#advisory",
  },
  {
    icon: "fas fa-laptop-code",
    title: "Software Solutions",
    text: "Custom financial software to streamline your operations and reporting.",
    link: "#software",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Comprehensive financial solutions designed to meet your business needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="service-card bg-white p-6 rounded-lg shadow-md border-t-4 border-primary transition duration-300"
            >
              <div className="text-primary text-3xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.text}</p>
              <a
                href={service.link}
                className="text-primary font-medium hover:text-accent transition"
              >
                Learn more →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
