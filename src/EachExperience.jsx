export default function EachExperience({ experience }) {
  return (
    <div className="pl-[1.5rem] relative">
      <div className="bg-primary-accent p-2 rounded-full absolute -left-[7.5px] top-1"></div>
      <div className="flex justify-between items-center lg:flex-col lg:space-y-2 lg:items-start mb-4">
        <div className="flex flex-col gap-[0.2rem]">
          <h3 className="text-base font-medium">{experience.role}</h3>
          <p className="text-primary-accent">{experience.company}</p>
        </div>
        <div className="flex flex-col gap-[0.2rem]">
          <p className="text-fg-muted text-sm">Jan 2024 - Jan 2025</p>
          <p className="text-fg-muted/60 text-xs">Victoria Island Lagos</p>
        </div>
      </div>
      <ul className="space-y-3">
        {experience.actions.map((action) => (
          <li className="leading-loose text-justify"> {action}</li>
        ))}
      </ul>
    </div>
  );
}
