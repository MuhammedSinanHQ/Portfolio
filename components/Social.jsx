import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaLinkedin />, path: "" },
    { icon: <FaGithub />, path: "" },
  { icon: <FaInstagram />, path: "" },
  { icon: <FaTwitter />, path: "" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((Item, index) => {
        return (
          // FIXED: Changed "to" to "href"
          <Link key={index} href={Item.path} className={iconStyles}>
            {Item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;