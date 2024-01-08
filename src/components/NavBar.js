import React from "react";

export default function NavBar(props) {
  return (
    <div className="NavBar">
      <h1 className="NavBarHeading">{props.title}</h1>
      <div className="NavBarItems">
        {props.items.map((item) => (
          <a className="NavBarItem" href={item.link}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}
