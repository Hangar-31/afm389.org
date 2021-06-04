/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { css } from "@emotion/core";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  H31Masthead1,
  H31SectionTitleFullWidth,
  H31LayoutCol,
  H31LayoutRow,
  H31LayoutContainer
} from "../components/h31";

// Images
import ImgMastheadFindAMusician from "../components/images/mastheads/ImgMastheadFindAMusician";
import _config from "../components/_config";
import MemberDirectoryContext from "../components/h31/section-member-directory/SectionMemberDirectory";

export default () => (
  <Layout>
    <SEO
      title="Find A Musician"
      description="The Central Florida Musicians’ Association (CFMA) members directory allows you to find a musician for your next event or job opening!"
    />

    <H31Masthead1
      ImageComponent={<ImgMastheadFindAMusician />}
      title="Find A Musician"
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      titleSmall="Central FL Musicians Association"
      titleSmallColor={_config.colorSecondary}
      titleLarge="Find A Musician"
    />

    <H31LayoutContainer
      fluid
      as="section"
      css={css`
        margin: 45px 0;
        @media (max-width: 575px) {
          margin: 15px 0;
        }
      `}
    >
      <H31LayoutRow>
        <H31LayoutCol xs={1} md={2} xl={3} />
        <MemberDirectoryContext />
        <H31LayoutCol xs={1} md={2} xl={3} />
      </H31LayoutRow>
    </H31LayoutContainer>
  </Layout>
);
