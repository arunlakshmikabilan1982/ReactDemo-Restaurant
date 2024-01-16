import { Main } from "./components/Main";
import "./index.css";
import "./components/components.css";
import { Menu } from "./components/Menu";
import { Scroll } from "./components/Scroll";
import { ContactUs } from "./components/ContactUs";
import Specials from "./components/Specials";
import NavBar from "./components/NavBar";
import Gallery from "./components/Gallery";
import { About } from "./components/About";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Booking } from "./components/Booking";
import { Testimonial } from "./components/Testimonial";

const NavBarItems = [
  {
    name: "Home",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
    to: "#Home",
  },
  {
    name: "About",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
    to: "#About",
  },
  {
    name: "Menu",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
    to: "#Menu",
  },
  {
    name: "Specials",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
    to: "#Specials",
  },

  {
    name: "Events",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
    to: "#Events",
  },
  {
    name: "Chefs",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
    to: "#Chefs",
  },
  {
    name: "Gallery",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
    to: "#Gallery",
  },
  {
    name: "Whyus",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
    to: "#Whyus",
  },
  {
    name: "Contact",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
    to: "#Contact",
  },
];

const images = [
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-1.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-2.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-3.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-4.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-5.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-6.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-7.jpg",
  "https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/gallery/gallery-8.jpg",
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar title="Resturant" items={NavBarItems} />
        <Hero items={NavBarItems} />
        <About />
        <Main />
        <Menu />
        <Specials />
        <Scroll />
        <Booking />
        <Testimonial />
        <Gallery images={images} />
        <ContactUs />
      </BrowserRouter>
    </div>
  );
}

export default App;
