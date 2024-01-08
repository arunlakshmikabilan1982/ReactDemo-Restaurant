import { Heading } from "./Heading";
import SpecialsMain from "./SpecialsMain";
import { Underline } from "./Underline";
import "./components.css";

function Specials() {
  return (
    <div className="MainBox">
      <Heading title="SPECAILS" description="Check Out Tasty Menu" />
      <SpecialsMain />
      <Underline />
    </div>
  );
}

export default Specials;
