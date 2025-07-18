// src/sections/AboutSection.jsx

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="ABOUT_US_IMAGE_URL_HERE"
              alt="Our team at work"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6">
              About PML Professional Services
            </h2>
            <p className="text-gray-600 mb-6">
              Founded in [YEAR], PML Professional Services has grown to become a trusted partner
              for businesses seeking comprehensive financial solutions. Our team of certified
              professionals brings together expertise in audit, tax, advisory, and technology to
              deliver exceptional value to our clients.
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be the premier provider of integrated financial services, recognized for our
                integrity, innovation, and commitment to client success.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses through expert financial guidance, cutting-edge solutions, and
                personalized service that drives sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
