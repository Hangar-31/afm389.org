/* eslint-disable react/jsx-wrap-multilines */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31ContentBlock1,
  H31SectionTitleFullWidth,
  H31CallToAction,
  H31Testimonials,
  H31Masthead1,
  H31Title2,
  H31Paragraph1,
  H31TitleWithBackground
} from "../components/h31";
import ImgMastheadHome from "../components/images/ImgMastheadHome";
import _config from "../components/_config";

export default () => (
  <Layout>
    <SEO title="" description="" />
    <H31Masthead1
      ImageComponent={<ImgMastheadHome />}
      TitleComponent={
        <H31TitleWithBackground
          backgroundColor={_config.colorPrimary}
          TitleComponent={<H31Title2>Your Path to a Musical Career</H31Title2>}
        />
      }
      ParagraphComponent={
        <H31Paragraph1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id
          rhoncus ligula. Quisque commodo, eros auctor elementum aliquam, urna
          turpis dapibus dolor, non feugiat tortor lectus eu arcu. Integer
          lobortis iaculis odio id dapibus. Pellentesque finibus ac felis eu
          ultricies. Cras ornare quam lectus, eu venenatis ex eleifend quis.
        </H31Paragraph1>
      }
    />
    <H31SectionTitleFullWidth />
    <H31ContentBlock1 />
    <H31ContentBlock1 />
    <H31ContentBlock1 />
    <H31ContentBlock1 />
    <H31CallToAction />
    <H31Testimonials />
  </Layout>
);
