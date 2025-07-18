// src/sections/TeamSection.jsx

const teamMembers = [
  {
    name: "John Smith",
    title: "Managing Partner",
    description: "20+ years of experience in audit and financial advisory services.",
    image: "TEAM_MEMBER_1_URL_HERE",
  },
  {
    name: "Sarah Johnson",
    title: "Tax Director",
    description: "Specializes in corporate tax strategy and international tax compliance.",
    image: "TEAM_MEMBER_2_URL_HERE",
  },
  {
    name: "Michael Chen",
    title: "Technology Partner",
    description:
      "Leads our financial software development and digital transformation practice.",
    image: "TEAM_MEMBER_3_URL_HERE",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold text-center text-primary mb-12">
          Meet Our Leadership Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="team-member bg-white rounded-lg overflow-hidden shadow-md relative"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="team-overlay absolute inset-0 bg-primary bg-opacity-80 flex flex-col justify-center items-center p-6 opacity-0 transition duration-300">
                <h3 className="text-white text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-white mb-4">{member.title}</p>
                <p className="text-white text-center">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
