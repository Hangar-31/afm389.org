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
  H31Title4A,
  H31ListBullet1,
  H31Item1,
  H31ListNumbered1
} from "../components/h31";

const data = [
  <br />,
  <H31Title4A
    css={css`
      color: #000000;
    `}
  >
    Terms of Service
  </H31Title4A>,
  <br />,
  <H31Text3>
    Welcome to the American Federation of Musicians (“AFM”) Website. Please
    carefully review our Terms of Service before you begin using the site. Thank
    you.
  </H31Text3>,

  <H31Text3>A. Your Acceptance</H31Text3>,

  <H31Text3>
    By using and/or visiting this Website (the “AFM Website,” or “Website”), you
    signify your agreement to (1) these terms and conditions (the “Terms of
    Service”), (2) AFM’s Privacy Policy, incorporated here by reference, and (3)
    AFM’s Community Guidelines, also incorporated here by reference. If you do
    not agree to any of these terms, the Privacy Policy, or Community
    Guidelines, you are not authorized to use the AFM Website.
    <br />
    <br />
    Although we may attempt to notify you when major changes are made to these
    Terms of Service, you should periodically review the most up-to-date
    version. AFM may, in its sole discretion, modify these Terms of Service at
    any time. By continuing to use this website following our posting of such
    changes, you agree to be bound by these Terms of Service, as modified.
    <br />
    <br />
    Through our sites, AFM provides users with access to a rich array of
    educational resources, including personalized content. We hope you find our
    sites useful. We reserve the right to modify, suspend, or discontinue the
    Website or any related sites, or any part of them, at any time, for any
    reason without prior notice to you. You agree that we shall not be liable
    for any such modification, suspension, or discontinuance.
    <br />
    <br />
    Your registration information, as well as other personally identifiable
    information that you provide us about yourself on our sites, is subject to
    our Privacy Statement. Click here to read our Privacy Statement.
    <br />
    <br />
    B. General Use of the Website — Permissions and Restrictions
    <br />
    <br />
    AFM hereby grants you permission to access and use the Website as set forth
    in these Terms of Service, provided that:
    <br />
    <br />
    <H31ListNumbered1>
      <H31Item1>
        You do not collect any personally identifiable information of others,
        including user names or email addresses, from the Website.
      </H31Item1>
      <H31Item1>
        You do not use the Website for any commercial purposes without the prior
        written authorization of AFM. You agree not to transmit or otherwise
        make available any unsolicited advertising, promotional information,
        bulk e-mail or other solicitation. You agree not to solicit, for
        commercial purposes, any users of the Website with respect to their User
        Comments.
      </H31Item1>
      <H31Item1>
        You do not use or launch any automated system, including without
        limitation, “robots,” “spiders,” or “offline readers,” that accesses the
        Website in a manner that sends more request messages to the AFM servers
        in a given period of time than a human can reasonably produce in the
        same period by using a conventional online web browser. Notwithstanding
        the foregoing, AFM grants the operators of public search engines
        permission to use spiders to copy materials from the site for the sole
        purpose of and solely to the extent necessary for creating publicly
        available searchable indices of the materials, but not caches or
        archives of such materials. AFM reserves the right to revoke these
        exceptions either generally or in specific cases.
      </H31Item1>
      <H31Item1>
        You do not transmit or otherwise make available any content containing
        any “virus,” “worm,” “trojan horse,” or any other computer code, file,
        or program designed to interrupt, destroy, or limit the functionality of
        any computer software or hardware or telecommunications equipment.
      </H31Item1>
      <H31Item1>You do not alter or modify any part of the Website.</H31Item1>
      <H31Item1>
        You do not circumvent, disable or otherwise interfere with
        security-related features of the Website or our sites or servers (or
        networks connected to our Website).
      </H31Item1>
      <H31Item1>
        You do not harass, threaten, embarrass, or cause distress, unwanted
        attention, or discomfort to a person or entity on or through the Website
        or its communication systems.
      </H31Item1>
      <H31Item1>
        You do not transmit or otherwise make available on or through the
        Website any content that is unlawful, harmful, threatening, abusive,
        harassing, defamatory, vulgar, obscene, hateful, or racially,
        ethnically, or otherwise objectionable, as solely determined by AFM.
      </H31Item1>
      <H31Item1>
        AFM reserves the right to change or discontinue any aspect of the
        Website at any time, for any reason, and without notice to you.
      </H31Item1>
      <H31Item1>
        AFM reserves the right to suspend or terminate a user’s access to the
        Website, without prior notice and at AFM’s sole discretion.
      </H31Item1>
      <H31Item1>
        This list of permissions and restrictions, along with the other terms
        discussed below, is not intended to be complete, but merely
        illustrative. We reserve the right in our sole and final judgment to
        determine whether your conduct violates conduct requirements for the
        Website.
      </H31Item1>
    </H31ListNumbered1>
    C. AFM Registered User Accounts
    <br />
    <br />
    In order to access some features of the Website, such as, for example,
    interactive blogs, you have to become a Registered User, which will also
    create a user account. As a Registered User, you agree to be bound by the
    following terms:
    <br />
    <br />
    <H31ListNumbered1>
      <H31Item1>
        When creating or modifying your account, you must provide accurate,
        current, and complete information. We reserve the right to disallow use
        of any user name that we deem offensive or inappropriate. You will be
        responsible for preserving the confidentiality of your password and for
        all actions of persons accessing the Website through any
        username/password assigned to you. You must notify AFM immediately of
        any breach of security or unauthorized use of your account. You may
        never use another’s account without permission.
      </H31Item1>
      <H31Item1>
        As a Registered User you may submit comments on various AFM blogs or
        other material (collectively, “User Content”) to the Website. AFM
        reserves the right, but does not assume the obligation, to delete, move,
        condense, or edit such User Content for any reason and without prior
        notice. AFM also reserves the right to suspend or terminate a Registered
        User’s access for posting User Content.
      </H31Item1>
      <H31Item1>
        You are solely responsible for your own User Content and the
        consequences of posting or publishing it. You affirm, represent, and/or
        warrant that: you own, or have the necessary licenses, rights, consents,
        and permissions to use and authorize AFM to use, all patent, trademark,
        trade secret, copyright or other proprietary rights in and to all User
        Content you submit to enable inclusion and use of such User Content in
        the manner contemplated by the Website and these Terms of Service.
      </H31Item1>
      <H31Item1>
        You retain all of your ownership rights in your User Content. However,
        by submitting User Content to AFM, you hereby grant AFM a worldwide,
        non-exclusive, royalty-free, sublicenseable, perpetual, and transferable
        license to use, reproduce, store, distribute, prepare derivative works
        of and display your User Content (and your user name) in any medium in
        connection with the activities and operations of AFM, its affiliated
        entities and successors. You also hereby grant each user of the AFM
        Website a non-exclusive license to access your User Content through the
        Website, and to use, reproduce, and distribute such User Content for
        such user’s personal, non-commercial purposes. You understand and agree
        that AFM may retain, reproduce, distribute and otherwise use for any
        purpose copies of User Content that has been removed from the Website.
        The above licenses granted by you are perpetual and irrevocable.
      </H31Item1>
      <H31Item1>
        AFM does not endorse, authorize or ratify any User Content, or any
        opinion, recommendation, or advice expressed therein, and AFM expressly
        disclaims all liability in connection with User Content. AFM does not
        permit copyright infringing activities and infringement of intellectual
        property rights on its Website, and AFM reserves the right, but does not
        assume the obligation, to remove any content from the Website if
        notified that such content infringes on another’s intellectual property
        rights.
      </H31Item1>
    </H31ListNumbered1>
    D. Your Use of Content on the site
    <br />
    <br />
    In addition to the restrictions above, the following restrictions and
    conditions apply specifically to your use of content on the AFM Website.
    <br />
    <br />
    <H31ListNumbered1>
      <H31Item1>
        The content on the Website (other than your User Content), including
        without limitation, the text, software, scripts, graphics, photos,
        sounds, music, videos, interactive features and the like (collectively,
        “AFM Content”) is owned by or licensed by AFM. Similarly, the
        trademarks, service marks and logos contained on the Website are owned
        or licensed by AFM (“AFM Marks”). Except as otherwise provided in these
        Terms of Service, the AFM Content and the AFM Marks may not be
        downloaded, copied, reproduced, distributed, transmitted, broadcast,
        displayed, sold, licensed, or otherwise exploited for any purpose
        whatsoever without the prior written consent of AFM. AFM reserves all
        rights not expressly granted in and to the AFM Content and the AFM
        Marks.
      </H31Item1>
      <H31Item1>
        The Website is made available for your personal, non-commercial use
        only. As part of such use, you may display, download and/or print pages
        from the site; you may link to the Website; and you may forward Website
        materials to others for personal, non-commercial uses that are
        reasonably related to the Website’s purposes.
      </H31Item1>
      <H31Item1>
        You understand that when using the AFM Website, you will be exposed to
        AFM Content, User Content, and other third-party content from a variety
        of sources, and that AFM makes no warranty about the accuracy,
        usefulness, safety, or intellectual property rights of or relating to
        such AFM Content, User Content, or other third-party content. You
        further understand and acknowledge that you may be exposed to User
        Content that is inaccurate, offensive, indecent, or objectionable, and
        you agree to waive, and hereby do waive, any legal or equitable rights
        or remedies you have or may have against AFM with respect thereto.
      </H31Item1>
      <H31Item1>
        The Website may contain links to third party websites that are not owned
        or controlled by AFM. AFM has no control over, and assumes no
        responsibility for, the content, privacy policies, or practices of any
        third party websites. We encourage you to be aware when you leave the
        Website and to read the terms and conditions and privacy policy of each
        other website that you visit.
      </H31Item1>
    </H31ListNumbered1>
    E. Digital Millennium Copyright Act
    <br />
    <br />
    If you are a copyright owner or an agent thereof and believe that any AFM
    Content or User Comment infringes upon your copyright, you may submit a
    notification pursuant to the Digital Millennium Copyright Act (“DMCA”) by
    providing AFM’s Copyright Agent with the following information in writing
    (see 17 U.S.C 512(c)(3) for further detail):
    <br />
    <br />
    <H31ListBullet1>
      <H31Item1>
        Identification of the copyrighted work claimed to have been infringed;
      </H31Item1>
      <H31Item1>
        Identification of the material that is claimed to be infringing or to be
        the subject of infringing activity and that is to be removed or access
        to which is to be disabled and information reasonably sufficient to
        permit AFM to locate the material;
      </H31Item1>
      <H31Item1>
        A statement that you have a good faith belief that use of the material
        in the manner complained of is not authorized by the copyright owner,
        its agent, or the law;
      </H31Item1>
      <H31Item1>
        A statement that the information in the notification is accurate, and
        under penalty of perjury, that you are, or are authorized to act on
        behalf of, the owner of an exclusive right that is allegedly infringed;
      </H31Item1>
      <H31Item1>
        Your name, mailing address, telephone number, and e-mail address; and
      </H31Item1>
      <H31Item1>
        A physical or electronic signature of the owner of the exclusive right
        that is allegedly infringed, or that of the person authorized to act on
        behalf of the owner. AFM’s designated Copyright Agent to receive
        notifications of claimed infringement is: [contact information here].
        You acknowledge that if you fail to comply with all of the above
        requirements, your DMCA notice may not be valid.
      </H31Item1>
    </H31ListBullet1>
    For clarity, only DMCA notices should go to the Copyright Agent. Please use
    the Contact Us form for any other feedback, comments, requests for technical
    support, or other communications with AFM.
    <br />
    <br />
    F. Warranty Disclaimer
    <br />
    <br />
    THIS WEBSITE IS PROVIDED TO YOU “AS IS.” YOU AGREE THAT YOUR USE OF THE AFM
    WEBSITE SHALL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW,
    AFM, AS WELL AS ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS
    (COLLECTIVELY, THE “AFM PARTIES”), DISCLAIM ALL WARRANTIES, EXPRESS OR
    IMPLIED, IN CONNECTION WITH THE WEBSITE AND YOUR USE THEREOF. THE AFM
    PARTIES CANNOT AND DO NOT WARRANT THE ACCURACY, COMPLETENESS, CURRENTNESS,
    NONINFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE OF THE
    SITE’S CONTENT OR THE CONTENT OF ANY SITES LINKED TO THIS SITE. NOR DO THE
    AFM PARTIES GUARANTEE THAT THE WEBSITE WILL BE ERROR FREE, OR CONTINUOUSLY
    AVAILABLE, OR THAT THE WEBSITE WILL BE FREE OF VIRUSES OR OTHER HARMFUL
    COMPONENTS. THE AFM PARTIES DO NOT WARRANT, GUARANTEE, OR ASSUME
    RESPONSIBILITY FOR ANY PRODUCT OR SERVICE PROVIDED, ADVERTISED OR OFFERED BY
    A THIRD PARTY THROUGH THE AFM WEBSITE OR ANY HYPERLINKED WEBSITE OR FEATURED
    IN ANY BANNER OR OTHER ADVERTISING.
    <br />
    <br />
    G. Limitation of Liability
    <br />
    <br />
    IN NO EVENT SHALL THE AFM PARTIES BE LIABLE TO YOU OR ANYONE ELSE FOR ANY
    INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES
    WHATSOEVER, WHETHER OR NOT THEY ARE FORESEEABLE, RELATING TO THIS WEBSITE,
    INCLUDING ANY DAMAGES RESULTING FROM ANY (I) ERRORS, MISTAKES, OR
    INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY
    NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR WEBSITE,
    (III) UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL
    PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV)
    INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR WEBSITE, (V) BUGS,
    VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH
    OUR WEBSITE BY ANY THIRD PARTY, AND/OR (VI) ERRORS OR OMISSIONS IN ANY
    CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR
    USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE
    VIA THE AFM WEBSITE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER
    LEGAL THEORY, AND WHETHER OR NOT AFM IS ADVISED OF THE POSSIBILITY OF SUCH
    DAMAGES. YOU SPECIFICALLY ACKNOWLEDGE THAT THE AFM PARTIES SHALL NOT BE
    LIABLE FOR USER CONTENT OR THE DEFAMATORY, OFFENSIVE, OR ILLEGAL CONDUCT OF
    ANY THIRD PARTY AND THAT THE RISK OF HARM OR DAMAGE FROM THE FOREGOING RESTS
    ENTIRELY WITH YOU. CERTAIN STATE LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED
    WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. TO THE EXTENT
    THESE LAWS APPLY TO YOU, SOME OF THE PROVISIONS SET FORTH IN THIS AGREEMENT
    MAY NOT APPLY. YOU AGREE TO INDEMNIFY AND HOLD HARMLESS THE AFM PARTIES
    AGAINST ANY AND ALL CLAIMS, OF WHATEVER NATURE, THAT ARISE OUT OF YOUR USE
    OF AND ACCESS TO THE AFM WEBSITE OR YOUR VIOLATION OF ANY OF THESE TERMS OF
    SERVICE. THIS INDEMNIFICATION OBLIGATION WILL SURVIVE THESE TERMS OF SERVICE
    AND YOUR USE OF THE AFM WEBSITE.
    <br />
    <br />
    H. Ability to Accept Terms of Service
    <br />
    <br />
    You affirm that you are either more than 18 years of age, or an emancipated
    minor, or possess legal parental or guardian consent, and are fully able and
    competent to enter into the terms, conditions, obligations, affirmations,
    representations, and warranties set forth in these Terms of Service, and to
    abide by and comply with these Terms of Service. In any case, you affirm
    that you are over the age of 13, as the AFM Website is not intended for
    children under 13.
    <br />
    <br />
    I. Miscellaneous
    <br />
    <br />
    These Terms of Service shall be governed by the internal substantive laws of
    Washington, D.C., without respect to its conflict of laws principles. Any
    claim or dispute between you and AFM that arises in whole or in part from
    the AFM Website shall be decided exclusively by a court of competent
    jurisdiction located in Washington, D.C. These Terms of Service, together
    with the Privacy Policy and any other legal notices published by AFM on the
    Website, shall constitute the entire agreement between you and AFM
    concerning the AFM Website and supersedes prior agreements, if any, between
    you and AFM relating to any matter dealt with in the Terms of Service. If
    any provision of these Terms of Service is deemed invalid by a court of
    competent jurisdiction, the invalidity of such provision shall not affect
    the validity of the remaining provisions of these Terms of Service, which
    shall remain in full force and effect. No waiver of any term of this these
    Terms of Service shall be deemed a further or continuing waiver of such term
    or any other term, and AFM’s failure to assert any right or provision under
    these Terms of Service shall not constitute a waiver of such right or
    provision. These Terms of Service, and any rights and licenses granted
    hereunder, may not be transferred or assigned by you, but may be assigned by
    AFM without restriction. This Agreement and the rights and obligations
    created hereunder shall be binding upon and inure solely to the benefits of
    the parties hereto and their respective successors and assigns, and nothing
    in this Agreement, express or implied, is intended or should be construed to
    confer upon any other person any right, remedy or claim under or by virtue
    of this Agreement.
    <br />
    <br />
    You and AFM agree that any cause of action arising out of or related to the
    AFM Website must commence within one (1) year after the cause of action
    accrues. Otherwise, such cause of action is permanently barred.
    <br />
    <br />
    These terms of use are made effective as of March 9, 2008.
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
            <H31ContentBlock2 title="Terms of Service">{data}</H31ContentBlock2>
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
