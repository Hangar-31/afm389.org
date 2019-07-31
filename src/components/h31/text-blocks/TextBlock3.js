import { PropTypes } from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
// import styled from "@emotion/styled";

import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Title3A,
  H31Text5
} from "..";
import _config from "../../_config";

const TextBlock3 = ({ title, title2, title3, text, text2, text3 }) => (
  <H31LayoutContainer fluid as="section">
    <H31LayoutRow as="section">
      <H31LayoutCol md={3}>
        <H31Title3A
          css={css`
            color: ${_config.colorSecondary};
          `}
        >
          {title}
        </H31Title3A>
        <H31Text5>{text}</H31Text5>
      </H31LayoutCol>

      <H31LayoutCol md={5} />
    </H31LayoutRow>

    <H31LayoutRow as="section">
      <H31LayoutCol md={3}>
        <H31Title3A
          css={css`
            color: ${_config.colorSecondary};
          `}
        >
          {title2}
        </H31Title3A>
        <H31Text5>{text2}</H31Text5>
      </H31LayoutCol>

      <H31LayoutCol md={5} />
    </H31LayoutRow>

    <H31LayoutRow as="section">
      <H31LayoutCol md={3}>
        <H31Title3A
          css={css`
            color: ${_config.colorSecondary};
          `}
        >
          {title3}
        </H31Title3A>
        <H31Text5>{text3}</H31Text5>
      </H31LayoutCol>

      <H31LayoutCol md={5} />
    </H31LayoutRow>
  </H31LayoutContainer>
);

TextBlock3.defaultProps = {
  title: <span>Testing</span>,
  title2: <span>Testing 2</span>,
  title3: <span>Testing 3</span>,
  text: (
    <a
      href="/"
      css={css`
        color: ${_config.colorGrey};
        text-decoration: none;
        &:hover {
          text-decoration: none;
          color: ${_config.colorGrey};
        }
      `}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt.
    </a>
  ),
  text2: (
    <a
      href="/"
      css={css`
        color: ${_config.colorGrey};
        text-decoration: none;
        &:hover {
          text-decoration: none;
          color: ${_config.colorGrey};
        }
      `}
    >
      {" "}
      Lorem ipsum dolor sit.
    </a>
  ),
  text3: (
    <a
      href="/"
      css={css`
        color: ${_config.colorGrey};
        text-decoration: underline;
        &:hover {
          color: ${_config.colorGrey};
        }
      `}
    >
      {" "}
      Lorem ipsum dolor.
    </a>
  )
};

TextBlock3.propTypes = {
  title: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  text: PropTypes.element,
  text2: PropTypes.element,
  text3: PropTypes.element
};

export default TextBlock3;
