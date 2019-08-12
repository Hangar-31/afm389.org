import React from "react";
import { css } from "@emotion/core";

// Config
import _config from "../components/_config";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31Masthead1,
  H31SectionTitleFullWidth,
  H31GoogleMap1,
  H31LayoutContainer,
  H31LayoutCol,
  H31LayoutRow,
  H31Link4,
  H31Title3A
} from "../components/h31";

// Images
import ImgMastheadContact from "../components/images/mastheads/ImgMastheadContact";

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadContact />}
      title="Get in Touch"
      text=""
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      titleSmall="Central FL Musicians Association"
      titleLarge="Contact Information"
    />

    <H31LayoutContainer
      fluid
      as="section"
      css={css`
        margin: 90px 0;
      `}
    >
      <H31LayoutRow>
        <H31LayoutCol xs={1} />
        <H31LayoutCol xs={2}>
          <H31Title3A
            css={css`
              margin-bottom: 15px;
              color: ${_config.colorSecondary};
            `}
          >
            Mailing Address
          </H31Title3A>
          <H31Link4
            css={css`
              display: block;
              margin-bottom: 60px;
            `}
            href="https://www.google.com/maps/place/3020+E+Robinson+St,+Orlando,+FL+32803/@28.5457854,-81.3470503,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77ad22dc16cc1:0x85de0e8e8138f6ec!8m2!3d28.5457854!4d-81.3448616"
          >
            {["3020 East Robinson Street", <br />, "Orlando, FL 3280"]}
          </H31Link4>

          <H31Title3A
            css={css`
              margin-bottom: 15px;
              color: ${_config.colorSecondary};
            `}
          >
            Number
          </H31Title3A>
          <H31Link4
            css={css`
              display: block;
              margin-bottom: 60px;
            `}
            href="tel::(407) 894-8666"
          >
            (407) 894-8666
          </H31Link4>

          <H31Title3A
            css={css`
              margin-bottom: 15px;
              color: ${_config.colorSecondary};
            `}
          >
            E-mail
          </H31Title3A>
          <H31Link4 href="mailto::Local389@afm.org">Local389@afm.org</H31Link4>
        </H31LayoutCol>
        <H31LayoutCol xs={1} />
        <H31LayoutCol xs={7}>
          <H31GoogleMap1 />
        </H31LayoutCol>
        <H31LayoutCol xs={1} />
      </H31LayoutRow>
    </H31LayoutContainer>
  </Layout>
);
