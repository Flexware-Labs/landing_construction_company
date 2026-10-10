import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hymprojectsolutions.com";
  const routes = ["", "/servicios", "/acerca-de-nosotros", "/trabaja-con-nosotros", "/contacto", "/politica-de-privacidad", "/terminos-y-condiciones"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/servicios" ? 0.9 : route.startsWith("/politica") || route.startsWith("/terminos") ? 0.3 : 0.7,
  }));
}
