export default function Experience() {
  const experiences = [
    {
      role: "Intern",
      company: "IHS",
      duration: "Jan 2024",
      location: "Victoria",
    },
  ];
  return (
    <section className="px-4 mb-30">
      <h2>Experience</h2>
      <p className="leading-snug">Where I have worked</p>
      <div className="pl-6 relative before:content-[''] before:bottom-0 before:absolute before:left-[24px] before:top-[0.6rem] before:bg-white before:w-[1px]">
        <div className="pl-[2rem] relative">
          <div className="bg-red-500 p-2 rounded-full absolute -left-[7.5px] top-0"></div>
          <div className="space-y-2 mb-4">
            <div className="flex flex-col gap-[0.2rem]">
              <h3 className="text-base font-medium">Intern</h3>
              <p className="text-primary-accent">IHS</p>
            </div>
            <div className="flex flex-col gap-[0.2rem]">
              <p className="text-fg-muted text-sm">Jan 2024 - Jan 2025</p>
              <p className="text-fg-muted/60 text-xs">Victoria Island Lagos</p>
            </div>
          </div>
          <ul className="space-y-3">
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur ipsa reprehenderit fugit provident ex deleniti sit
              fuga quo totam non.
            </li>
            <li>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur ipsa reprehenderit fugit provident ex deleniti sit
              fuga quo totam non.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
