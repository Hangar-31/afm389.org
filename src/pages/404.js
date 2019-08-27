// eslint-disable-next-line
import React from "react";
import { css } from "@emotion/core";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import {
  H31ContentBlock2,
  H31Text3,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol
} from "../components/h31";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 Page" description="This page does not exist!" />
    <H31LayoutContainer
      css={css`
        margin: 60px 0;
      `}
      fluid
      as="section"
    >
      <H31LayoutRow>
        <H31LayoutCol
          xs={12}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 8, offset: 2 }}
          xl={{ span: 6, offset: 3 }}
        >
          <H31ContentBlock2 title="Sorry, This Page Does Not Exist!">
            <H31Text3
              css={css`
                text-align: center;
              `}
            >
              Please navigate to one of the pages using one of links in the
              navigation above.
            </H31Text3>
          </H31ContentBlock2>
        </H31LayoutCol>
      </H31LayoutRow>
    </H31LayoutContainer>
  </Layout>
);

export default NotFoundPage;
