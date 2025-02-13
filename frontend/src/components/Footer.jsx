import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {

  FaGithub,
  FaLinkedin,
} from "react-icons/fa6";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Fenway, Boston , Massachusetts, United States</li>
            <li>hublisushmita7@gmail.com</li>
            <li>+1 1111111111</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li >
              <Link to={"/"}>Home</Link>
            </li>
            <li >
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"https://github.com/Sushmita-Hubli"}>
                <span>
                  <FaGithub />
                </span>
                <span>Github</span>
              </Link>
            </li>
            <li>
              <Link to={"https://www.linkedin.com/in/sushmita-hubli-0109a6244/"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By CodeWithZeeshu
      </div>
    </>
  );
};

export default Footer;