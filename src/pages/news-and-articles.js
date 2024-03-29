import React from "react";

// Config File
import _config from "../components/_config";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31SectionTitleFullWidth,
  H31Masthead1,
  H31BlogCardLoader1,
} from "../components/h31";
import ImgMastheadNewsAndEvents from "../components/images/mastheads/ImgMastheadNewsAndEvents";
import ImgHome1 from "../components/images/_home/ImgHome1";
import ImgHome2 from "../components/images/_home/ImgHome2";
import ImgHome3 from "../components/images/_home/ImgHome3";
import ImgHome4 from "../components/images/_home/ImgHome4";

// Data
const articles = [
  {
    image: <ImgHome1 />,
    title: "2019 DISNEY OPEN CALL AUDITIONS",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "2013-01-01T00:00:00.000",
    link: "/",
    linkText: "Read More",
  },
  {
    image: <ImgHome2 />,
    title: "ORLANDO MUSICIANS CONFERENCE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "2013-01-01T00:00:00.000",
    link: "/",
    linkText: "Read More",
  },
  {
    image: <ImgHome3 />,
    title: "10 TIPS FOR LIVE PERFORMANCES",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "2013-01-01T00:00:00.000",
    link: "/",
    linkText: "Read More",
  },
  {
    image: <ImgHome4 />,
    title: "CFMA MAY 12th MUSICIANS SOCIAL",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean non leo lacus. Aliquam imperdiet eleifend blandit. Donec vitae ex.",
    date: "2013-01-01T00:00:00.000",
    link: "/",
    linkText: "Read More",
  },
];

export default function () {
  return (
    <Layout>
      <SEO
        title="News & Articles"
        description="Stay up to date with the latest news on local gigs and events through our network. Also keep an eye out for helpful articles to improve your knowledge and skills as a professional musician."
      />

      <H31Masthead1
        ImageComponent={<ImgMastheadNewsAndEvents />}
        title="Central Florida Events"
      />

      <H31SectionTitleFullWidth
        backgroundColor={_config.colorPrimary}
        titleSmall="Central FL Musicians Association"
        titleLarge="News And Articles"
      />

      <H31BlogCardLoader1 articles={articles} />
    </Layout>
  );
}
