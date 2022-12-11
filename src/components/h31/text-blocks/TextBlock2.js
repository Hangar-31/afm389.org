/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { PropTypes } from "prop-types";
import styled from "@emotion/styled/macro";

// Config
import _config from "../../_config";

// Components
import {
  H31LayoutCol,
  H31LayoutContainer,
  H31LayoutRow,
  H31Title2B,
  H31Text3,
  H31Title1B,
} from "..";

// Styled Components
const ColorBlock = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${_config.colorSecondary};
`;

const TitleWrapper = styled.section`
  align-items: center;
  margin-bottom: 30px;
`;

function TextBlock2({ title, subtitle, text }) {
  return (
    <H31LayoutContainer
      css={css`
        margin-bottom: 90px;
        @media (max-width: 991px) {
          margin-top: 30px;
          margin-bottom: 30px;
        }
      `}
      fluid
      as="section"
    >
      <H31LayoutRow>
        <H31LayoutCol className="d-xs-block d-md-none" xs={1} md={0} />
        <H31LayoutCol xs={2} md={1}>
          <ColorBlock />
        </H31LayoutCol>
        <H31LayoutCol className="d-none d-lg-block" xs={0} lg={1} />
        <H31LayoutCol
          css={css`
            padding: 90px 0;
            @media (max-width: 991px) {
              padding: 30px 0;
            }
          `}
          xs={8}
          md={10}
          lg={8}
        >
          <TitleWrapper>
            <H31Title2B>{subtitle}</H31Title2B>
            <H31Title1B
              css={css`
                color: ${_config.colorDarkGrey};
              `}
            >
              {title}
            </H31Title1B>
          </TitleWrapper>
          <H31Text3>{text}</H31Text3>
        </H31LayoutCol>
        <H31LayoutCol xs={1} lg={2} />
      </H31LayoutRow>
    </H31LayoutContainer>
  );
}

TextBlock2.defaultProps = {
  title: "Test Title",
  subtitle: "Test Subtitle",
  text: "Test Paragraph",
};

TextBlock2.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
};

export default TextBlock2;
