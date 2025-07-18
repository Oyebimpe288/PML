// src/sections/WhyChooseUs.jsx

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">
          Why Choose PML Professional Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "fas fa-award",
              title: "Industry Expertise",
              text: "Our team brings decades of combined experience in audit, tax, and advisory services across multiple industries.",
            },
            {
              icon: "fas fa-chart-line",
              title: "Strategic Approach",
              text: "We don't just crunch numbers - we provide strategic insights to help your business grow and thrive.",
            },
            {
              icon: "fas fa-user-tie",
              title: "Client-Centric",
              text: "Your success is our priority. We tailor our services to meet your specific needs and goals.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-primary text-4xl mb-4">
                <i className={item.icon}></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
