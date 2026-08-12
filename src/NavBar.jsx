import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

export default function NavBar() {
  const [navShow, setNavShow] = useState(false);
  return (
    <nav className="sticky top-0 right-0 left-0 flex justify-between items-center bg-[#07070fbf] py-0 pl-3 pr-8 sm:pr-12 border-b z-100 border-b-[#FFFFFF12] select-none">
      <div className="max-w-22 sm:max-w-25">
        <img className="w-full" src="Logo.png" alt="My Brand Logo" />
      </div>
      <div className="hidden sm:flex items-center gap-9">
        <ul className={`flex items-center gap-9 text-[16px] text-[#7878a0]`}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
        </ul>
        <a
          href="#"
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
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
          </ul>

          <button
            onClick={() => setNavShow((ns) => !ns)}
            className="py-2 text-primary-accent border border-border-color rounded uppercase font-bold hover:bg-accent-dim"
          >
            <a href="#">Hire Me</a>
          </button>
        </div>
      )}
    </nav>
  );
}
