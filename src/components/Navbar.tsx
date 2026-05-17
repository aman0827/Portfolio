import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 1024;

    if (!isMobile) {
      // Desktop only: initialize ScrollSmoother
      smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

      smoother.scrollTop(0);
      smoother.paused(true);

      let links = document.querySelectorAll(".header ul a");
      links.forEach((elem) => {
        let element = elem as HTMLAnchorElement;
        element.addEventListener("click", (e) => {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        });
      });

      window.addEventListener("resize", () => {
        ScrollSmoother.refresh(true);
      });
    } else {
      // Mobile: use native scroll, no ScrollSmoother needed
      document.body.style.overflowY = "auto";
    }
  }, []);

  const toggleMenu = () => {
    const nav = document.querySelector(".header ul");
    const hamburger = document.querySelector(".hamburger");
    const overlay = document.querySelector(".nav-overlay");
    nav?.classList.toggle("nav-open");
    hamburger?.classList.toggle("open");
    overlay?.classList.toggle("active");
  };

  const closeMenu = () => {
    const nav = document.querySelector(".header ul");
    const hamburger = document.querySelector(".hamburger");
    const overlay = document.querySelector(".nav-overlay");
    nav?.classList.remove("nav-open");
    hamburger?.classList.remove("open");
    overlay?.classList.remove("active");
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          AT
        </a>
        <a
          href="mailto:aman.thakur.4544@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          aman.thakur.4544@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about" onClick={closeMenu}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={closeMenu}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={closeMenu}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        {/* Hamburger button — visible on mobile only */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Overlay for mobile menu */}
      <div className="nav-overlay" onClick={closeMenu}></div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
