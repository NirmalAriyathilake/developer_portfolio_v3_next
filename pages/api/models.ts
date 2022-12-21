export type IntroSectionData = {
  name: string;
  profession: string;
  yearsOfExperience: number;
  socialLinks: IntroSocialLink[];
};

export const introSectionDataEmpty: IntroSectionData = {
  name: "",
  profession: "",
  yearsOfExperience: 0,
  socialLinks: [],
};

export type IntroSocialLink = {
  label: string;
};
