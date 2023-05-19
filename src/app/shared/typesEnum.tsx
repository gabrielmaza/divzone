export enum SelectedPageEnum {
  Home = "home",
  Theme = "theme",
  Benefits = "benefits",
  Services = "services",
  ContactUs = "contactus"
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}
export interface PackageType {
  icon: any;
  title: string;
  description: string;
}

export interface FeatureType {
  title: string;
  description: string;
}

export interface ServiceType {
  name: string;
  description?: string;
}