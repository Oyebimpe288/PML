// src/components/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              text: `"PML Professional Services transformed our financial operations. Their audit team identified significant efficiencies, and their tax advisory saved us over 20% in annual tax liabilities."`,
              name: "Robert Thompson",
              role: "CEO, Thompson Industries",
              photo: "CLIENT_PHOTO_1_URL_HERE",
            },
            {
              text: `"The custom financial dashboard developed by PML's software team has given us real-time visibility into our financial performance. It's been a game-changer for our decision-making process."`,
              name: "Lisa Rodriguez",
              role: "CFO, TechForward Inc.",
              photo: "CLIENT_PHOTO_2_URL_HERE",
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-accent p-8 rounded-lg">
              <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
              <p className="italic mb-6">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm opacity-80">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
