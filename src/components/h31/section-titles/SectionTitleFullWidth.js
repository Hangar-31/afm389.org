import React from "react";
import { PropTypes } from "prop-types";
import { css } from "@emotion/core";

// Components
import {
  H31Title2B,
  H31Title2C,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol
} from "..";

const SectionTitleFullWidth = ({
  backgroundColor,
  titleSmallColor,
  titleSmall,
  titleLarge
}) => (
  <H31LayoutContainer
    as="section"
    fluid
    css={css`
      display: flex;
      align-items: center;
      height: 120px;
      background-color: ${backgroundColor};
    `}
  >
    <H31LayoutRow
      css={css`
        height: 65px;
        width: 100%;
      `}
    >
      <H31LayoutCol
        css={css`
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        `}
        md={12}
      >
        <H31Title2B
          css={css`
            color: ${titleSmallColor};
            width: 100%;
          `}
        >
          {titleSmall}
        </H31Title2B>
        {titleLarge !== null && <H31Title2C>{titleLarge}</H31Title2C>}
      </H31LayoutCol>
    </H31LayoutRow>
  </H31LayoutContainer>
);

SectionTitleFullWidth.defaultProps = {
  backgroundColor: "grey",
  titleSmall: <h2>Title 2</h2>,
  titleSmallColor: "",
  titleLarge: null
};

SectionTitleFullWidth.propTypes = {
  backgroundColor: PropTypes.string,
  titleSmall: PropTypes.element,
  titleSmallColor: PropTypes.string,
  titleLarge: PropTypes.number
};

export default SectionTitleFullWidth;
