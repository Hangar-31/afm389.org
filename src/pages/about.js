import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31BlogCard1,
  H31Text3,
  H31Title3B,
  H31Title4A
} from "../components/h31";

// Images
import ImgHome1 from "../components/images/_home/ImgHome1";

export default () => (
  <Layout>
    <SEO title="" description="" />
    <H31BlogCard1
      overlayColor="rgba(243, 149, 8, 0.64)"
      ImageComponent={<ImgHome1 />}
      TitleComponent1={<H31Title3B>Hello World</H31Title3B>}
      TitleComponent2={<H31Title3B>Hello World</H31Title3B>}
      TitleComponent3={<H31Title4A>Read More!</H31Title4A>}
      TextComponent1={
        <H31Text3>This is a test blog element for testing purposes</H31Text3>
      }
      TextComponent2={<H31Text3>May 20, 2019</H31Text3>}
    />
  </Layout>
);
