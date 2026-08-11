// EachProject.jsx
import { GoArrowUpRight } from "react-icons/go";
export default function EachProject({ project }) {
  return (
    <div className="mb-4 flex flex-col gap-4 shrink-0 w-[85%] sm:w-[60%] md:w-[45%] lg:w-[31%] snap-start h-[600px] min-w-[340px]">
      <div className="flex flex-col flex-1 min-h-0">
        <h3 className="text-xl mb-3 text-primary-accent uppercase shrink-0">
          {project.title}
        </h3>
        <p className="text-justify leading-loose flex-1 min-h-0 overflow-y-auto scrollbar-none">
          {project.description}
        </p>
        <div className="flex gap-2 my-3 flex-wrap shrink-0">
          {project.techs.map((tech) => (
            <div className="bg-[#a78bfa1f] text-primary-accent py-1 px-6 rounded text-sm border border-[#a78bfa33]">
              {tech}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-5 shrink-0">
          {project.links.map((link) => (
            <div className=" text-fg-muted py-3 px-4 rounded text-sm border border-[#a78bfa33] ">
              <a href={link.link} className="flex gap-2 items-center">
                {link.name}
                <span>
                  <GoArrowUpRight />
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[280px] shrink-0">
        <img
          className="w-full h-full object-cover"
          src="Personal-Pic.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}
