import { GoArrowUpRight } from "react-icons/go";
export default function EachProject({ project }) {
  return (
    <div className="border-b border-border-color pb-4">
      <h3 className="text-xl mb-3 text-white uppercase">{project.title}</h3>
      <p className="text-justify leading-loose">{project.description}</p>
      <div className="flex gap-2 my-3">
        {project.techs.map((tech) => (
          <div className="bg-[#a78bfa1f] text-primary-accent py-1 px-6 rounded text-sm border border-[#a78bfa33]">
            {tech}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-5 ">
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
  );
}
