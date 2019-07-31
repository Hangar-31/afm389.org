/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31Masthead1,
  H31TitleWithBackground,
  H31Title1B,
  H31Title2A,
  H31Title2B,
  H31SectionTitleFullWidth,
  H31Bio1
} from "../components/h31";
import ImgMastheadAbout from "../components/images/mastheads/ImgMastheadAbout";
import _config from "../components/_config";
import Bio1 from "../components/h31/bios/Bio1";

// Data

const bios = [
  {
    name: "Mike Avila",
    email: "MikeAvila@afm389.org",
    bios: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed leo id orci tincidunt blandit vel ut eros. Nunc iaculis eleifend nisi, sit amet sagittis ex tempus a. Morbi efficitur tortor at leo iaculis malesuada. Sed vehicula, nunc eget hendrerit venenatis, metus eros sollicitudin purus, vitae interdum felis diam eu erat. Suspendisse congue diam risus, ut aliquet erat volutpat sit amet. Suspendisse at dignissim ex. Aenean mollis, elit non pretium efficitur, arcu magna porta leo, ac porta massa enim ac nunc. Integer a ligula pellentesque lectus auctor ultrices."
    ]
  }
]

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31Masthead1
      ImageComponent={<ImgMastheadAbout />}
      TitleComponent={(
        <H31TitleWithBackground
          backgroundColor={_config.colorPrimary}
          TitleComponent={<H31Title1B>From The Team At CFMA</H31Title1B>}
        />
      )}
      ParagraphComponent={<></>}
    />

    <H31SectionTitleFullWidth
      backgroundColor={_config.colorPrimary}
      TitleComponent1={<H31Title2B>Central FL Musicians Association</H31Title2B>}
      TitleComponent2={(
        <H31Title2A
          css={css`
              color: ${_config.colorWhite};
            `}
        >
        Board of Directors
        </H31Title2A>
      )}
    />

    {bios.map(bio => (
      <H31Bio1
        name={bio.name}
        email={bio.email}
        bios={bio.bios}
      />
    ))}
    <Bio1 />
  </Layout>
);
