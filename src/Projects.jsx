// Projects.jsx
import EachProject from "./EachProject.jsx";
export default function Projects() {
  const projects = [
    {
      title: "Haple",
      description:
        "Haple was built after noticing how hard it is for student sellers on campus to actually get seen, most end up relying on a few friends or word-of-mouth, even when they have something genuinely worth buying. Haple gives sellers a profile, lets buyers browse by category for exactly what they need, and connects them straight to a seller's WhatsApp with one click. We're keeping things simple for now, WhatsApp handles buyer-seller contact while we validate the idea, with more features planned as we grow. It's live with our first cohort of 20 sellers",
      techs: ["React.js", "Tailwind"],
      links: [
        { name: "Live Site Url", link: "google.com" },
        { name: "Github Url", link: "google.com" },
      ],
    },
    {
      title: "Jia-ride",
      description: `JiaRide came from a simple observation, booking school transport is usually disorganized, and hard to track. I co-built JiaRide to give parents and students a structured way to find and book transport services, with a manual payment system that requires a receipt upload for verification. Transport services get a dashboard to see all their bookings in one place, and once a driver is assigned, they can send text updates on the ride's progress so parents and students stay in the loop. We're currently at the MVP stage, keeping things simple for now, with more features planned to be added and updated as the business grows. It's live, and we're currently onboarding our first users`,
      techs: ["React.js", "Tailwind"],
      links: [
        { name: "Live Site Url", link: "google.com" },
        { name: "Github Url", link: "google.com" },
      ],
    },
    {
      title: "HostelPal",
      description: `Proxy check-ins are a real problem in university hostels — students checking in on behalf of absent roommates, which makes attendance records unreliable. I built HostelPal to solve this with a multi-layered verification system: matric number lookup, private IP subnet checking to confirm you're actually on-site, and facial recognition to make sure the right person is checking in.
      Students use a mobile app to check in, while hostel staff get a web dashboard with real-time and historical attendance records, replacing manual, paper-based tracking. I ran empirical testing with 11 volunteers to fine-tune the facial recognition accuracy. The whole project became my final year project`,
      techs: ["React Native", "Tailwind", "React.js"],
      links: [
        { name: "Live Site Url", link: "google.com" },
        { name: "Github Url", link: "google.com" },
      ],
    },
  ];
  return (
    <section className="px-4">
      <h2>Projects</h2>
      <p>My Work</p>
      <div className="flex overflow-x-auto snap-x snap-mandatory gap-10 scrollbar-none mr-2">
        {projects.map((project) => (
          <EachProject key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
