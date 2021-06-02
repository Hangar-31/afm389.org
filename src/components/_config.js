export default {
  // Colors
  colorPrimary: "#6DA55F",
  colorSecondary: "#164F4B",
  colorTertiary: "#F39508",
  colorWhite: "#ffffff",
  colorDarkGrey: "#595959",
  colorGrey: "#4D4D4D",
  colorLightGrey: "#959595",
  colorBlack: "#000000",

  // Font Families
  fontPrimary: "Roboto Slab",
  fontSecondary: "Sarpanch",
  fontTertiary: "Staatliches",
  fontQuintery: "Assistant",

  // Default Padding
  padding: 30,

  // Sizes
  sizeXl: 1440,
  sizeLg: 1200,
  sizeMd: 992,
  sizeSm: 768,
  sizeXs: 500,
  sizeXXs: 375,

  // Main Navigation
  mainNav: [
    {
      name: "Home",
      to: "/"
    },
    {
      name: "About Us",
      to: "/about"
    },
    {
      name: "Member Benefits",
      to: "/member-benefits"
    },
    // {
    //   name: "Find A Musician",
    //   to: "/find-a-musician"
    // },
    {
      name: "News And Articles",
      to: "/news-and-articles"
    },
    {
      name: "Contact",
      to: "/contact"
    },
    {
      name: "Rehearsal Hall",
      to: "/rehearsal-hall"
    }
  ],

  // Sitemap Navigation
  sitemapNav: [
    {
      title: "PARTNERS",
      links: [
        {
          name: "American Federation of Musicians",
          to: "https://www.afm.org/",
          external: true
        }
      ]
    },
    {
      title: "ABOUT US",
      links: [
        {
          name: "CFMA History",
          to: "/about"
        },
        {
          name: "The Team at CFMA",
          to: "/about#board-of-directors"
        }
      ]
    },
    {
      title: "MEMBER BENEFITS",
      links: [
        {
          name: "Benefits",
          to: "/member-benefits"
        },
        {
          name: "(CBA) Partners",
          to: "/member-benefits#cbas"
        }
      ]
    },
    {
      title: "NEWS & ARTICLES",
      links: [
        {
          name: "Attending An Informational Gathering",
          to: "/news-and-articles/attending-an-information-gathering"
        },
        {
          name: "The Subtle Art of Dinner Music",
          to: "/news-and-articles/the-subtle-art-of-dinner-music"
        }
      ]
    },
    {
      title: "CONTACT",
      links: [
        {
          name: "Contact",
          to: "/contact"
        }
      ]
    },
    {
      title: "REHEARSAL HALL",
      links: [
        {
          name: "Information",
          to: "/rehearsal-hall#information"
        },
        {
          name: "Calendar",
          to: "/rehearsal-hall#calendar"
        },
        {
          name: "Rules",
          to: "/rehearsal-hall#rules"
        }
      ]
    }
  ],

  // Footer Navigation
  footerNav: [
    {
      name: "Privacy Policy",
      to: "/privacy-policy"
    },
    {
      name: "Terms of Service",
      to: "/terms-of-service"
    }
  ],

  // Socials
  socials: [
    {
      social: "facebook",
      link: "https://www.facebook.com/CentralFloridaMusiciansAssociation/"
    }
  ]
};
