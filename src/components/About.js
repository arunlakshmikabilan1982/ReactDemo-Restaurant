export function About() {
  const about = [
    {
      heading:
        "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
      content1:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      list1: "Ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      list2: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      list3:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
      content2:
        "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      imageURL: "images/about.jpg",
    },
  ];
  return (
    <div class="about">
      {about.map((about) => (
        <div class="aboutRow">
          <div class="aboutContent">
            <h3>{about.heading} </h3>
            <p>{about.content1} </p>
            <ul>
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                <i></i> {about.list1}
              </li>
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                <i></i> {about.list2}
              </li>
              <li>
                <span class="material-symbols-outlined">check_circle</span>
                <i></i> {about.list2}
              </li>
            </ul>
            <p>{about.content2} </p>
          </div>
          <div class="about-img">
            <img src={about.imageURL} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}
