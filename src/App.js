import { Main } from "./components/Main";
import "./index.css";
import "./components/components.css";
import { Menu } from "./components/Menu";
import { Scroll } from "./components/Scroll";
import { ContactUs } from "./components/ContactUs";
import Specials from "./components/Specials";
import NavBar from "./NavBar";
import { Whyus } from "./components/Whyus";

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

function App() {
  return (
    <div className="App">
      <NavBar title="Resturant" items={NavBarItems} />
      <Menu />
      <Main />
      {/* <div className="ScollerBg">
        <Scroll />
  </div> */}
      <Specials />
      <ContactUs />
    </div>
  );
}

export default App;
