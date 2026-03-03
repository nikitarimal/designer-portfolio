export const skills = [
  {
    id: 1,
    category: "UX Strategy",
    items: ["User Research", "Information Architecture", "User Personas", "Usability Testing"]
  },
  {
    id: 2,
    category: "Design",
    items: ["UI/UX Design", "Wireframing", "Prototyping", "Design Systems"]
  },
  {
    id: 3,
    category: "Tools & Methods",
    items: ["Figma", "Adobe XD", "Sketch", "Miro", "Notion"]
  },
  {
    id: 4,
    category: "Soft Skills",
    items: ["Communication", "Leadership", "Problem Solving", "Cross-functional Collaboration"]
  }
];

export type Skill = typeof skills[0];
