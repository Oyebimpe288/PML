// src/sections/DetailedServices.jsx

const services = [
  {
    id: "tax",
    title: "Tax Advisory Services",
    image: "TAX_SERVICE_IMAGE_URL_HERE",
    description:
      "Our tax professionals provide strategic planning and compliance services to help you navigate complex tax regulations while optimizing your tax position.",
    list: [
      "Corporate tax planning and compliance",
      "International tax services",
      "Tax due diligence",
      "Transfer pricing advisory",
    ],
    reverse: false,
  },
  {
    id: "audit",
    title: "Audit & Assurance Services",
    image: "AUDIT_SERVICE_IMAGE_URL_HERE",
    description:
      "We provide independent, high-quality audit services that enhance the reliability of financial information and support informed decision-making.",
    list: [
      "Statutory financial audits",
      "Internal audit services",
      "Special purpose audits",
      "IFRS and GAAP compliance",
    ],
    reverse: true,
  },
  {
    id: "advisory",
    title: "Business Advisory Services",
    image: "ADVISORY_SERVICE_IMAGE_URL_HERE",
    description:
      "Our advisory team provides strategic insights and practical solutions to help you navigate business challenges and capitalize on opportunities.",
    list: [
      "Financial due diligence",
      "Business valuation",
      "Risk management advisory",
      "Corporate restructuring",
    ],
    reverse: false,
  },
  {
    id: "software",
    title: "Financial Software Solutions",
    image: "SOFTWARE_SERVICE_IMAGE_URL_HERE",
    description:
      "We develop custom financial software solutions that streamline your operations, enhance reporting capabilities, and provide real-time insights.",
    list: [
      "Accounting system implementation",
      "Financial reporting tools",
      "Budgeting and forecasting systems",
      "Custom financial dashboards",
    ],
    reverse: true,
  },
];

const DetailedServices = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">
          Our Comprehensive Services
        </h2>

        {services.map((service, index) => (
          <div id={service.id} key={index} className="mb-20">
            <div
              className={`flex flex-col md:flex-row ${
                service.reverse ? "md:flex-row-reverse" : ""
              } items-center mb-10`}
            >
              <div className="md:w-1/2 mb-8 md:mb-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div
                className={`md:w-1/2 ${
                  service.reverse ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.list.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedServices;
