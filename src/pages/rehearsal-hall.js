import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { H31Masthead1 } from "../components/h31";
import ImgMastheadRehearsalHall from "../components/images/mastheads/ImgMastheadRehearsalHall";

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadRehearsalHall />}
      title="CFMA Rehearsal Facility"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id rhoncus ligula. Quisque commodo, eros auctor elementum aliquam, urna turpis dapibus dolor, non feugiat tortor lectus."
    />
  </Layout>
);
