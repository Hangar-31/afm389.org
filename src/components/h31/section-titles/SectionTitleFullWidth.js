import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import Title2 from "../base-elements/Title2";
import Subtitle from "../base-elements/Title4";

const Section = styled.section``;

const SectionTitleFullWidth = ({
  titleComponent,
  subTitleComponent,
  backgroundColor
}) => (
  <Section
    css={css`
      background-color: ${backgroundColor};
    `}
  >
    {titleComponent}
    {subTitleComponent}
  </Section>
);

SectionTitleFullWidth.defaultProps = {
  backgroundColor: "grey",
  titleComponent: <Title2>Testing</Title2>,
  subTitleComponent: <Subtitle>Testing</Subtitle>
};

SectionTitleFullWidth.propTypes = {
  backgroundColor: PropTypes.string,
  titleComponent: PropTypes.element,
  subTitleComponent: PropTypes.element
};

export default SectionTitleFullWidth;
