import ScrollToTop from "./components/Scrol";
import SEO from "./components/SEO";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Programming from "./pages/Programming";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Music from "./pages/Music";
import Karate from "./pages/Karate";
import Contact from "./pages/Contact";

import "./App.css";


export default function App() {
    return (
        <div className="site-shell">
            <Navbar />
            <ScrollToTop />
            <SEO />
            <main className="page-content">
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/programming" element={<Programming />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/karate" element={<Karate />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}