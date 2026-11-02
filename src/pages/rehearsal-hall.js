/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { graphql } from "gatsby";
import styled from "@emotion/styled/macro";

// Config
import _config from "../components/_config";
import CmsImage from "../components/CmsImage";
import { richParagraphs } from "../components/RichText";
import useSiteSettings from "../hooks/useSiteSettings";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31Masthead1,
  H31LayoutContainer,
  H31LayoutCol,
  H31ContentBlock2,
  H31Text3,
  H31LayoutRow,
  H31Title2B,
  H31Item1,
  H31ListNumbered1,
  H31ListBullet1,
  H31Link4,
} from "../components/h31";

// Styled Components
const ContainerContact = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width 100%;
  margin-top: 30px;
  padding: 15px 60px;
  background-color: #303D48;
  @media(max-width: 767px) {
    padding: 15px 15px;
    grid-template-columns: 1fr;
  }
`;

// The CMS file widget can return a path relative to this page's data.
const assetUrl = (path) => `/assets/${path.split("assets/").pop()}`;

const FormLink = styled.a`
  display: inline-block;
  margin: 0 15px 15px 0;
  padding: 10px 25px;
  color: #ffffff;
  font-weight: 500;
  text-decoration: none;
  background-color: ${_config.colorPrimary};
  transition: 0.2s;
  &:hover {
    color: #ffffff;
    background-color: ${_config.colorSecondary};
  }
`;

function FacilityInfo({ page }) {
  const settings = useSiteSettings();
  return (
    <>
      {richParagraphs(page.facility_text).map((paragraph) => (
        <H31Text3 key={paragraph.key}>{paragraph}</H31Text3>
      ))}
      {(page.request_form || page.usage_form) && (
        <div
          css={css`
            margin-top: 15px;
          `}
        >
          {page.request_form && (
            <FormLink href={assetUrl(page.request_form)} target="_blank" rel="noreferrer">
              Download Request Form
            </FormLink>
          )}
          {page.usage_form && (
            <FormLink href={assetUrl(page.usage_form)} target="_blank" rel="noreferrer">
              Download Usage Form
            </FormLink>
          )}
        </div>
      )}
    <ContainerContact>
      <H31Title2B
        css={css`
          display: block;
          text-align: center;
          width: 100%;
          color: #ffffff;
          grid-column: span 2;
          padding-bottom: 10px;
          margin-bottom: 15px;
          border-bottom: 2px solid #ffffff;
          @media (max-width: 767px) {
            grid-column: span 1;
          }
        `}
      >
        Reserve a Time
      </H31Title2B>
      <div
        css={css`
          width: 100%;
          text-align: center;
          margin-bottom: 15px;
          border-right: 2px solid #ffffff;
          @media (max-width: 767px) {
            border-right: none;
          }
        `}
      >
        <H31Text3
          css={css`
            font-weight: bold;
            color: ${_config.colorTertiary};
          `}
        >
          Call
        </H31Text3>
        <H31Link4
          css={css`
            color: #ffffff;
            display: block;
          `}
          href={settings.telHref}
        >
          {settings.phone}
        </H31Link4>
      </div>

      <div
        css={css`
          text-align: center;
        `}
      >
        <H31Text3
          css={css`
            font-weight: bold;
            color: ${_config.colorTertiary};
          `}
        >
          Email
        </H31Text3>
        <H31Link4
          css={css`
            color: #ffffff;
            display: block;
          `}
          href={settings.mailHref}
        >
          {settings.email}
        </H31Link4>
      </div>
    </ContainerContact>
    </>
  );
}

const sectionTitle = css`
  margin: 30px 0;
`;

function HallRules({ page }) {
  return (
    <>
      <H31Title2B css={sectionTitle}>Rehearsal Hall Rules</H31Title2B>
      <H31ListNumbered1>
        {page.rules.map(({ rule }) => (
          <H31Item1 key={rule}>{rule}</H31Item1>
        ))}
      </H31ListNumbered1>
      <H31Title2B css={sectionTitle}>Hall Reservation Priority List</H31Title2B>
      <H31Text3>{page.priority_text}</H31Text3>
      <H31ListNumbered1>
        {page.priority_list.map(({ item }) => (
          <H31Item1 key={item}>{item}</H31Item1>
        ))}
      </H31ListNumbered1>
      <H31Title2B css={sectionTitle}>Three-Strike Policy</H31Title2B>
      <H31Text3>{page.strike_text}</H31Text3>
      <H31ListBullet1>
        {page.strike_list.map(({ item }) => (
          <H31Item1 key={item}>{item}</H31Item1>
        ))}
      </H31ListBullet1>
    </>
  );
}

export default function RehearsalHall({ data }) {
  const page = data.markdownRemark.frontmatter;
  const photo = (i) => <CmsImage image={page.photos[i]?.image} alt={page.photos[i]?.alt} />;

  return (
    <Layout>
      <SEO
        title="Rehearsal Hall"
        description="Our Rehearsal Hall is located just outside the city of Orlando, and is open to all of our members to reserve and utilize. Schedule a time to come by and utilize the Rehearsal Hall's piano, music stands, tables, chairs and more!"
      />

      <H31Masthead1
        ImageComponent={<CmsImage image={page.masthead_image} alt={page.masthead_alt} loading="eager" />}
        title={page.masthead_title}
        text={page.masthead_text}
      />

      <H31LayoutContainer
        fluid
        as="section"
        css={css`
          margin: 45px 0;
          @media (max-width: 767px) {
            margin: 0 0 30px 0;
          }
        `}
      >
        <H31LayoutRow
          css={css`
            margin-bottom: 15px;
          `}
        >
          <H31LayoutCol md={12} lg={6}>
            <H31ContentBlock2 title="Our Facility">
              <H31LayoutContainer fluid>
                <H31LayoutRow>
                  <H31LayoutCol
                    css={css`
                      flex-wrap: wrap;
                      padding: 0 !important;
                    `}
                    lg={12}
                    xs={6}
                  >
                    <FacilityInfo page={page} />
                  </H31LayoutCol>

                  <H31LayoutCol
                    className="d-lg-none"
                    css={css`
                      .gatsby-image-wrapper {
                        margin-bottom: 30px;
                      }
                    `}
                    xs={6}
                  >
                    {photo(0)}
                    {photo(1)}
                  </H31LayoutCol>
                </H31LayoutRow>
              </H31LayoutContainer>
            </H31ContentBlock2>
          </H31LayoutCol>

          <H31LayoutCol
            className="d-none d-lg-block"
            css={css`
              .gatsby-image-wrapper {
                margin-bottom: 30px;
              }
            `}
            lg={3}
          >
            {photo(0)}
            {photo(1)}
          </H31LayoutCol>

          <H31LayoutCol
            className="d-none d-lg-block"
            css={css`
              .gatsby-image-wrapper {
                margin-bottom: 30px;
              }
            `}
            lg={3}
          >
            {photo(2)}
            {photo(3)}
          </H31LayoutCol>
        </H31LayoutRow>

        <H31LayoutRow
          css={css`
            margin-bottom: 15px;
          `}
        >
          <H31LayoutCol md={12}>
            <H31ContentBlock2 id="calendar" title="Rehearsal Hall Calendar">
              <H31LayoutContainer fluid>
                <H31LayoutRow>
                  <H31LayoutCol
                    css={css`
                      padding: 0 !important;
                    `}
                    xs={12}
                  >
                    <iframe
                      title="Rehearsal Hall Calendar"
                      src="https://calendar.google.com/calendar/embed?src=local389%40afm.org&ctz=America%2FNew_York?showTz=1&amp;showTitle=0&amp;showTabs=0&amp;showPrint=0&amp;showCalendars=0"
                      css={css`
                        width: 100%;
                        height: 800px;
                        border: none;
                        padding: 0;
                        margin: 0;
                        @media (max-width: 767px) {
                          height: 600px;
                        }
                        @media (max-width: 575px) {
                          height: 400px;
                        }
                      `}
                      frameBorder="0"
                      scrolling="no"
                    />
                  </H31LayoutCol>
                </H31LayoutRow>
              </H31LayoutContainer>
            </H31ContentBlock2>
          </H31LayoutCol>
        </H31LayoutRow>

        <H31LayoutRow
          css={css`
            margin-bottom: 15px;
          `}
        >
          <H31LayoutCol md={12}>
            <H31ContentBlock2 id="rules" title="Rehearsal Hall Rules">
              <H31LayoutContainer fluid>
                <H31LayoutRow>
                  <H31LayoutCol
                    css={css`
                      padding: 0 !important;
                    `}
                    xs={12}
                  >
                    <HallRules page={page} />
                  </H31LayoutCol>
                </H31LayoutRow>
              </H31LayoutContainer>
            </H31ContentBlock2>
          </H31LayoutCol>
        </H31LayoutRow>
      </H31LayoutContainer>
    </Layout>
  );
}

export const query = graphql`
  query RehearsalHallPage {
    markdownRemark(fileAbsolutePath: { regex: "/site-content/rehearsal-hall.md$/" }) {
      frontmatter {
        masthead_image {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        masthead_alt
        masthead_title
        masthead_text
        facility_text
        request_form
        usage_form
        photos {
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        rules {
          rule
        }
        priority_text
        priority_list {
          item
        }
        strike_text
        strike_list {
          item
        }
      }
    }
  }
`;
