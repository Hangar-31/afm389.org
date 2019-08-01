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
import ImgMastheadAbout from "../components/images/mastheads/ImgMastheadAbout";
import _config from "../components/_config";

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
