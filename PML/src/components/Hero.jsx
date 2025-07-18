// components/Hero.jsx

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 hero-gradient text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 animation-fade-in">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Expert Financial Solutions for Your Business
            </h1>
            <p className="text-xl mb-8">
              PML Professional Services provides comprehensive audit, tax advisory, and software solutions tailored to your unique needs.
            </p>
            <div className="flex space-x-4">
              <a href="#contact" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
                Get in Touch
              </a>
              <a href="#services" className="border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-primary transition">
                Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animation-slide-in">
            <img
              src="HERO_IMAGE_URL_HERE"
              alt="Financial professionals working"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
