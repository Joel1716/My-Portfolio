import { forwardRef } from "react";

const EachExperience = forwardRef(function EachExperience(
  { experience, active },
  ref
) {
  return (
    <div ref={ref} className="pl-[1.5rem] relative">
      <div
        className={`p-2 rounded-full absolute -left-[7.5px] top-1 transition-colors duration-300 ${
          active ? "bg-primary-accent" : "bg-white/20"
        }`}
      ></div>
      <div
        className="transition-opacity duration-500"
        style={{ opacity: active ? 1 : 0.3, transitionDelay: active ? "150ms" : "0ms" }}
      >
        <div className="flex justify-between items-center lg:flex-col lg:space-y-2 lg:items-start mb-4">
          <div className="flex flex-col gap-[0.2rem]">
            <h3 className="text-base font-medium">{experience.role}</h3>
            <p className="text-primary-accent">{experience.company}</p>
          </div>
          <div className="flex flex-col gap-[0.2rem] text-right lg:text-left">
            <p className="text-fg-muted text-sm">{experience.duration}</p>
            <p className="text-fg-muted/70 text-xs">{experience.location}</p>
          </div>
        </div>
        <ul className="space-y-3">
          {experience.actions.map((action) => (
            <li key={action} className="leading-loose text-justify">
              {" "}
              {action}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

export default EachExperience;
