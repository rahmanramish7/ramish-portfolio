import logo from "../assets/kevinRushLogo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from "react-icons/fa";


const Navbar = () => {
  return <nav className=" mb-10 flex items-center justify-between py-2">
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>

    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/rahmanramish7/"><FaLinkedin /></a>
        <a href="https://github.com/rahmanramish7"><FaGithub /></a>
        <FaInstagram />
        <FaTwitter />
    </div>
  </nav>
  
}

export default Navbar