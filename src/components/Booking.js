import { useState } from "react";
import { Heading } from "./Heading";

export function Booking() {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    time: "",
    ofPeople: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      firstName: "",
      lastName: "",
    });
  };

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  }
  return (
    <div className="bookingForm" id="Booking">
      <div>
        <Heading title={"RESERVATION"} description={"Book a Table"} />
      </div>
      <form className="bookingInput" onSubmit={handleSubmit}>
        <div className="booking1Line">
          <input
            type="text"
            onChange={(e) => {
              handle(e);
            }}
            id="name"
            value={data.name}
            name="name"
            placeholder="Enter your name"
          ></input>

          <input
            type="text"
            onChange={(e) => {
              handle(e);
            }}
            id="email"
            value={data.email}
            name="email"
            placeholder="Enter your Email"
          ></input>

          <input
            type="text"
            onChange={(e) => {
              handle(e);
            }}
            id="phone"
            value={data.phone}
            name="phone"
            placeholder="Phone"
          ></input>
        </div>
        <div className="booking2Line">
          <input
            type="text"
            onChange={(e) => {
              handle(e);
            }}
            id="time"
            value={data.time}
            name="time"
            placeholder="Time"
          ></input>
          <input
            type="number"
            onChange={(e) => {
              handle(e);
            }}
            id="people"
            value={data.people}
            name="people"
            placeholder="#Of people"
          ></input>
        </div>

        <div className="bookingMessage">
          <textarea
            type="text"
            onChange={(e) => {
              handle(e);
            }}
            id="message"
            value={data.message}
            name="message"
            placeholder="Message"
          ></textarea>
        </div>

        <div className="text-center">
          <center>
            <button type="submit">Book a form</button>
          </center>
        </div>
      </form>
    </div>
  );
}
