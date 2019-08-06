import { PropTypes } from "prop-types";
/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";

import { H31ButtonFillArrow } from "../index";

import _config from "../../_config";

const Container = styled.section`
  position: relative;
  width: 100%;
  margin: 30px 0;
`;

const BackgroundColor = styled.div`
  position: absolute;
  width: 100%;
  top: 15px;
  height: calc(100% - 150px);
  background: linear-gradient(
    90deg,
    #6da55f calc(0% + 15px),
    #164f4b calc(100% - 15px)
  );
`;

const BlogWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  max-width: 1440px;
  margin: 0 auto;
  > * {
    grid-columns: span 1fr;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  height: 120px;
`;

const Layout4Col = ({ children }) => (
  <Container>
    <BackgroundColor />
    <BlogWrapper>{children}</BlogWrapper>
    <ButtonWrapper>
      <H31ButtonFillArrow
        link="/news-&-events"
        primaryColor={_config.colorWhite}
        secondaryColor={_config.colorTertiary}
        carrotColor={_config.colorTertiary}
        arrowDirection="right"
      />
    </ButtonWrapper>
  </Container>
);

Layout4Col.defaultProps = {
  children: <span />
};

Layout4Col.propTypes = {
  children: PropTypes.element
};

export default Layout4Col;
