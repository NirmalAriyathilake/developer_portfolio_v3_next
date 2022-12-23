export type AboutSectionData = {
  infoCards: AboutInfoCardData[];
  message: string;
  image: any;
  blurUrl: string;
};

export type AboutInfoCardData = {
  label: string;
  value: string;
};

export type IntroSectionData = {
  name: string;
  profession: string;
  yearsOfExperience: number;
  socialLinks: IntroSocialLinkData[];
  imageUrl: string;
};

export type IntroSocialLinkData = {
  label: string;
  url: string;
};

export type ServiceCardData = {
  label: string;
  description: string;
  icon: string;
  iconImage: any;
  iconBlurUrl: string;
  seeMorePath: string;
};
