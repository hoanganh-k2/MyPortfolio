import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdEmail, MdPhone } from "react-icons/md";
import { CONTACT } from "helpers/data";

const SocialMedia = () => {
  const links = [
    {
      key: "github",
      href: CONTACT.GITHUB_URL,
      title: "GitHub",
      icon: <FaGithub size={30} />,
    },
    {
      key: "linkedin",
      href: CONTACT.LINKEDIN_URL,
      title: "LinkedIn",
      icon: <FaLinkedin size={30} />,
    },
    {
      key: "email",
      href: `mailto:${CONTACT.EMAIL}`,
      title: CONTACT.EMAIL,
      icon: <MdEmail size={30} />,
    },
    {
      key: "phone",
      href: `tel:${CONTACT.PHONE}`,
      title: CONTACT.PHONE_DISPLAY,
      icon: <MdPhone size={30} />,
    },
  ].filter((item) => item.href && !item.href.endsWith("mailto:") && item.href !== "tel:");

  return (
    <div className="my-4 d-flex align-items-center gap-3">
      {links.map((item) => (
        <a
          key={item.key}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="highlight social-icon"
          title={item.title}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMedia;
