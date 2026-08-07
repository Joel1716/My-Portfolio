import EachProject from "./EachProject.jsx";
export default function Projects() {
  const projects = [
    {
      title: "Haple",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, exercitationem cumque? Aperiam esse doloribus modi, placeat, adipisci atque temporibus, omnis iste illum voluptates cum nemo? Fugit, ab illum! Beatae adipisci iure, quo, ullam accusantium reiciendis assumenda quis hic suscipit eius, possimus non voluptatem ducimus ratione. Reiciendis perferendis maxime voluptatibus ducimus?",
      techs: ["React", "Tailwind"],
      links: [
        {
          name: "Live Site Url",
          link: "google.com",
        },
        {
          name: "Github Url",
          link: "google.com",
        },
      ],
    },
    {
      title: "HostePal",
      techs: ["React Native", "Tailwind"],
      links: [
        {
          name: "Github Url",
          link: "google.com",
        },
      ],
    },
  ];
  return (
    <section className="px-4">
      <h2>Projects</h2>
      <p>My Work</p>
      <div className="space-y-8">
        {projects.map((project) => {
          return <EachProject project={project}></EachProject>;
        })}
      </div>
    </section>
  );
}
