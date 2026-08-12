export type Academy = "atlasgr" | "totaltrack";

export const ACADEMY_THEMES = {
  atlasgr: {
    name: "ATLASGR",
    primaryColor: "bg-atlas-orange",
    gradient: "bg-gradient-atlas",
    textGradient: "text-gradient-atlas",
    logoLight: "/brand/atlas-logo.svg",
    logoDark: "/brand/atlas-logo-negative.svg",
    favicon: "/brand/atlas-favicon.svg",
    iconColor: "text-atlas-orange",
  },
  totaltrack: {
    name: "Total Track",
    primaryColor: "bg-blue-600",
    gradient: "bg-gradient-to-r from-blue-600 to-blue-400",
    textGradient: "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400",
    logoLight: "/brand/totaltrack-logo-light.svg",
    logoDark: "/brand/totaltrack-logo-dark.svg",
    favicon: "/brand/totaltrack-favicon.svg",
    iconColor: "text-blue-500",
  }
};
