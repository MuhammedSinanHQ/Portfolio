import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const socials = [
    { icon: <FaLinkedin />, path: "http://www.linkedin.com/in/realmuhammedsinan" },
    { icon: <FaGithub />, path: "https://github.com/MuhammedSinanHQ" },
  { icon: <FaInstagram />, path: "https://www.instagram.com/s_i_n_a_._n" },
  { icon: <FaTwitter />, path: "https://x.com/REALSINAN_07" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((Item, index) => {
        return (
          // FIXED: Changed "to" to "href"
          <Link key={index} href={Item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
            {Item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;