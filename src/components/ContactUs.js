import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { Heading } from "./Heading";
import { Underline } from "./Underline";
import "./components.css";

export function ContactUs() {
  return (
    <div className="MainBox">
      <Heading title="contact" description="Contact Us" />
      <div className="ContactUs">
        <ContactInfo />
        <ContactForm />
      </div>
      <Underline />
    </div>
  );
}
