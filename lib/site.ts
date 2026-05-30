export const SITE_NAME = "Bronco Drift";

export const SITE_DESCRIPTION =
  "Independent web work — interfaces, systems, and the occasional side project.";

export const SITE_DESCRIPTION_ES =
  "Trabajo web independiente — interfaces, sistemas y algún proyecto paralelo.";

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
