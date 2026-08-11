import EachExperience from "./EachExperience";

export default function Experience() {
  const experiences = [
    {
      role: "Intern",
      company: "IHS",
      duration: "Jan 2024",
      location: "Victoria",
      actions: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsa reprehenderit fugit provident ex deleniti sit fuga quo totam non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum ea nostrum hic, soluta enim repellendus modi id. Pariatur, sapiente!",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsa reprehenderit fugit provident ex deleniti sit fuga quo totam non.",
      ],
    },
    {
      role: "Intern",
      company: "IHS",
      duration: "Jan 2024",
      location: "Victoria",
      actions: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsa reprehenderit fugit provident ex deleniti sit fuga quo totam non. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsum ea nostrum hic, soluta enim repellendus modi id. Pariatur, sapiente!",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur ipsa reprehenderit fugit provident ex deleniti sit fuga quo totam non.",
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
