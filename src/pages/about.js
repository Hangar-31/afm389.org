/* eslint-disable import/named */
/* eslint-disable react/jsx-wrap-multilines */
import React from "react";
import { css } from "@emotion/react";

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
  H31ContentBlock2,
} from "../components/h31";

// Images
import ImgMastheadAbout from "../components/images/mastheads/ImgMastheadAbout";
import _config from "../components/_config";
import ImgAbout1 from "../components/images/_about/ImgAbout1";
import ImgBioSamZambito from "../components/images/bios/ImgBioSamZambito";
import ImgBioBarrySmith from "../components/images/bios/ImgBioBarrySmith";
import ImgBioBrianSmithers from "../components/images/bios/ImgBioBrianSmithers";
import ImgBioKathyThomas from "../components/images/bios/ImgBioKathyThomas";
import ImgBioJeffThomas from "../components/images/bios/ImgBioJeffThomas";

const data = [
  <H31Text3 key="about-page-1">
    <b>Wondering what the next step in your career should be? </b>
    We are happy to share our years of experience on formulating a plan that
    fits your needs and dreams.
  </H31Text3>,
  <H31Text3 key="about-page-2">
    <b>Are you new in town and need to know who to connect with? </b>
    We network through membership meetings, a contractor list, weekly updates of
    current events and networking opportunities, social media and a quarterly
    newsletter, among other things.
  </H31Text3>,
  <ImgAbout1 key="about-page-3" />,
  <br key="about-page-4" />,
  <br key="about-page-5" />,
  <H31Text3 key="about-page-6">
    <b>Would you like coaching on how to audition for Walt Disney World? </b>
    We hold up to three auditions per year for our members to audition for the
    company and we would love to help you prepare.
  </H31Text3>,
  <H31Text3 key="about-page-7">
    <b>
      Are you owed money from a contractor or organization for whom you have
      worked?&nbsp;
    </b>
    We have recovered tens of thousands of dollars for our members over the
    years.
  </H31Text3>,
];

// Data
const bios = [
  {
    name: "Sam Zambito",
    title: "Treasurer/Recording Secretary",
    image: <ImgBioSamZambito />,
    bios: [
      "Sam Zambito, originally from Canandaigua, NY, has lived and worked in central Florida since 1974. After undergraduate studies at the Eastman School of Music, Sam has played trumpet in various groups in the Central Florida area eventually becoming a bandleader at Walt Disney World for more than 20 years. During his time at Disney, Sam became one of the earliest players of the Electronic Valve Instrument (EVI) which led to many opportunities. A long association with the Japanese company Akai led to performances throughout the USA, Canada and Europe at trade shows, educational conferences and college clinics. Sam has been Secretary/Treasurer of Local 389 since January 2003 and a member of the American Federation of Musicians since 1972.",
    ],
  },
  {
    name: "Jeff Thomas",
    title: "Executive Board",
    image: <ImgBioJeffThomas />,
    bios: [
      "Having been trained as a classical and jazz musician, Jeff has had a varied career in both the commercial music industry and on the concert stage. He is Principal Trombone with the Orlando Philharmonic Orchestra and the Bach Festival Orchestra. Jeff has studied with some of the most respected teachers in the country, and he has paid that experience forward through inspiring countless numbers of students and professional performers through teaching and mentoring. All of this (and much more) allows Jeff to reach out and serve the interests of our musicians on a variety of levels. Jeff shares a blended family of six children with his wife and best friend, Kathy Thomas.",
    ],
  },
  {
    name: "Barry Smith",
    title: "Executive Board",
    image: <ImgBioBarrySmith />,
    bios: [
      "Originally from Jacksonville, Florida, Barry received his Bachelor of Music Degree from North Texas State University. Since 1982, Barry has been based in the Orlando area as a free-lance musician and performing for Walt Disney World in production shows, conventions, casuals and backing artists in clubs such as the Village Lounge and Pleasure Island Jazz Company. Barry has performed on festivals, tours, and in concerts and clubs with artists such as Rosemary Clooney, Woody Herman, Ira Sullivan, Marian McPartland, Rob McConnell, Bobby Shew, and Debbie Boone. A variety of his recording work includes live television series such as the New Original Amateur Hour and with popular groups such as Mannheim Steamroller. Barry is on faculty at Valencia College, Daytona State College, and has served on faculty at other colleges including Florida State University as Assistant Professor of Music. He has served as an Executive Board member for 20 years.",
    ],
  },
  {
    name: "Brian Smithers",
    title: "Executive Board",
    image: <ImgBioBrianSmithers />,
    bios: [
      "Brian Smithers has been active in the Central Florida music scene for more than 30 years, playing woodwinds at Walt Disney World, in Broadway shows, on the orchestral stage, and in nearly every venue in the area. He has served the CFMA as board member, Vice President, shop steward, and co-chair of the WDW negotiating committee. He is a founding member of the Hippocrene Saxophone Quartet. Brian is currently Program Director of Audio Production at Full Sail University. He has also taught Music Technology at Stetson University. Brian studied saxophone at Ithaca College and the University of Central Florida.",
    ],
  },
  {
    name: "Kathy Thomas",
    title: "Executive Board",
    image: <ImgBioKathyThomas />,
    bios: [
      "Kathy studied French horn at the University of Illinois at Champaign/Urbana and Northern Illinois University. She has played with the Wheaton Summer Symphony, Champaign/Urbana Symphony, Symfonia Da Camera, Danville Symphony, and Hinsdale Symphony, Brevard Symphony Orchestra, Bach Festival Orchestra, West Coast Symphony, Sovereign Brass Quintet and The Florida Orchestra. Since moving to Florida in 1993, Kathy has steadily worked for the Walt Disney World company. In 2004, she won the third horn position with the Orlando Philharmonic. In 2012 Kathy was appointed the position of adjunct professor of French Horn at Stetson University. Mrs. Thomas manages a private teaching studio, and has an extensive recording studio career, including “Movie Songs” and “Broadway” under the Warner Brothers label.",
    ],
  },
];

export default function () {
  return (
    <Layout>
      <SEO
        title="About"
        description="The Central Florida Musicians’ Association (CFMA) was founded in 1924 as “The Musicians Protective Association.” Those were the days when Labor and Management were assumed adversaries by their very nature..."
      />

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
            <H31ContentBlock2 title="Musicians Working For Musicians">
              {data}
            </H31ContentBlock2>
          </H31LayoutCol>
          <H31LayoutCol xs={1} md={2} xl={3} />
        </H31LayoutRow>
      </H31LayoutContainer>

      <H31SectionTitleFullWidth
        backgroundColor={_config.colorSecondary}
        titleSmall="Central FL Musicians Association"
        titleSmallColor={_config.colorPrimary}
        titleLarge="Board of Directors"
        id="board-of-directors"
      />

      {bios.map((bio) => (
        <H31Bio1
          key={bio.name}
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

      <H31Testimonials />
    </Layout>
  );
}
