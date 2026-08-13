// EachProject.jsx
import { GoArrowUpRight } from "react-icons/go";
export default function EachProject({ project }) {
  return (
    <div className="mb-4 flex flex-col gap-4 shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[31%] snap-start h-[600px] min-w-[340px]">
      <h3 className="text-xl text-primary-accent uppercase shrink-0">
        {project.title}
      </h3>
      <div className="h-[280px] shrink-0">
        <img className="w-full h-full object-cover" src={project.img} alt="" />
      </div>
      <div className="flex flex-col flex-1 min-h-0">
        <p className="text-justify leading-loose flex-1 min-h-0 overflow-y-auto scrollbar-none">
          {project.description}
        </p>
        <div className="flex gap-2 mt-4 flex-wrap shrink-0">
          {project.techs.map((tech) => (
            <div className="bg-[#a78bfa1f] text-primary-accent py-1 px-6 rounded text-sm border border-[#a78bfa33]">
              {tech}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-5 shrink-0">
          {project.links.map((link) => (
            <a
              href={link.link}
              target="_blank"
              className="flex gap-2 items-center text-fg-muted py-3 px-4 rounded text-sm border border-[#a78bfa33] hover:border-[rgba(255,255,255,0.2)] hover:text-[#f0f0f8]"
            >
              {link.name}
              <span>
                <GoArrowUpRight />
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
