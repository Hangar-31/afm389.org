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

      <H31BlogCardLoader1 />
    </Layout>
  );
}
