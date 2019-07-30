/* eslint-disable react/jsx-wrap-multilines */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

// Images
import ImgMastheadAbout from "../components/images/mastheads/ImgMastheadAbout";
import {
  H31Masthead1,
  H31TitleWithBackground,
  H31Title1B
} from "../components/h31";
import _config from "../components/_config";

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadAbout />}
      TitleComponent={
        <H31TitleWithBackground
          backgroundColor={_config.colorPrimary}
          TitleComponent={<H31Title1B>From The Team At CFMA</H31Title1B>}
        />
      }
      ParagraphComponent={<></>}
    />
  </Layout>
);
