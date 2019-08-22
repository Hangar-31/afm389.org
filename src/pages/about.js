/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { css } from "@emotion/core";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  H31Masthead1,
  H31Text3,
  H31Testimonials,
  H31SectionTitleFullWidth,
  H31LayoutCol,
  H31LayoutRow,
  H31LayoutContainer,
  H31Bio1,
  H31ContentBlock2
} from "../components/h31";

// Images
import ImgMastheadAbout from "../components/images/mastheads/ImgMastheadAbout";
import _config from "../components/_config";
import ImgAbout1 from "../components/images/_about/ImgAbout1";
import ImgBioMikeAvila from "../components/images/bios/ImgBioMikeAvila";
import ImgBioDeborahWells from "../components/images/bios/ImgBioDeborahWells";
import ImgBioSamZambito from "../components/images/bios/ImgBioSamZambito";
import ImgBioNancyCrockford from "../components/images/bios/ImgBioNancyCrockford";
import ImgBioHowardHerman from "../components/images/bios/ImgBioHowardHerman";
import ImgBioBarrySmith from "../components/images/bios/ImgBioBarrySmith";
import ImgBioBrianSmithers from "../components/images/bios/ImgBioBrianSmithers";
import ImgBioKathyThomas from "../components/images/bios/ImgBioKathyThomas";

const data = [
  <H31Text3>
    Having a dispute with your employer? Are you owed money from a contractor or
    organization for whom you have worked? We have recovered tens of thousands
    of dollars for our members over the years.
  </H31Text3>,
  <H31Text3>
    Would you like coaching on how to audition for Walt Disney World? We hold up
    to three auditions per year for our members to audition for the company and
    we would love to help you prepare.
  </H31Text3>,
  <ImgAbout1 />,
  <br />,
  <br />,
  <H31Text3>
    Are you new in town and need to know who to connect with? We network through
    membership meetings, a contractor list, social media and a quarterly
    newsletter, among other things.
  </H31Text3>,
  <H31Text3>
    Wondering what the next step in your career should be? We are happy to share
    our years of experience on formulating a plan that fits your needs and
    dreams.
  </H31Text3>
];

// Data
const bios = [
  {
    name: "Mike Avila",
    title: "President",
    image: <ImgBioMikeAvila />,
    bios: [
      "Mike spent the bulk of his playing career as part of two brass quintets. He performed 16 years at Walt Disney World in the Maple Leaf Brass, followed by 14 years with Sovereign Brass. He has been president of CFMA since March 1999. Areas of expertise: Collective Bargaining/Contract Negotiation, Mediation, Audition Coaching, Career Counseling and more."
    ]
  },
  {
    name: "Deborah Dansby Wells",
    title: "Vice President",
    image: <ImgBioDeborahWells />,
    bios: [
      "Deborah, is principal viola of the Mantovani Orchestra, touring Internationally and domestically. Often in demand as a clinician and adjudicator, she divides her time between the educational and performance worlds. As a player, Ms. Dansby Wells is equally at home on the classical and popular stages where she may be found as a soloist or principal player. Her primary studies were done at the University of Michigan with extensive post-graduate work at the Manhattan School in New York, and at a number of universities in Florida."
    ]
  },
  {
    name: "Sam Zambito",
    title: "Treasurer/Recording Secretary",
    image: <ImgBioSamZambito />,
    bios: [
      "Sam Zambito, originally from Canandaigua, NY, has lived and worked in central Florida since 1974. After undergraduate studies at the Eastman School of Music, Sam has played trumpet in various groups in the Central Florida area eventually becoming a bandleader at Walt Disney World for more than 20 years. During his time at Disney, Sam became one of the earliest players of the Electronic Valve Instrument (EVI) which led to many opportunities. A long association with the Japanese company Akai led to performances throughout the USA, Canada and Europe at trade shows, educational conferences and college clinics. Sam has been Secretary/Treasurer of Local 389 since January 2003 and a member of the American Federation of Musicians since 1972."
    ]
  },
  {
    name: "Nancy Crockford",
    title: "Executive Board",
    image: <ImgBioNancyCrockford />,
    bios: [
      "Nancy Crockford, a native of Orlando, Florida, joined Local 389 when she was 16. She has worked with symphonies, chamber ensembles, operas, ballets, musicals & tours in venues throughout the Southeast & New York. Ms. Crockford attended Stetson University, University of Central Florida & spent summers at Eastman School of Music for private violin lessons. During her six-year tenure with The Florida Orchestra, Nancy was the Violin Section Grievance Representative & helped spearhead the formation of the Florida Orchestra Musicians’ Association. She was elected Treasurer and Historian, was on the Bylaw Committee & chaired the Benefit Concert Committee."
    ]
  },
  {
    name: "Howard Herman",
    title: "Executive Board",
    image: <ImgBioHowardHerman />,
    bios: [
      "Howard Herman is a professional jazz pianist, arranger, composer and music educator in the Orlando area. He earned his M.A. (Composition) from Long Island University, his B.A. from New York University (Major: Music Theory, Minor: Music Education). He also did undergraduate work at Berklee College of Music and postgraduate work at C.S.U.N. and U.C.L.A. He has worked with Regis Philbin, Henry Beckman, Nichelle Nichols, Walter Koenig, George Takei, Scott Whitfield, Peter Welker, Leroy Cooper, Don Lamond, and Robin Yukiko. www.howardherman.com"
    ]
  },
  {
    name: "Barry Smith",
    title: "Executive Board",
    image: <ImgBioBarrySmith />,
    bios: [
      "Originally from Jacksonville, Florida, Barry received his Bachelor of Music Degree from North Texas State University. Since 1982, Barry has been based in the Orlando area as a free-lance musician and performing for Walt Disney World in production shows, conventions, casuals and in-house trios backing artists in clubs such as the Village Lounge and Pleasure Island Jazz Company. Barry has performed on festivals, tours, and in concerts and clubs with artists such as Rosemary Clooney, Woody Herman, Ira Sullivan, Marian McPartland, Rob McConnell, Bobby Shew, and Debbie Boone. A variety of his recording work includes live television series such as the New Original Amateur Hour. Barry has been adjunct faculty at Rollins College, Seminole Community College, and Assistant Professor of Music at Florida State University."
    ]
  },
  {
    name: "Brian Smithers",
    title: "Executive Board",
    image: <ImgBioBrianSmithers />,
    bios: [
      "Brian Smithers has been active in the Central Florida music scene for more than 30 years, playing woodwinds at Walt Disney World, in Broadway shows, on the orchestral stage, and in nearly every venue in the area. He has served the CFMA as board member, Vice President, shop steward, and co-chair of the WDW negotiating committee. He is a founding member of the Hippocrene Saxophone Quartet. Brian is currently Program Director of Audio Production at Full Sail University. He has also taught Music Technology at Stetson University. Brian studied saxophone at Ithaca College and the University of Central Florida."
    ]
  },
  {
    name: "Kathy Thomas",
    title: "Executive Board",
    image: <ImgBioKathyThomas />,
    bios: [
      "Kathy studied French horn at the University of Illinois at Champaign/Urbana and Northern Illinois University. She has played with the Wheaton Summer Symphony, Champaign/Urbana Symphony, Symfonia Da Camera, Danville Symphony, and Hinsdale Symphony, Brevard Symphony Orchestra, Bach Festival Orchestra, West Coast Symphony, Sovereign Brass Quintet and The Florida Orchestra. Since moving to Florida in 1993, Kathy has steadily worked for the Walt Disney World company. In 2004, she won the third horn position with the Orlando Philharmonic. In 2012 Kathy was appointed the position of adjunct professor of French Horn at Stetson University. Mrs. Thomas manages a private teaching studio, and has an extensive recording studio career, including “Movie Songs” and “Broadway” under the Warner Brothers label."
    ]
  }
];

const testimonials = [
  {
    name: "Terrance Armstrong",
    text:
      "I had a problem with an individual at work. When I approached management, the Union was beside me all the way and supported me through a difficult time. Thank you!"
  },
  {
    name: "Noel MacFarland",
    text:
      "I had a problem with an individual at work. When I approached management, the Union was beside me all the way and supported me through a difficult time. Thank you!"
  },
  {
    name: "Noel MacFarland",
    text:
      "I had a problem with an individual at work. When I approached management, the Union was beside me all the way and supported me through a difficult time. Thank you!"
  }
];

export default () => (
  <Layout>
    <SEO title="About" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadAbout />}
      title="From The Team At CFMA"
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      titleSmall="Central FL Musicians Association"
      titleSmallColor={_config.colorSecondary}
      titleLarge="CFMA Local 389 - History"
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
        <H31LayoutCol xs={10} md={8} xl={6}>
          <div
            css={css`
              display: none !important;
              @media (min-width: 576px) {
                display: block !important;
              }
            `}
          >
            <H31ContentBlock2 title="Musicians Working For Musicians">
              {data}
            </H31ContentBlock2>
          </div>

          <div
            css={css`
              display: none !important;
              @media (max-width: 575px) {
                display: block !important;
              }
            `}
          >
            <H31ContentBlock2>{data}</H31ContentBlock2>
          </div>
        </H31LayoutCol>
        <H31LayoutCol xs={1} md={2} xl={3} />
      </H31LayoutRow>
    </H31LayoutContainer>

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorSecondary}
      titleSmall="Central FL Musicians Association"
      titleSmallColor={_config.colorPrimary}
      titleLarge="Board of Directors"
    />

    {bios.map(bio => (
      <H31Bio1
        name={bio.name}
        title={bio.title}
        image={bio.image}
        bios={bio.bios}
      />
    ))}

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorWhite}
      titleSmall="Testimonials"
    />

    <H31Testimonials testimonials={testimonials} />
  </Layout>
);
