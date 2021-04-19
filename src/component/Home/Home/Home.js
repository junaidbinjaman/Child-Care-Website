import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Events from "../Events/Events";
import HeroArea from "../HeroArea/HeroArea";
import Map from "../Map/Map";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import "./Home.css";

const Home = () => {
  return (
    <section>
      <header>
        <Header />
      </header>{" "}
      <main>
        <section className="hero-area-section" id="home">
          <HeroArea />
        </section>
        <section className="about-section" id="about">
          <About />
        </section>
        <section className="service-section" id="service">
          <Services />
        </section>
        <section className="testimonial-section" id="testimonial">
          <Testimonial />
        </section>
        <section className="events-section" id="event">
          <Events />
        </section>
        <section className="blogs-section" id="blogs">
          <Blogs />
        </section>
        <section className="contact-section" id="contact">
          <Contact />
        </section>
        <section>
          <Map />
        </section>
      </main>
      <footer className="footer-section">
        <Footer />
      </footer>
    </section>
  );
};

export default Home;
