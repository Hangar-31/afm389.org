import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { H31BlogCard1, H31Text3, H31Title2B } from "../components/h31";

// Images
import ImgHome1 from "../components/images/_home/ImgHome1";

export default () => (
  <Layout>
    <SEO title="" description="" />
    <H31BlogCard1
      ImageComponent={<ImgHome1 />}
      TitleComponent={<H31Title2B>Hello World</H31Title2B>}
      TextComponent1={<H31Text3>Hello World</H31Text3>}
      TextComponent2={<H31Text3>May 20, 2019</H31Text3>}
    />
  </Layout>
);
