export const COMPANY_SKILLS = {
  Google: [
    "Python",
    "Java",
    "Algorithms",
    "Data Structures",
    "Git",
    "SQL",
    "Linux"
  ],
};

export function calculateCompanyMatch(
  company: string,
  resumeSkills: string[]
) {

  const requiredSkills =
    COMPANY_SKILLS[company as keyof typeof COMPANY_SKILLS];

}