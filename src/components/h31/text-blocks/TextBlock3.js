/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { PropTypes } from "prop-types";

// Config
import _config from "../../_config";

// Components
import {
  H31LayoutContainer,
  H31LayoutRow,
  H31LayoutCol,
  H31Title3A,
  H31Link4,
} from "..";

function TextBlock3({ title, text, link, ImageComponent }) {
  return (
    <H31LayoutContainer fluid as="section">
      <H31LayoutRow as="section">
        <H31LayoutCol md={2} />
        <H31LayoutCol md={3}>
          <H31Title3A
            css={css`
              margin-bottom: 15px;
              color: ${_config.colorSecondary};
            `}
          >
            {title}
          </H31Title3A>
          <H31Link4 href={link}>{text}</H31Link4>
        </H31LayoutCol>

        <H31LayoutCol md={5}>{ImageComponent}</H31LayoutCol>
        <H31LayoutCol md={2} />
      </H31LayoutRow>
    </H31LayoutContainer>
  );
}

TextBlock3.defaultProps = {
  title: <span>Testing</span>,
  text: "Link",
  link: "/",
  ImageComponent: <img alt="" src="https://via.placeholder.com/570X130" />,
};

TextBlock3.propTypes = {
  title: PropTypes.element,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  link: PropTypes.string,
  ImageComponent: PropTypes.element,
};

export default TextBlock3;
