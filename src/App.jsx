import { ReactLenis, useLenis } from "lenis/react";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Routers from "./Routers";
import "lenis/dist/lenis.css";
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 600, // ms
      once: true, // animate only once
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <>
      <ReactLenis root />
      <ScrollToTopButton />
      <Routers />
    </>
  );
}
