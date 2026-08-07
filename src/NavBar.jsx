export default function NavBar() {
  return (
    <nav className="fixed left-0 right-0 flex justify-between items-center bg-[#07070fbf] py-0 px-3 border-b z-100 border-b-[#FFFFFF12] select-none">
      <div className="max-w-22 sm:max-w-25">
        <img className="w-full" src="Logo.png" alt="My Brand Logo" />
      </div>
      <div className="flex items-center gap-9">
        <ul className="hidden sm:flex items-center gap-9 text-[16px] text-[#7878a0]">
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
        <button className="py-1 px-5 text-primary-accent border border-border-color rounded">
          <a href="#">Hire Me</a>
        </button>
      </div>
    </nav>
  );
}
