import { nodyData } from "./nodyData";

export function detectIntent(text) {
  const t = text.toLowerCase();

  if (t.includes("who is somya")) return "ABOUT";
  if (t.includes("what does somya do")) return "ABOUT";
  if (t.includes("degree")) return "DEGREE";
  if (t.includes("skills")) return "SKILLS";
  if (t.includes("best project") || t.includes("strongest project"))
    return "BEST_PROJECT";
  if (t.includes("projects")) return "PROJECTS";

  return "UNKNOWN";
}

export function generateAnswer(intent) {
  switch (intent) {
    case "ABOUT":
      return nodyData.about;

    case "DEGREE":
      return `Somya is pursuing ${nodyData.person.degree}`;

    case "SKILLS":
      return `Somya is skilled in ${nodyData.person.skills.join(", ")}`;

    case "BEST_PROJECT":
      return `His strongest project is ${nodyData.strongestProject.name}. ${nodyData.strongestProject.description}`;

    case "PROJECTS":
      return `He has built AI projects like ${nodyData.projects.ai} and MERN stack projects like ${nodyData.projects.mern}`;

    default:
      return "I can help you with Somya's skills, projects, or experience. Please ask again.";
  }
}
