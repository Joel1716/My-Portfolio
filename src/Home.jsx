import { useState, useEffect, useRef } from "react";
import NavBar from "./NavBar";

export default function Home() {
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex flex-col flex-1 relative min-h-screen overflow-hidden">
      <NavBar />
      <div
        ref={heroRef}
        className="flex flex-col flex-1 justify-between  text-slate-100 select-none"
      >
        {/* dot grid base */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(167, 139, 250, 0.12) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        {/* ambient gradient orbs */}

        <div
          className="absolute -inset-[30%] pointer-events-none will-change-transform z-0"
          style={{
            background: `
            radial-gradient(ellipse 55% 50% at 68% 38%, rgba(124, 58, 237, 0.22) 0%, transparent 60%),
            radial-gradient(ellipse 45% 40% at 12% 70%, rgba(6, 182, 212, 0.10) 0%, transparent 55%)
          `,
            transform: `translateY(${-scrollY * 0.25}px)`,
          }}
        />

        <div
          className="relative z-10 mx-3 flex flex-col
         flex-grow justify-center space-y-4 md: space-y-10 text-center"
        >
          <div>
            <div className="relative z-10 inline-flex items-center gap-[0.55rem] self-start font-mono text-base tracking-[0.12em] uppercase text-slate-400 ">
              Frontend Developer
            </div>
            <h1 className="flex flex-col text-[clamp(4.5rem,12vw,11rem)] font-black tracking-[-0.05em]  sm:leading-[0.9]  m-0 select-none sm:px-9">
              <span className="block text-slate-100 transition-colors duration-300">
                Joel
              </span>
              <span className="block text-slate-100 transition-colors duration-300">
                Ohikhena<span className="text-violet-400">.</span>
              </span>
            </h1>
          </div>
          {/*  */}
          <div className="flex flex-col gap-3 mb-3 items-center">
            <p className="text-lg font-light text-slate-400 leading-[1.75]">
              From campus marketplaces to biometric attendance systems, I build
              products that solve real problems
            </p>
            <div className="flex items-center gap-4 sm:mt-2">
              <a href="#work" className="btn-purple">
                See my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center text-sm font-medium text-slate-400 border border-slate-800 px-7 py-3 rounded transition-all duration-200 hover:text-slate-100 hover:border-slate-700"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
