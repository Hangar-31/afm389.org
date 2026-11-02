import { graphql, useStaticQuery } from "gatsby";

export default function useSiteSettings() {
  const data = useStaticQuery(graphql`
    query SiteSettings {
      markdownRemark(
        fileAbsolutePath: { regex: "/site-content/site-settings.md$/" }
      ) {
        frontmatter {
          phone
          email
          address_line_1
          address_line_2
          map_url
          facebook
          instagram
          linkedin
        }
      }
    }
  `);
  const settings = data.markdownRemark.frontmatter;
  return {
    ...settings,
    telHref: `tel:+1${(settings.phone || "").replace(/\D/g, "").slice(-10)}`,
    mailHref: `mailto:${settings.email}`,
    socials: ["facebook", "instagram", "linkedin"]
      .filter((social) => settings[social])
      .map((social) => ({ social, link: settings[social] })),
  };
}
