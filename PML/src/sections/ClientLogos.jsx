// src/sections/ClientLogos.jsx

const clientLogos = [
  "CLIENT_LOGO_1_URL_HERE",
  "CLIENT_LOGO_2_URL_HERE",
  "CLIENT_LOGO_3_URL_HERE",
  "CLIENT_LOGO_4_URL_HERE",
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">
          Trusted By Leading Organizations
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {clientLogos.map((logo, idx) => (
            <div key={idx} className="flex justify-center">
              <img
                src={logo}
                alt={`Client Logo ${idx + 1}`}
                className="h-16 opacity-70 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
