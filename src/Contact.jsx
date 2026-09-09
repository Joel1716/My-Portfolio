import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Toast from "./Toast";

const FORMSPREE_ENDPOINT = `https://formspree.io/f/${
  import.meta.env.VITE_FORMSPREE_FORM_ID
}`;

export default function Contact() {
  const contacts = [
    {
      name: "Github",
      icon: <FaGithub />,
      link: "https://github.com/Joel1716",
    },
    {
      name: "X",
      icon: <FaXTwitter />,
      link: "https://x.com/Joelcodez",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/joel-ohikhena-8440432b9/",
    },
  ];

  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [toast, setToast] = useState(null); // { message, type } | null

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    // Honeypot: if this hidden field is filled, silently drop the submission.
    if (form._gotcha.value) return;

    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        setToast({
          message: "Thanks! I'll get back to you soon.",
          type: "success",
        });
        form.reset();
      } else {
        setStatus("error");
        setToast({
          message:
            "Something went wrong. Please try again or email me directly.",
          type: "error",
        });
      }
    } catch {
      setStatus("error");
      setToast({
        message: "Something went wrong. Please try again or email me directly.",
        type: "error",
      });
    }
  }

  return (
    <section id="contact" className="px-4 mb-30">
      <h2>Contact</h2>
      {/* <p>Open to work</p> */}
      <p className="text-4xl font-extrabold leading-snug">
        Let's build <span className="text-primary-accent">something great</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mt-8"
      >
        <input
          type="text"
          name="_gotcha"
          className="hidden"
          tabIndex="-1"
          autoComplete="off"
        />

        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm text-fg-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="bg-transparent border border-border-color rounded px-3 py-2 outline-none focus:border-primary-accent"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm text-fg-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="bg-transparent border border-border-color rounded px-3 py-2 outline-none focus:border-primary-accent"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm text-fg-muted">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="bg-transparent border border-border-color rounded px-3 py-2 outline-none focus:border-primary-accent resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-purple w-fit cursor-pointer"
        >
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
      </form>

      <div className="flex gap-7 mt-8">
        {contacts.map((contact) => (
          <a
            href={contact.link}
            target="_blank"
            className="flex items-center gap-1"
            key={contact.name}
          >
            <span className="text-base ">{contact.icon}</span>
            <p className="tracking-wider text-sm uppercase">{contact.name}</p>
          </a>
        ))}
      </div>

      <Toast
        message={toast?.message}
        type={toast?.type}
        onClose={() => setToast(null)}
      />
    </section>
  );
}
