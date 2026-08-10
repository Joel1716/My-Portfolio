import { FaLongArrowAltRight } from "react-icons/fa";
export default function About() {
  return (
    <section className="px-4 pb-10">
      <h2>About</h2>
      <p>Who I am</p>
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-7 lg:gap-7 lg:mx-5">
        <div className=" max-w-100 mx-auto md:max-w-110 ">
          {/* Image Frame */}
          <div className="relative overflow-hidden rounded-2xl max-h-[450px]">
            <img
              className="w-full h-full object-cover"
              src="Personal-Pic.jpeg"
              alt="Profile portrait"
              loading="lazy"
            />
            {/* Subtle Gradient Shadow Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07070f]/90 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
        <div className="text-justify space-y-2 text-sm md:text-[15px] leading-loose">
          <p>
            I'm a Frontend Developer based in Nigeria, and I like building
            things that solve problems people actually deal with. Also making
            websites that are beautiful and align with what you actually need.
          </p>
          <p>
            I graduated from Bowen University with{" "}
            <span className="text-violet-400">First Class Honours</span> in
            Computer Science, where I built HostelPal, a biometric attendance
            system that tackles proxy check-ins in university hostels using
            facial recognition and IP verification.
          </p>
          <p>
            Since then, I've co-founded and built three more products: JiaRide,
            a school transport booking platform; Haple, a marketplace helping
            student sellers get discovered; and BowenCab, a campus ride-hailing
            platform currently in development.
          </p>

          {/* <p>
            I work mainly with React, React Native, Tailwind CSS, and Supabase,
            and I like being involved in a project end-to-end, from designing
            the database to shipping the interface people actually use.
          </p> */}
          <p>
            When I'm not building, I'm usually listening to music. But honestly,
            the feeling of creating something and watching it come together is
            what I enjoy most.
          </p>
          <div className="flex items-center gap-5 mt-5">
            <button className="btn-purple">
              <a href="#">Get in Touch</a>
            </button>
            <a href="" className="flex gap-2 items-center text-violet-400">
              Download CV
              <span>
                <FaLongArrowAltRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
