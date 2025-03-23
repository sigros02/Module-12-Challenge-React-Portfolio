export default function Resume() {
  return (
    <section className="resume flex-grow-1 min-vh-100 bg-light text-dark py-5">
      <div className="container">
        <a
          href="../public/2025_Stuart_Gross_Resume_SW.docx"
          download
          className="btn btn-secondary btn-lg d-inline-flex align-items-center"
        >
          <h1 className="mb-0 me-2">Resume</h1>
          <span>Download</span>
        </a>
        <h2 className="pt-3">Front End Proficiencies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h2>Back End Proficiencies</h2>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
        <h2>Soft Skills</h2>
        <ul>
          <li>Strong problem-solving and analytical thinking</li>
          <li>Effective communication and teamwork</li>
          <li>Adaptability and eagerness to learn</li>
          <li>Passion for shared knowledge</li>
        </ul>
      </div>
    </section>
  );
}
