export const certifications = [
  {
    id: 1,
    title: "Certified Product Manager (CPM)",
    issuer: "Product School",
    date: "2023",
    credentialId: "PM-2023-45821"
  },
  {
    id: 2,
    title: "Google UX Design Certificate",
    issuer: "Google / Coursera",
    date: "2022",
    credentialId: "GUX-2022-78904"
  },
  {
    id: 3,
    title: "Nielsen Norman UX Specialist",
    issuer: "Nielsen Norman Group",
    date: "2021",
    credentialId: "NN-UX-2021-12345"
  },
  {
    id: 4,
    title: "Agile Product Management",
    issuer: "Scrum Alliance",
    date: "2021",
    credentialId: "SCRUM-2021-98765"
  }
];

export type Certification = typeof certifications[0];
