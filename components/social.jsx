import Link from "next/link"

import {FaGithub, FaLinkedinIn, FaInstagram} from "react-icons/fa"

const socials = [
    {icon: <FaGithub /> , path: "https://github.com/ShadeSpears"},
    {icon: <FaLinkedinIn /> , path: "https://linkedin.com/in/shadespears"},
    {icon: <FaInstagram /> , path: ""},
]

const social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index) => {
        return (
        <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
        </Link>
        );
    })}
    </div>
  )
}

export default social