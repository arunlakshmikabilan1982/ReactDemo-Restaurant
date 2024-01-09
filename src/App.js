import { Main } from "./components/Main";
import "./index.css";
import "./components/components.css";
import { Menu } from "./components/Menu";
import { Scroll } from "./components/Scroll";
import { ContactUs } from "./components/ContactUs";
import Specials from "./components/Specials";
import NavBar from "./components/NavBar";
import { Whyus } from "./components/Whyus";
import Gallery from "./components/Gallery";

const NavBarItems = [
  {
    name: "Home",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
  },
  {
    name: "Gallery",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
  },
  {
    name: "Home",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
  },
  {
    name: "Chefs",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
  },
  {
    name: "Orders",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
  },

  {
    name: "Events",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
  },
  {
    name: "Specials",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
  },
  {
    name: "Menu",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
  },
  {
    name: "about",
    href: "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_select",
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
      <NavBar title="Resturant" items={NavBarItems} />

      <Menu />
      <Main />
      <Gallery images={images} />
      <Specials />
      <ContactUs />
    </div>
  );
}

export default App;
