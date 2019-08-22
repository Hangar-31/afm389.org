import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

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
  H31Link4
} from "../components/h31";

// Images
import ImgMastheadRehearsalHall from "../components/images/mastheads/ImgMastheadRehearsalHall";
import ImgHome1 from "../components/images/_home/ImgHome1";
import _config from "../components/_config";

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

// Data
const content1 = [
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
  </H31Text3>,
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
        href="tel::(407) 894-8666"
      >
        (407) 894-8666
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
        href="mailto::Local389@afm.org"
      >
        Local389@afm.org
      </H31Link4>
    </div>
  </ContainerContact>
];

const content2 = [
  <H31Title2B
    css={css`
      margin: 30px 0;
    `}
  >
    Rehearsal Hall Rules
  </H31Title2B>,
  <H31ListNumbered1>
    <H31Item1>
      Signed Agreement. You must have a signed Rules agreement form on file
      before you can reserve the Hall. The agreement form is only available
      through meeting with the President or another Executive Board member.
    </H31Item1>
    <H31Item1>
      Membership: You must be a member in good standing (i.e., all annual dues
      and work dues must be paid to date) in order to reserve the Hall. No
      exceptions will be made.
    </H31Item1>
    <H31Item1>
      Set blocks of time. You may reserve a three-hour block of time. Arrive at
      the beginning of your block of time - don’t expect to arrive late and
      extend your time at the back end. Scheduling large blocks of time prevents
      other bands from being able to use the Hall. Rare exceptions may be made
      on a case-by-case basis.
    </H31Item1>
    <H31Item1>
      Hall must be booked ahead of time. Rehearsals can only be booked through
      the office during business hours.
    </H31Item1>
    <H31Item1>
      No-shows. If you cannot not make your rehearsal, you must let us know as
      soon as possible - during business hours, call the office; before/after
      business hours, text the president. Note: A no-show means another band
      could have missed an opportunity to rehearse during that time.
    </H31Item1>
    <H31Item1>
      Rehearsal Form and fee for non-members is required. Fill out completely
      and turn in the Rehearsal Hall Form. List all individuals rehearsing with
      you on this form – first and last names – and pay $5 for anyone rehearsing
      with you who is not an AFM member. You may pay with cash or check, or call
      the office during business hours to pay by card. There is a black Mailbox
      on the inside wall by the rear entry doors into which you may deposit the
      form and the cash/check.
    </H31Item1>
    <H31Item1>
      Return Rehearsal Hall to order. Return Rehearsal Hall to the order in
      which you found it – music stands and folding chairs stored in their
      specific storage locations, piano/organ covered, speakers/equipment turned
      off, trash picked up, drums reassembled and returned to original location,
      etc. Report broken equipment immediately. If the Hall is in disorder when
      you arrive for your rehearsal, take a photo with your smartphone and text
      it to the President immediately.
    </H31Item1>
    <H31Item1>
      Equipment may not be removed from the Hall without prior permission. This
      includes, but is not limited to: chairs, music stands, drums, speakers,
      lighting, etc.
    </H31Item1>
    <H31Item1>
      Security. On the back doors, make sure flush bolt locks are securely
      placed in the lock position and doors are closed securely. Turn all lights
      off before you depart, except for red kitchen light.
    </H31Item1>
    <H31Item1>
      Door Code. The code to the back door is meant only for Band Leaders. Do
      not give it out to anyone else – even other members or other Band Leaders
      – without prior permission from the office.
    </H31Item1>
    <H31Item1>
      Air conditioning. Only use the Up/Down buttons to adjust temperature. Do
      not touch any other buttons.
    </H31Item1>
    <H31Item1>
      Advertising. Do not put up signs or banners without permission. Business
      cards may be left by members only – all others will be discarded on the
      following business day of your rehearsal.
    </H31Item1>
    <H31Item1>No Smoking anywhere inside the building.</H31Item1>
    <H31Item1>
      Keep doors closed. Out of respect for our neighbors, please keep the doors
      closed while rehearsing.
    </H31Item1>
  </H31ListNumbered1>,
  <H31Title2B
    css={css`
      margin: 30px 0;
    `}
  >
    Hall Reservation Priority List
  </H31Title2B>,
  <H31Text3>
    If two or more groups wish to reserve the same time slot, the following list
    sets the order of priority. A higher-priority group can bump a group that
    has already reserved the Hall.
  </H31Text3>,
  <H31ListNumbered1>
    <H31Item1>Union Business, Meetings or Events</H31Item1>
    <H31Item1>
      Member group rehearsals (where 75% or more of the group are members)
    </H31Item1>
    <H31Item1>Member individual rehearsals</H31Item1>
    <H31Item1>Majority non-member rehearsals</H31Item1>
  </H31ListNumbered1>,
  <H31Title2B
    css={css`
      margin: 30px 0;
    `}
  >
    Three-Strike Policy
  </H31Title2B>,
  <H31Text3>
    If you are in violation of any of the rules three times within any
    contiguous 12-month period, you will be disallowed from reserving and using
    the Hall for one year. For example, if a Band Leader is in violation of
    these terms, he will not be allowed to have one of his band members book the
    Hall in his stead. Detailed Rules are below, but violations include:
  </H31Text3>,
  <H31ListBullet1>
    <H31Item1>Not paying for non-members</H31Item1>
    <H31Item1>Not completing Rehearsal Hall form</H31Item1>
    <H31Item1>Not returning Hall to proper order</H31Item1>
    <H31Item1>No-shows without prior cancellation notice</H31Item1>
    <H31Item1>Taking or borrowing equipment without prior permission</H31Item1>
  </H31ListBullet1>
];

export default () => (
  <Layout>
    <SEO title="Rehearsal Hall" description="" />

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
                  {content1}
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
                  <ImgHome1 />
                  <ImgHome1 />
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
          <ImgHome1 />
          <ImgHome1 />
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
          <ImgHome1 />
          <ImgHome1 />
        </H31LayoutCol>
      </H31LayoutRow>

      <H31LayoutRow
        css={css`
          margin-bottom: 15px;
        `}
      >
        <H31LayoutCol md={12}>
          <H31ContentBlock2 title="Rehearsal Hall Calendar">
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
                    src="https://calendar.google.com/calendar/embed?src=local389%40afm.org&ctz=America%2FNew_York?showTz=1&amp;showTitle=0&amp;showNav=0&amp;showTabs=0&amp;showPrint=0&amp;showDate=0&amp;showCalendars=0"
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
          <H31ContentBlock2 title="Rehearsal Hall Rules">
            <H31LayoutContainer fluid>
              <H31LayoutRow>
                <H31LayoutCol
                  css={css`
                    padding: 0 !important;
                  `}
                  xs={12}
                >
                  {content2}
                </H31LayoutCol>
              </H31LayoutRow>
            </H31LayoutContainer>
          </H31ContentBlock2>
        </H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>
  </Layout>
);
