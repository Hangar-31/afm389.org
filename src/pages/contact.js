import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import { H31TextBlock3, H31GoogleMap1 } from "../components/h31";

export default () => (
  <Layout>
    <SEO title="" description="" />

    <H31TextBlock3
      title="Mailing Address"
      text="3020 East Robinson Street Orlando, FL 32803"
      link="https://www.google.com/maps/place/3020+E+Robinson+St,+Orlando,+FL+32803/@28.5457854,-81.3470503,17z/data=!3m1!4b1!4m5!3m4!1s0x88e77ad22dc16cc1:0x85de0e8e8138f6ec!8m2!3d28.5457854!4d-81.3448616"
    />

    <H31TextBlock3
      title="Number"
      text="(407) 894-8666"
      link="tel::(407) 894-8666"
    />

    <H31TextBlock3
      title="E-mail"
      text="Local389@afm.org"
      link="mailto::Local389@afm.org"
    />

    <H31GoogleMap1 />
  </Layout>
);
