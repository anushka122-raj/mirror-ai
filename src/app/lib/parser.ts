const SKILLS = [
  "Python",
  "Java",
  "C",
  "C++",
  "C#",
  "JavaScript",
  "MongoDB",
  "Node.js",
  "React",
  "MediaPipe",
  "Machine Learning",
  "Deep Learning",
  "Algorithms",
  "Data Structures",
  "DBMS",
  "OOPS",
  "Git",
  "GitHub",
  "MySQL",
  "SQL",
  "Next.js",
  "Linux",
  "OpenCV",
  "Computer Vision",
  "TypeScript",
];

export function parseResume(text: string) {

  // ---------- Name ----------
  const lines = text.split("\n").filter((line) => line.trim() !== "");
  const name = lines[0] || "";

  // ---------- Email ----------
  const email =
    text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/)?.[0] || "";

  // ---------- Phone ----------
  const phone =
    text.match(/(\+91[- ]?)?[6-9]\d{9}/)?.[0] || "";

  // ---------- LinkedIn ----------
  const linkedin =
    text.match(/https?:\/\/(www\.)?linkedin\.com\/[^\s]+/)?.[0] || "";

  // ---------- GitHub ----------
  const github =
    text.match(/https?:\/\/(www\.)?github\.com\/[^\s]+/)?.[0] || "";

  // ---------- Skills ----------
  const lowerText = text.toLowerCase();

  const foundSkills: string[] = [];

  for (const skill of SKILLS) {
    if (lowerText.includes(skill.toLowerCase())) {
      foundSkills.push(skill);
    }
  }
  // ---------- Education ----------

const educationSection =
  text.match(/EDUCATION([\s\S]*?)TECHNICAL SKILLS/i)?.[1] || "";
const college =
  educationSection
    .split("\n")
    .find(line => line.includes("College"))
    ?.trim() || "";
  const degree =
  educationSection
    .split("\n")
    .find(line =>
      line.toLowerCase().includes("bachelor") ||
      line.toLowerCase().includes("b.tech"))
    ?.trim() || "";
  const cgpa =
  educationSection.match(/CGPA[:\s]*([0-9.]+)/i)?.[1] || "";
   

  // ---------- Projects ----------

  const projectsSection =
  text.match(/PROJECTS([\s\S]*?)RESEARCH PUBLICATION/i)?.[1] || "";
 
   const projects: string[] = [];
   const projectLines = projectsSection.split("\n")
   for (const line of projectLines) {

  if (line.includes("|")) {

    const projectName = line.split("|")[0].trim();

    projects.push(projectName);
  }

};
  return {
  name,
  email,
  phone,
  linkedin,
  github,
  skills: foundSkills,
  college,
  degree,
  cgpa,
  projects,
};
}