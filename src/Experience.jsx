import { useEffect, useRef, useState } from "react";
import EachExperience from "./EachExperience";

// Point on screen (as a fraction of viewport height) the timeline "grows" toward.
const ANCHOR_RATIO = 0.75;

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

  const lineRef = useRef(null);
  const itemRefs = useRef([]);
  const [fillHeight, setFillHeight] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setFillHeight(lineRef.current?.getBoundingClientRect().height ?? 0);
      setActiveCount(experiences.length);
      return;
    }

    let raf = null;

    function measure() {
      const line = lineRef.current;
      if (!line) return;

      const lineRect = line.getBoundingClientRect();
      const anchorY = window.innerHeight * ANCHOR_RATIO;

      setFillHeight(
        Math.min(Math.max(anchorY - lineRect.top, 0), lineRect.height),
      );
      setActiveCount(
        itemRefs.current.filter(
          (el) => el && el.getBoundingClientRect().top <= anchorY,
        ).length,
      );
    }

    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        measure();
        raf = null;
      });
    }

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="experience" className="px-4 lg:pr-30">
      <h2>Experience</h2>
      <p className="leading-snug">Where I have worked</p>
      <div className="pl-4 relative">
        <div
          ref={lineRef}
          className="absolute left-4 top-[0.6rem] bottom-0 w-[1px] bg-white/15"
        >
          <div
            className="absolute top-0 left-0 w-full bg-primary-accent transition-[height] duration-150 ease-out"
            style={{ height: `${fillHeight}px` }}
          />
        </div>
        <div className="space-y-10">
          {experiences.map((experience, i) => (
            <EachExperience
              key={experience.company}
              ref={(el) => (itemRefs.current[i] = el)}
              experience={experience}
              active={i < activeCount}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
