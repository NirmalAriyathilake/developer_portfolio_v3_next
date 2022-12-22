export type AboutSectionData = {
  infoCards: AboutInfoCard[];
  message: string;
  image: any;
  blurUrl: string;
};

export type AboutInfoCard = {
  label: string;
  value: string;
};

export type IntroSectionData = {
  name: string;
  profession: string;
  yearsOfExperience: number;
  socialLinks: IntroSocialLink[];
  imageUrl: string;
};

export type IntroSocialLink = {
  label: string;
  url: string;
};
