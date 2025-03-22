import myPhoto from "/stuart-photo.jpg";

export default function AboutMe() {
  return (
    <section className="aboutme flex-grow-1 min-vh-100 bg-light text-dark py-5">
      <div className="container">
        <h1>About Me</h1>
        <img src={myPhoto} className="portrait" alt="portrait" />
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
}
