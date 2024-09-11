import logo from "../assets/sushantkatelogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <a href="#"><img src={logo} alt="logo" /></a>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/sushant98k/"><FaLinkedin /></a>
      <a href="https://github.com/Sushant98K"><FaGithubSquare /></a>
      <a href="https://x.com/ig_ToyBreaker?s=09"><FaSquareXTwitter /></a>
      <a href="https://www.instagram.com/ig_toybreaker?igsh=MTJqc2VmdnYzNDVzOA=="><FaSquareInstagram /></a>      

    </div>

  </nav>
}

export default navbar