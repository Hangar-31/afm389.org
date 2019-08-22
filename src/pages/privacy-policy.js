import React from "react";
import { css } from "@emotion/core";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

import _config from "../components/_config";

import {
  H31LayoutCol,
  H31LayoutRow,
  H31LayoutContainer,
  H31ContentBlock2,
  H31Text3,
  H31Title2B,
  H31ListBullet1,
  H31Item1
} from "../components/h31";

const data = [
  <br />,
  <H31Title2B
    css={css`
      color: ${_config.colorSecondary};
    `}
  >
    AFM Privacy Policy
  </H31Title2B>,
  <br />,
  <H31Text3>
    The Central Florida Musicians&apos; Association (CFMA) has created this
    privacy policy to explain how information is used that you may provide while
    visiting this website (“Website”) and to demonstrate our firm commitment to
    Internet privacy. By using or accessing the Website, you are accepting the
    practices described in this Privacy Policy. This Privacy Policy applies only
    to information collected online through the Website and does not describe
    the ways in which we may collect or use information obtained offline or
    through any means other than our Website.
  </H31Text3>,

  <H31Title2B
    css={css`
      color: ${_config.colorSecondary};
    `}
  >
    How and When We Collect Information
  </H31Title2B>,
  <br />,
  <H31Text3>
    Activity That Doesn’t Require Registration. You can view content on the
    Website without registering or providing any personal information. When you
    visit in this manner, we automatically obtain information from you about the
    name of your Internet service provider, the browser and type of computer you
    are using, and the website that referred you to us. In addition, we use a
    “session” cookie to identify you while you are on the Website, if cookies
    are enabled on your computer. This session cookie terminates once you finish
    using the Website and close your browser.
    <br />
    <br />
    Activity Requiring Registration. Certain activities on the Website require
    you to register. To become a registered user, we ask you to provide your
    name, last 4 digits of your SSN (3 for SIN) and your home Local. If you
    decide to register, we use a persistent cookie that stores certain
    information to make it easier for you to login when you come back to the
    Website. However, none of your personal information is stored in that
    cookie.
    <br />
    <br />
    Usage Information. We may record information about your usage of the
    Website, such as when you use the site, the areas of the site you click on
    and/or participate in. If you are logged in, we may associate that
    information with your account. A persistent cookie may be used to track this
    information. We may use pixel tags and/or trackable links in HTML-based
    emails sent to our users to track which emails are opened and/or clicked on
    by recipients.
    <br />
    <br />
    Comments Posted to Site. Any personal information or content that you
    voluntarily disclose online becomes publicly available and can be collected
    and used by others. Your user name (not your email address) is displayed to
    other users when you post comments. When posting comments, you should
    exercise caution not to provide any personally identifying information or
    other information that you would not want seen by others. Use of the
    community functions on the Website is at your own risk.
    <br />
    <br />
    Polls and Surveys. From time to time, we may conduct polls and surveys.
    Information collected through our polls, surveys, and questionnaires is used
    in the aggregate, unless we contact you to request permission to use your
    individual responses for a particular purpose.
    <br />
    <br />
    Financial Information and Payments. We use a secure server for processing
    payments and financial information. AFM staff log in to the secure site,
    retrieve the information and process it using our in-house credit card
    processing equipment. The AFM does not retain, share, store or use
    personally identifiable information for any secondary purposes.
    <br />
    <br />
    If you choose to make an online donation, you will have to provide your
    credit card billing information. As this information is collected and
    transferred over the Internet to our secure server, it is encrypted using
    Secure Socket Layer (SSL) technology, the security technology that is
    designed to protect sensitive information. Our donation pages display the
    Verisign Secure Site Seal to assure you that our Website is authentic and
    that all transactions are secured by SSL encryption. If you are making a
    donation, the credit card information that you provide at the time of
    donation is used only to process your donation and will not be used for any
    other purposes.
    <br />
    <br />
    We do not knowingly collect any information from children under the age of
    13. We encourage you to talk to your children about safe and responsible use
    of their personal information while using the Internet. If you have any
    reservations, questions or concerns about your child’s access to this site
    or how information that your child provides is used by us, please contact
    us.
  </H31Text3>,

  <H31Title2B
    css={css`
      color: ${_config.colorSecondary};
    `}
  >
    Uses of Personal Information
  </H31Title2B>,
  <br />,
  <H31ListBullet1>
    <H31Item1>
      The personal information that we collect on the Website helps us, our
      state and local affiliates and related organizations to efficiently and
      effectively represent AFM members, to pursue our advocacy agenda, and to
      provide valuable member benefits.
    </H31Item1>

    <H31Item1>
      In order to advance these goals and activities, we may share the personal
      information that we collect about you with our state and local affiliates
      and other AFM-related organizations, as well as third parties that perform
      services on our behalf. Additionally, subject to applicable law, we may
      share any of the personal information that we collect about you with
      certain third parties that share our interests.
    </H31Item1>

    <H31Item1>
      We will use your email address to communicate with you about our
      activities and offerings, unless you opt-out from receiving such messages.
      We will also use your email address for administrative purposes, such as
      notifying you of major Website changes, sending messages related to
      actions you have taken on the site or for customer service purposes.
      Although we hope you’ll find these communications informative and useful,
      you may opt out of receiving future information via e-mail by using the
      unsubscribe procedures specified on the e-mail message.
    </H31Item1>

    <H31Item1>
      When you send email or other communications to us, we may retain those
      communications in order to process your inquiries, respond to your
      requests and improve our services.
    </H31Item1>

    <H31Item1>
      We use both your personally identifying information and certain
      non-personally-identifying information (such as anonymous usage data, IP
      addresses, browser type, clickstream data, etc.) to improve the quality of
      your user experience and the design of the Website and to create new
      features, functionality, and services by storing, tracking, and analyzing
      user behavior, preferences, trends, and actions.
    </H31Item1>
  </H31ListBullet1>,

  <H31Title2B
    css={css`
      color: ${_config.colorSecondary};
    `}
  >
    Other Disclosures
  </H31Title2B>,
  <br />,
  <H31Text3>
    We may be required to disclose user information pursuant to lawful requests,
    such as subpoenas or court orders, or in compliance with applicable laws. If
    we receive a subpoena requesting information about you and if you have
    provided us with your email address, we will attempt to notify you of the
    subpoena at the email address that you have provided. Additionally, we may
    share account or other information when we believe it is necessary to comply
    with the law, to protect our interests or property, to prevent fraud or
    other illegal activity perpetrated through the Website or using our name, to
    prevent bodily harm, to enforce our User Agreement, or to protect the
    rights, property or safety of visitors to our site, our members, the public
    or our union. In the unlikely event that we merge with another entity,
    information on our visitors would be among the transferred assets.
  </H31Text3>,

  <H31Title2B
    css={css`
      color: ${_config.colorSecondary};
    `}
  >
    Information Security and Data Integrity
  </H31Title2B>,
  <br />,
  <H31Text3>
    We take security measures to protect against unauthorized access to or
    unauthorized alteration, disclosure or destruction of data. These measures
    include internal reviews of our data collection, storage and processing
    practices and security measures, as well as physical security measures to
    guard against unauthorized access to systems where we store personal data.
    <br />
    <br />
    It is important for you to protect against unauthorized access to your
    password and to your computer. Be sure to sign off when finished using a
    shared computer. If you send us an e-mail, you should know that e-mail is
    not necessarily secure against interception. So, if your communication
    includes sensitive information like your bank account, charge card, or
    social security number, and you prefer not to use one of our secure online
    complaint forms, contact us by mail or by telephone rather than by e-mail.
  </H31Text3>,

  <H31Title2B
    css={css`
      color: ${_config.colorSecondary};
    `}
  >
    More Information
  </H31Title2B>,
  <br />,
  <H31Text3>
    Our Website may also permit you to access non-AFM sites. It is important to
    remember that, if you link to a non-AFM site from our Website, that party’s
    privacy policy and its user agreement apply to you. We encourage you to
    learn about each third party’s privacy policy before giving personal
    information to them.
    <br />
    <br />
    We reserve the right to change this Privacy Policy at any time. We will post
    any changes to this Privacy Policy on this page, so we encourage you to
    check this page regularly. Your continued use of this Website following any
    changes to this Privacy Policy will constitute your acceptance of such
    changes.
    <br />
    <br />
    Effective Date: March 10, 2008
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
          <div
            css={css`
              display: none !important;
              @media (min-width: 576px) {
                display: block !important;
              }
            `}
          >
            <H31ContentBlock2 title="Privacy Policy">{data}</H31ContentBlock2>
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
  </Layout>
);

export default PrivacyPolicyPage;
