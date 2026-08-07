export default function TechStack() {
  const skills = [
    "Javascript",
    "Git and GitHub",
    "Tailwind",
    "React Native",
    "React",
  ];
  return (
    <section className="px-4">
      <h2>Stack</h2>
      <p>Skills and Tools</p>
      <div className="flex flex-wrap gap-4 items-center">
        {skills.map((skill) => (
          <div className="text-fg-muted py-2 px-5 rounded text-sm border border-[#a78bfa33] ">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
