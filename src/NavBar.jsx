import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

export default function NavBar() {
  const [navShow, setNavShow] = useState(false);
  const closeNav = () => setNavShow(false);
  const links = [
    { name: "About", href: "#about" },
    { name: "Project", href: "#work" },
    { name: "Experience", href: "#experience" },
  ];
  return (
    <nav className="sticky top-0 right-0 left-0 h-16 sm:h-20 flex justify-between items-center bg-[#07070fbf] pl-3 pr-8 sm:pr-12 border-b z-100 border-b-[#FFFFFF12] select-none">
      <div className="max-w-22 sm:max-w-25">
        <img className="w-full" src="Logo.png" alt="My Brand Logo" />
      </div>
      <div className="hidden sm:flex items-center gap-9">
        <ul className={`flex items-center gap-9 text-[16px] text-[#7878a0]`}>
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="py-1.5 px-5 text-primary-accent border border-border-color rounded hover:bg-accent-dim"
        >
          Hire Me
        </a>
      </div>
      <div
        onClick={() => setNavShow((ns) => !ns)}
        className="sm:hidden text-2xl"
      >
        {navShow ? <MdClose /> : <RxHamburgerMenu />}
      </div>
      {/* Mobile Menu Dropdown Panel */}
      {navShow && (
        <div className="absolute top-full left-0 w-full bg-[#07070fbf] p-6 flex flex-col gap-6 sm:hidden z-50">
          <ul className="flex flex-col gap-4 text-base text-slate-300 font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={closeNav}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeNav}
            className="py-2 text-center text-primary-accent border border-border-color rounded uppercase font-bold hover:bg-accent-dim"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
