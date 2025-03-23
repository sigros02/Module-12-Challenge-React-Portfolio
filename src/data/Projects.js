class Project {
  title;
  description;
  deployedLink;
  repoLink;
  gifLink;
  constructor(title, description, deployedLink, repoLink, gifLink) {
    this.title = title;
    this.description = description;
    this.deployedLink = deployedLink;
    this.repoLink = repoLink;
    this.gifLink = gifLink;
  }
}

export const projects = [
  new Project(
    "Array of Sunshine",
    "Connect Four inspired game using Bootstrap and Local Storage",
    "https://p1t0-group-2.github.io/P1T2-Array-of-Sunshine/",
    "https://github.com/sigros02/Project1",
    "/DEMO-GIF-Project1-Array-of-Sunshine.gif"
  ),
  new Project(
    "Employee Tracker",
    "Employee tracker using MySQL and Inquirer",
    "https://drive.google.com/file/d/1opTjgO8OcFpjwxZYUk-5rzDkDXqPvLKc/view?usp=sharing",
    "https://github.com/sigros02/Module-10-Challenge-SQL-Employee-Tracker",
    "/DEMO-GIF-Challenge10-SQL-Employee-Tracker.gif"
  ),
  new Project(
    "Weather Dashboard",
    "Weather dashboard using Express Router and OpenWeather API",
    "https://module-9-challenge-servers-and-apis.onrender.com/",
    "https://github.com/sigros02/Module-9-Challenge-Servers-and-APIs-Weather-Dashboard",
    "DEMO-GIF-Challenge09-Server-and-REST-API-Weather-Dashboard.gif"
  ),
  new Project(
    "Project 4",
    "Coming Soon",
    null,
    null,
    "/[CITYPNG.COM]HD Coming Soon Black Stamp Sign PNG - 2000x2000.png"
  ),
  new Project(
    "Project 5",
    "Coming Soon",
    null,
    null,
    "/[CITYPNG.COM]HD Coming Soon Black Stamp Sign PNG - 2000x2000.png"
  ),
  new Project(
    "Project 6",
    "Coming Soon",
    null,
    null,
    "/[CITYPNG.COM]HD Coming Soon Black Stamp Sign PNG - 2000x2000.png"
  ),
];
