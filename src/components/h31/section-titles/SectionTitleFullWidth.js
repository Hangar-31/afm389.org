/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import { PropTypes } from "prop-types";

// Components
import {
  H31Title2B,
  H31Title2C,
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
} from "..";

function SectionTitleFullWidth({
  backgroundColor,
  titleSmallColor,
  titleSmall,
  titleLarge,
  id,
  customCSS,
}) {
  return (
    <H31LayoutContainer
      id={id}
      as="section"
      fluid
      css={css`
        display: flex;
        align-items: center;
        min-height: 130px;
        background-color: ${backgroundColor};
        @media (max-width: 991px) {
          min-height: 90px;
        }
        @media (max-width: 767px) {
          min-height: 75px;
        }
        @media (max-width: 575px) {
          min-height: 60px;
          padding: 10px 0 !important;
        }
      `}
    >
      <H31LayoutRow
        css={css`
          height: auto;
          width: 100%;
        `}
      >
        <H31LayoutCol xs={1} md={0} />
        <H31LayoutCol
          css={css`
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            ${customCSS}
          `}
          xs={10}
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
        <H31LayoutCol xs={1} md={0} />
      </H31LayoutRow>
    </H31LayoutContainer>
  );
}

SectionTitleFullWidth.defaultProps = {
  backgroundColor: "grey",
  titleSmall: "Small Title",
  titleSmallColor: "",
  titleLarge: null,
  id: null,
  customCSS: "",
};

SectionTitleFullWidth.propTypes = {
  backgroundColor: PropTypes.string,
  titleSmall: PropTypes.string,
  titleSmallColor: PropTypes.string,
  titleLarge: PropTypes.string,
  id: PropTypes.string,
  customCSS: PropTypes.string,
};

export default SectionTitleFullWidth;
