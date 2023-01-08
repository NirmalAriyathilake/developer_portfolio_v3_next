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
  cvdownload: string;
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

export type AppProjectData = {
  description: string;
  image: any;
  imageBlurUrl: string;
  imageName: string;
  language: string;
  links: ProjectLinkData[];
  points: ProjectPointData[];
  shortDescription: string;
  title: string;
}

export type DownloadedAsset = {
  blurUrl: string;
  image: any;
  url: string;
}

export type ContactData = {
  iconName: string;
  iconImage: any;
  iconBlurUrl: string;
  show: string;
  value: string;
}

export type HeaderItemData = {
  label: string;
  link: string;
}

export type PackageProjectData = {
  description: string;
  image: any;
  imageBlurUrl: string;
  imageName: string;
  language: string;
  links: ProjectLinkData[];
  points: ProjectPointData[];
  sampleCode: [];
  shortDescription: string;
  title: string;
}
