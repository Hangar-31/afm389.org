import React from "react";
import { PropTypes } from "prop-types";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

const Section = styled.section`
  height: 120px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const SectionTitleFullWidth = ({
  TitleComponent1,
  TitleComponent2,
  backgroundColor
}) => (
  <Section
    css={css`
      background-color: ${backgroundColor};
    `}
  >
    <Wrapper>
      {TitleComponent1}
      {TitleComponent2 !== null && <>{TitleComponent2}</>}
    </Wrapper>
  </Section>
);

SectionTitleFullWidth.defaultProps = {
  backgroundColor: "grey",
  TitleComponent1: <h2>Title 2</h2>,
  TitleComponent2: null
};

SectionTitleFullWidth.propTypes = {
  backgroundColor: PropTypes.string,
  TitleComponent1: PropTypes.element,
  TitleComponent2: PropTypes.element
};

export default SectionTitleFullWidth;
