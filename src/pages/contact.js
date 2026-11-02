/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

// Config
import _config from "../components/_config";
import useSiteSettings from "../hooks/useSiteSettings";

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
  H31Title3A,
} from "../components/h31";

// Images
import ImgMastheadContact from "../components/images/mastheads/ImgMastheadContact";

export default function Contact() {
  const settings = useSiteSettings();

  return (
    <Layout>
      <SEO
        title="Contact"
        description="Get in touch with us with any questions, or to begin discussing your journey towards a musical career."
      />

      <div
        css={css`
          .gatsby-image-wrapper img {
            object-position: center right !important;
          }
        `}
      >
        <H31Masthead1
          ImageComponent={<ImgMastheadContact />}
          title="Get in Touch"
        />
      </div>

      <H31SectionTitleFullWidth
        backgroundColor={_config.colorPrimary}
        titleSmall="Central FL Musicians Association"
        titleLarge="Contact Information"
      />

      <H31LayoutContainer
        fluid
        as="section"
        css={css`
          margin: 45px 0 0 0;
          @media (min-width: 992px) {
            margin: 90px 0;
          }
        `}
      >
        <H31LayoutRow>
          <H31LayoutCol
            css={css`
              text-align: center;
              @media (min-width: 992px) {
                text-align: left;
              }
            `}
            xs={12}
            lg={{ offset: 1, span: 3 }}
          >
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
              href={settings.map_url}
            >
              {settings.address_line_1}
              <br />
              {settings.address_line_2}
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
              href={settings.telHref}
            >
              {settings.phone}
            </H31Link4>

            <H31Title3A
              css={css`
                margin-bottom: 15px;
                color: ${_config.colorSecondary};
              `}
            >
              E-mail
            </H31Title3A>
            <H31Link4 href={settings.mailHref}>{settings.email}</H31Link4>
          </H31LayoutCol>
          <H31LayoutCol
            css={css`
              margin-top: 45px;
              padding: 0;
              height: 350px;
              @media (min-width: 992px) {
                margin-top: 0;
                padding: 0 15px;
                height: 330px;
              }
            `}
            xs={12}
            lg={7}
          >
            <H31GoogleMap1 />
          </H31LayoutCol>
        </H31LayoutRow>
      </H31LayoutContainer>
    </Layout>
  );
}
