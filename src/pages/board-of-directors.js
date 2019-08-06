/* eslint-disable prettier/prettier */
import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31Masthead1,

  H31SectionTitleFullWidth,
  H31Bio1
} from "../components/h31";
import _config from "../components/_config";
import ImgMastheadBoardOfDirectors from "../components/images/mastheads/ImgMastheadBoardOfDirectors";

// Data
const bios = [
  {
    name: "Mike Avila",
    email: "President",
    bios: [
      "Mike spent the bulk of his playing career as part of two brass quintets. He performed 16 years at Walt Disney World in the Maple Leaf Brass, followed by 14 years with Sovereign Brass. He has been president of CFMA since March 1999. Areas of expertise: Collective Bargaining/Contract Negotiation, Mediation, Audition Coaching, Career Counseling and more.",
    ]
  },
  {
    name: "Deborah Dansby Wells",
    email: "Vice President",
    bios: [
      "Deborah, is principal viola of the Mantovani Orchestra, touring Internationally and domestically. Often in demand as a clinician and adjudicator, she divides her time between the educational and performance worlds. As a player, Ms. Dansby Wells is equally at home on the classical and popular stages where she may be found as a soloist or principal player. Her primary studies were done at the University of Michigan with extensive post-graduate work at the Manhattan School in New York, and at a number of universities in Florida.",
    ]
  },
  {
    name: "Sam Zambito",
    email: "Treasurer/Recording Secretary",
    bios: [
      "Sam Zambito, originally from Canandaigua, NY, has lived and worked in central Florida since 1974. After undergraduate studies at the Eastman School of Music, Sam has played trumpet in various groups in the Central Florida area eventually becoming a bandleader at Walt Disney World for more than 20 years. During his time at Disney, Sam became one of the earliest players of the Electronic Valve Instrument (EVI) which led to many opportunities. A long association with the Japanese company Akai led to performances throughout the USA, Canada and Europe at trade shows, educational conferences and college clinics. Sam has been Secretary/Treasurer of Local 389 since January 2003 and a member of the American Federation of Musicians since 1972.",
    ]
  },
  {
    name: "Nancy Crockford",
    email: "Executive Board",
    bios: [
      "Nancy Crockford, a native of Orlando, Florida, joined Local 389 when she was 16. She has worked with symphonies, chamber ensembles, operas, ballets, musicals & tours in venues throughout the Southeast & New York. Ms. Crockford attended Stetson University, University of Central Florida & spent summers at Eastman School of Music for private violin lessons. During her six-year tenure with The Florida Orchestra, Nancy was the Violin Section Grievance Representative & helped spearhead the formation of the Florida Orchestra Musicians’ Association. She was elected Treasurer and Historian, was on the Bylaw Committee & chaired the Benefit Concert Committee.",
    ]
  },
  {
    name: "Howard Herman",
    email: "Executive Board",
    bios: [
      "Howard Herman is a professional jazz pianist, arranger, composer and music educator in the Orlando area. He earned his M.A. (Composition) from Long Island University, his B.A. from New York University (Major: Music Theory, Minor: Music Education). He also did undergraduate work at Berklee College of Music and postgraduate work at C.S.U.N. and U.C.L.A. He has worked with Regis Philbin, Henry Beckman, Nichelle Nichols, Walter Koenig, George Takei, Scott Whitfield, Peter Welker, Leroy Cooper, Don Lamond, and Robin Yukiko. www.howardherman.com",
    ]
  },
  {
    name: "Barry Smith",
    email: "Executive Board",
    bios: [
      "Originally from Jacksonville, Florida, Barry received his Bachelor of Music Degree from North Texas State University. Since 1982, Barry has been based in the Orlando area as a free-lance musician and performing for Walt Disney World in production shows, conventions, casuals and in-house trios backing artists in clubs such as the Village Lounge and Pleasure Island Jazz Company. Barry has performed on festivals, tours, and in concerts and clubs with artists such as Rosemary Clooney, Woody Herman, Ira Sullivan, Marian McPartland, Rob McConnell, Bobby Shew, and Debbie Boone. A variety of his recording work includes live television series such as the New Original Amateur Hour. Barry has been adjunct faculty at Rollins College, Seminole Community College, and Assistant Professor of Music at Florida State University.",
    ]
  },
  {
    name: "Brian Smithers",
    email: "Executive Board",
    bios: [
      "Brian Smithers has been active in the Central Florida music scene for more than 30 years, playing woodwinds at Walt Disney World, in Broadway shows, on the orchestral stage, and in nearly every venue in the area. He has served the CFMA as board member, Vice President, shop steward, and co-chair of the WDW negotiating committee. He is a founding member of the Hippocrene Saxophone Quartet. Brian is currently Program Director of Audio Production at Full Sail University. He has also taught Music Technology at Stetson University. Brian studied saxophone at Ithaca College and the University of Central Florida.",
    ]
  },
  {
    name: "Kathy Thomas",
    email: "Executive Board",
    bios: [
      "Kathy studied French horn at the University of Illinois at Champaign/Urbana and Northern Illinois University. She has played with the Wheaton Summer Symphony, Champaign/Urbana Symphony, Symfonia Da Camera, Danville Symphony, and Hinsdale Symphony, Brevard Symphony Orchestra, Bach Festival Orchestra, West Coast Symphony, Sovereign Brass Quintet and The Florida Orchestra. Since moving to Florida in 1993, Kathy has steadily worked for the Walt Disney World company. In 2004, she won the third horn position with the Orlando Philharmonic. In 2012 Kathy was appointed the position of adjunct professor of French Horn at Stetson University. Mrs. Thomas manages a private teaching studio, and has an extensive recording studio career, including “Movie Songs” and “Broadway” under the Warner Brothers label.",
    ]
  },
]

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadBoardOfDirectors />}
      title="Your Path to a Musical Career"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id rhoncus ligula. Quisque commodo, eros auctor elementum aliquam, urna turpis dapibus dolor, non feugiat tortor lectus."
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      titleSmall="Central FL Musicians Association"
      titleLarge="Board of Directors"
    />

    {bios.map(bio => (
      <H31Bio1
        name={bio.name}
        email={bio.email}
        bios={bio.bios}
      />
    ))}
  </Layout>
);
