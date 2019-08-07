import { PropTypes } from "prop-types";
import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// Components
import { H31Link1 } from "..";

const Wrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 100%;
  min-height: 25px;
`;

const Underline = styled.div`
  position: absolute;
  height: 3px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width 0%;
  transition: 0.2s;
`;

const LinkTallUnderline = ({
  link,
  text,
  linkColor,
  linkHoverColor,
  underlineColor,
  underlineHoverColor
}) => (
  <Wrapper
    css={css`
      > a {
        color: ${linkColor};
        transition: 0.2s;
      }
      > a:hover {
        color: ${linkHoverColor};
      }
      > a:hover + ${Underline} {
        width: 100%;
        background-color: ${underlineHoverColor};
      }
    `}
  >
    <H31Link1 activeClassName="main-link-active" to={link}>
      {text}
    </H31Link1>
    <Underline
      css={css`
        background-color: ${underlineColor};
      `}
    />
  </Wrapper>
);

LinkTallUnderline.defaultProps = {
  link: "/",
  text: "Link",
  linkColor: "#000000",
  linkHoverColor: "#000000",
  underlineColor: "#000000",
  underlineHoverColor: "#000000"
};

LinkTallUnderline.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string,
  linkColor: PropTypes.string,
  linkHoverColor: PropTypes.string,
  underlineColor: PropTypes.string,
  underlineHoverColor: PropTypes.string
};

export default LinkTallUnderline;
