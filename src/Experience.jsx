import EachExperience from "./EachExperience";

export default function Experience() {
  const experiences = [
    {
      role: "Intern",
      company: "IHS",
      duration: "July 2024 - September 2024",
      location: "Victoria Island, Lagos",
      actions: [
        "Interned across two departments which were GICL & Rural Telephony Departments, gaining hands-on exposure to telecom infrastructure and networking.",
        "Documented completed project work across multiple states in Nigeria using Lepton, IHS's internal tracking software, and gained hands-on networking experience",
      ],
    },
    {
      role: "Intern",
      company: "CBNL",
      duration: "July 2025 - September 2025",
      location: "Lekki, Lagos",
      actions: [
        "Desgned and developed a responsive website prototype for CBNL, covering key pages including Home, About, Services, Solutions etc. Worked directly with the COO to gather requirements and incorporate feedback throughout development. The site wasn't ultimately adopted for official use, as my internship ended before the project could be finalized but the experience gave me hands-on practice",
      ],
    },
  ];
  return (
    <section className="px-4 lg:pr-30">
      <h2>Experience</h2>
      <p className="leading-snug">Where I have worked</p>
      <div className="pl-4 relative before:content-[''] before:bottom-0 before:absolute before:left-4 before:top-[0.6rem] before:bg-white before:w-[1px] space-y-10">
        {experiences.map((experience) => (
          <EachExperience experience={experience} />
        ))}
      </div>
    </section>
  );
}
