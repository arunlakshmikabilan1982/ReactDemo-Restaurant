import "./components.css";

export function Heading(props) {
  return (
    <div>
      <h2 className="headingTitle">
        {props.title}
        <hr className="line" />
      </h2>
      <h1 className="headingDescription">{props.description}</h1>
    </div>
  );
}
