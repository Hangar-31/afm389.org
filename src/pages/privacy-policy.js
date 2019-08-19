import React from "react";
import { css } from "@emotion/core";
import MediaQuery from "react-responsive";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

import {
  H31LayoutCol,
  H31LayoutRow,
  H31LayoutContainer,
  H31ContentBlock2,
  H31Text3,
  H31Title4A
  // H31ListBullet1,
} from "../components/h31";

const data = [
  <H31Title4A>AFM Privacy Policy</H31Title4A>,
  <H31Text3>
    The American Federation of Musicians (“AFM”) has created this privacy policy
    to explain how information is used that you may provide while visiting this
    website (“Website”) and to demonstrate our firm commitment to Internet
    privacy. By using or accessing the Website, you are accepting the practices
    described in this Privacy Policy. This Privacy Policy applies only to
    information collected online through the Website and does not describe the
    ways in which we may collect or use information obtained offline or through
    any means other than our Website.
  </H31Text3>,

  <H31Title4A>How and When We Collect Information</H31Title4A>,
  <H31Text3>
    Activity That Doesn’t Require Registration. You can view content on the
    Website without registering or providing any personal information. When you
    visit in this manner, we automatically obtain information from you about the
    name of your Internet service provider, the browser and type of computer you
    are using, and the website that referred you to us. In addition, we use a
    “session” cookie to identify you while you are on the Website, if cookies
    are enabled on your computer. This session cookie terminates once you finish
    using the Website and close your browser. Activity Requiring Registration.
    Certain activities on the Website require you to register. To become a
    registered user, we ask you to provide your name, last 4 digits of your SSN
    (3 for SIN) and your home Local. If you decide to register, we use a
    persistent cookie that stores certain information to make it easier for you
    to login when you come back to the Website. However, none of your personal
    information is stored in that cookie. Usage Information. We may record
    information about your usage of the Website, such as when you use the site,
    the areas of the site you click on and/or participate in. If you are logged
    in, we may associate that information with your account. A persistent cookie
    may be used to track this information. We may use pixel tags and/or
    trackable links in HTML-based emails sent to our users to track which emails
    are opened and/or clicked on by recipients. Comments Posted to Site. Any
    personal information or content that you voluntarily disclose online becomes
    publicly available and can be collected and used by others. Your user name
    (not your email address) is displayed to other users when you post comments.
    When posting comments, you should exercise caution not to provide any
    personally identifying information or other information that you would not
    want seen by others. Use of the community functions on the Website is at
    your own risk. Polls and Surveys. From time to time, we may conduct polls
    and surveys. Information collected through our polls, surveys, and
    questionnaires is used in the aggregate, unless we contact you to request
    permission to use your individual responses for a particular purpose.
    Financial Information and Payments. We use a secure server for processing
    payments and financial information. AFM staff log in to the secure site,
    retrieve the information and process it using our in-house credit card
    processing equipment. The AFM does not retain, share, store or use
    personally identifiable information for any secondary purposes. If you
    choose to make an online donation, you will have to provide your credit card
    billing information. As this information is collected and transferred over
    the Internet to our secure server, it is encrypted using Secure Socket Layer
    (SSL) technology, the security technology that is designed to protect
    sensitive information. Our donation pages display the Verisign Secure Site
    Seal to assure you that our Website is authentic and that all transactions
    are secured by SSL encryption. If you are making a donation, the credit card
    information that you provide at the time of donation is used only to process
    your donation and will not be used for any other purposes. We do not
    knowingly collect any information from children under the age of 13. We
    encourage you to talk to your children about safe and responsible use of
    their personal information while using the Internet. If you have any
    reservations, questions or concerns about your child’s access to this site
    or how information that your child provides is used by us, please contact
    us.
  </H31Text3>,

  <H31Title4A>Uses of Personal Information</H31Title4A>,
  // <H31Bullet1>
  //   <H31Item1>Uses of Personal Information</H31Item1>
  // </H31Bullet1>,

  <H31Title4A>AFM Privacy Policy</H31Title4A>,
  <H31Text3>
    Wondering what the next step in your career should be? We are happy to share
    our years of experience on formulating a plan that fits your needs and
    dreams.
  </H31Text3>
];

const PrivacyPolicyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" description="" />

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
          <MediaQuery query="(min-width: 575px)">
            <H31ContentBlock2 title="Privacy Policy">{data}</H31ContentBlock2>
          </MediaQuery>
          <MediaQuery query="(max-width: 575px)">
            <H31ContentBlock2>{data}</H31ContentBlock2>
          </MediaQuery>
        </H31LayoutCol>
        <H31LayoutCol xs={1} md={2} xl={3} />
      </H31LayoutRow>
    </H31LayoutContainer>
  </Layout>
);

export default PrivacyPolicyPage;
