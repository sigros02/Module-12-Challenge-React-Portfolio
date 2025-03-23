import myPhoto from "/stuart-photo.jpg";

export default function AboutMe() {
  return (
    <section className="aboutme flex-grow-1 bg-light text-dark py-5 min-vh-100">
      <div className="container">
        <h1>About Me</h1>
        <img src={myPhoto} className="portrait pb-3" alt="portrait" />
        <p className="text-justify">
          As a Full-Stack Developer with a background in Electrical Engineering,
          I apply a versatile blend of analytical thinking, problem-solving, and
          continuous improvement to software development. With experience in
          industry leading solutions, like Typescript, React, Node, Express and
          PostgreSQL, I build and optimize full-stack applications with emphasis
          on user experiences.
        </p>
        <p className="text-justify">
          My user-first approach is based on the understanding that the success
          of any application depends on its ability to effectively meet user
          needs. With focus on responsiveness, scalability, and user experience,
          I've developed projects that translate complex requirements into
          successful applications that meet or exceed user expectations.
        </p>
        <p className="text-justify">
          I thrive in collaborative environments, where I can communicate with
          cross-functional teams to develop, test, and deploy applications. This
          allows me to leverage team members' expertise, to learn best practices
          and continue staying up-to-date with the latest industry trends. This
          is where my passion for learning, coding and problem-solving come
          together and allow me to tackle challenges, improve processes, and
          contribute to the success of every project.
        </p>
      </div>
    </section>
  );
}
