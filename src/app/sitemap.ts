import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://div.zone",
      lastModified: new Date(),
    },
  ];
}
