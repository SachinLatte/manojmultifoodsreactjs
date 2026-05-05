import { ReactLenis, useLenis } from "lenis/react";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";
import Routers from "./Routers";
import "lenis/dist/lenis.css";
export default function App() {
  return (
    <>
      <ReactLenis root />
      <ScrollToTopButton />
      <Routers />
      
    </>
  );
}
