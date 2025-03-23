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
    "A Connect Four inspired game application",
    "https://p1t0-group-2.github.io/P1T2-Array-of-Sunshine/",
    "https://github.com/sigros02/Project1",
    "/DEMO-GIF-Project1-Array-of-Sunshine.gif"
  ),
  new Project("Project 2", "Description of Project 2.", null, null, null),
  new Project("Project 3", "Description of Project 3.", null, null, null),
  new Project("Project 4", "Description of Project 4.", null, null, null),
  new Project("Project 5", "Description of Project 5.", null, null, null),
  new Project("Project 6", "Description of Project 6.", null, null, null),
];
