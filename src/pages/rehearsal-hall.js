import React from "react";
import { css } from "@emotion/core";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31Masthead1,
  H31LayoutContainer,
  H31LayoutCol,
  H31ContentBlock2,
  H31Text3,
  H31LayoutRow
} from "../components/h31";

// Images
import ImgMastheadRehearsalHall from "../components/images/mastheads/ImgMastheadRehearsalHall";
import ImgHome1 from "../components/images/_home/ImgHome1";

const content = [
  <H31Text3>
    Our newly-renovated rehearsal space is 25’x40’ and features a Yamaha upright
    piano, drum set, speakers, amplifier, Hammond B-3 organ, tables, chairs and
    music stands for your convenience. Refrigerator and microwave oven are also
    available. It is air conditioned and has various lighting levels.
  </H31Text3>,
  <H31Text3>
    The use of this space is free to our members. This is a great value in a
    city in which the average rehearsal space cost is $25/hour to several
    hundred dollars per month.
  </H31Text3>
];

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadRehearsalHall />}
      title="CFMA Rehearsal Facility"
      text="Do you need rehearsal space? Our rehearsal facility is available 24/7 and is free to members in good standing."
    />

    <H31LayoutContainer
      fluid
      as="section"
      css={css`
        margin: 45px 0;
      `}
    >
      <H31LayoutRow>
        <H31LayoutCol md={6}>
          <H31ContentBlock2 title="Our Facility">{content}</H31ContentBlock2>
        </H31LayoutCol>
        <H31LayoutCol
          css={css`
            .gatsby-image-wrapper {
              margin-bottom: 30px;
            }
          `}
          md={3}
        >
          <ImgHome1 />
          <ImgHome1 />
        </H31LayoutCol>
        <H31LayoutCol
          css={css`
            .gatsby-image-wrapper {
              margin-bottom: 30px;
            }
          `}
          md={3}
        >
          <ImgHome1 />
          <ImgHome1 />
        </H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>
  </Layout>
);
