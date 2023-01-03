export type AboutSectionData = {
  infoCards: AboutInfoData[];
  message: string;
  image: any;
  blurUrl: string;
};

export type AboutInfoData = {
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

export type ServiceData = {
  label: string;
  description: string;
  icon: string;
  iconImage: any;
  iconBlurUrl: string;
  seeMorePath: string;
};

export type ProjectPointData = {
  label: string;
  value: string;
}

export type ProjectLinkData = {
  type: string;
  url: string;
}

export type ProjectData = {
  title: string;
  imageName: string;
  image: any;
  imageBlurUrl: string;
  shortDescription: string;
  description: string;
  points: ProjectPointData[];
  links: ProjectLinkData[];
}
