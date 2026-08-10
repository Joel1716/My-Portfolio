import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const contacts = [
    {
      name: "Github",
      icon: <FaGithub />,
    },
    {
      name: "X",
      icon: <FaXTwitter />,
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
    },
  ];
  return (
    <section className="px-4 mb-30">
      <h2>Contact</h2>
      {/* <p>Open to work</p> */}
      <p className="text-4xl font-extrabold leading-snug">
        Let's build <span className="text-primary-accent">something great</span>
      </p>
      <div className="flex gap-7">
        {contacts.map((contact) => (
          <a href="" className="flex items-center gap-1">
            <span className="text-base ">{contact.icon}</span>
            <p className="tracking-wider text-sm uppercase">{contact.name}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
