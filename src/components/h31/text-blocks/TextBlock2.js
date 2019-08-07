import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

// Config
import _config from "../../_config";

// Components
import {
  H31LayoutCol,
  H31LayoutContainer,
  H31LayoutRow,
  H31Title2B,
  H31Text3,
  H31Title1B
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

const TextBlock2 = ({ title, subtitle, text }) => (
  <H31LayoutContainer
    css={css`
      margin-bottom: 90px;
    `}
    fluid
    as="section"
  >
    <H31LayoutRow>
      <H31LayoutCol md={1}>
        <ColorBlock />
      </H31LayoutCol>
      <H31LayoutCol md={1} />
      <H31LayoutCol
        css={css`
          padding: 90px 0;
        `}
        md={8}
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
      <H31LayoutCol md={2} />
    </H31LayoutRow>
  </H31LayoutContainer>
);

TextBlock2.defaultProps = {
  title: "Test Title",
  subtitle: "Test Subtitle",
  text: "Test Paragraph"
};

TextBlock2.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string
};

export default TextBlock2;
