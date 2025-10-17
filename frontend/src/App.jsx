import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App(){
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
