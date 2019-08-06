import React from "react";

// Config File
import _config from "../components/_config";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31SectionTitleFullWidth,
  H31Masthead1,
  H31BlogCardLoader1
} from "../components/h31";
import ImgMastheadNewsAndEvents from "../components/images/mastheads/ImgMastheadNewsAndEvents";

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadNewsAndEvents />}
      title="Central Florida Events"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id rhoncus ligula. Quisque commodo, eros auctor elementum aliquam, urna turpis dapibus dolor, non feugiat tortor lectus."
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      titleSmall="Central FL Musicians Association"
      titleLarge="News And Events"
    />

    <H31BlogCardLoader1 />
  </Layout>
);
