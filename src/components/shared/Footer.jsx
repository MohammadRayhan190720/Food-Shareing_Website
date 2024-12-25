import Logo from "../../assets/images/logo.webp";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 via-green-300 to-yellow-400 text-white  ">
      <footer className="footer   px-10 py-14 ">
        <aside>
          <img className="w-20 h-20 rounded-full" src={Logo} alt="logo" />

          <p>
            Food For All
            <br />
            <span>
              Providing nutritious meals to everyone, ensuring no one goes
              hungry—join us in sharing food for a better tomorrow.
            </span>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-text">Social</h6>
          <div className="grid grid-flow-col   gap-4 text-2xl">
            <a
              className="text-[#24A4F2]"
              href="https://x.com/?lang=en"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className="text-[#0A66C2]"
              href="https://www.linkedin.com/in/md-rayhan-mia-927115220/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="text-[#0866FF]"
              href="https://www.facebook.com/rs.rayhan.18"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              className="text-[#FE09D9]"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <FaInstagramSquare />
            </a>
          </div>
        </nav>
      </footer>
      <footer className="footer footer-center p-8">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Food
            For All LTD.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
