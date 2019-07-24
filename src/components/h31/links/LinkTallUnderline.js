import { PropTypes } from "prop-types";
import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import Link1 from "../base-elements/Link1";

const Wrapper = styled.div`
  position: relative;
  display: flex;
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
  linkColor,
  linkHoverColor,
  underlineColor,
  underlineHoverColor,
  LinkComponent
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
    {LinkComponent}
    <Underline
      css={css`
        background-color: ${underlineColor};
      `}
    />
  </Wrapper>
);

LinkTallUnderline.defaultProps = {
  linkColor: "#000000",
  linkHoverColor: "#000000",
  underlineColor: "#000000",
  underlineHoverColor: "#000000",
  LinkComponent: <Link1 href="https://google.com">Link</Link1>
};

LinkTallUnderline.propTypes = {
  linkColor: PropTypes.string,
  linkHoverColor: PropTypes.string,
  underlineColor: PropTypes.string,
  underlineHoverColor: PropTypes.string,
  LinkComponent: PropTypes.element
};

export default LinkTallUnderline;
