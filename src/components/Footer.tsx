import React from "react";
import Logo from "./Logo";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#161616] text-white px-10 pt-10 pb-5">
      <div className="footer container mx-auto">
        <aside>
          <Logo />
          {/* <img src="/Rydeu2.png" alt="Logo" width={121} height={39} /> */}
          <span>Solution for all ground transfers</span>
          <span>Connect with us</span>
        </aside>
        <nav>
          <h6 className="footer-title">COMPANY</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Terms and Conditions</a>
          <a className="link link-hover">Imprint</a>
          <a className="link link-hover">Careers/ Jobs</a>
          <a className="link link-hover">Sitemap</a>
        </nav>
        <nav>
          <h6 className="footer-title">Help Center</h6>
          <a className="link link-hover">Customer FAQs</a>
          <a className="link link-hover">Business FAQs</a>
          <a className="link link-hover">Supplier FAQs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Our Services</h6>
          <a className="link link-hover">Airport Transfer</a>
          <a className="link link-hover">City Transfer</a>
          <a className="link link-hover">Hourly Transfer</a>
          <a className="link link-hover">Business</a>
          <a className="link link-hover">Supplier</a>
        </nav>
      </div>
      <hr className="border-white mt-10 mb-5" />
      <div className="footer-center">
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </div>
    </footer>
  );
};

export default Footer;
