import { MetadataRoute } from "next";
import { deployURL } from "src/helpers/environment";

export const dynamic = "force-static"; // Ensures full static export
export const revalidate = false; // Disables ISR

const baseURL = deployURL ? `https://${deployURL}` : "https://ekipoure.ir";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseURL,
      lastModified: new Date().toISOString(),
    },
  ];
}
