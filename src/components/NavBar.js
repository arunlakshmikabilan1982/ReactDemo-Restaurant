import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function NavBar(props) {
  return (
    // <div className="NavBar">
    //   <h1 className="NavBarHeading">{props.title}</h1>
    //   <div className="NavBarItems">
    //     {props.items.map((item) => (
    //       <a className="NavBarItem" href={item.link}>
    //         {item.name}
    //       </a>
    //     ))}
    //   </div>
    // </div>
    <div className="NavBar" id="NavBar">
      <h1 className="NavBarHeading">{"Resturant"}</h1>
      <div className="NavBarItems">
        {props.items.map((item) => (
          <Link
            to={item.to}
            className="NavBarItem"
            style={{ textDecoration: "none" }}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
