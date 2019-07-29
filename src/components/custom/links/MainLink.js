import { Link } from 'gatsby';
import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import _config from "../../_config";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  min-height: 25px;
`;

const InternalLink = styled(Link)`
  color: ${_config.colorWhite};
  font-family: ${_config.fontPrimary};
  font-size: 0.8rem;
  text-transform: uppercase;
  text-decoration: none;
`

const Underline = styled.div`
  position: absolute;
  height: 3px;
  background: ${_config.colorSecondary};
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width 0%;
  transition: 0.2s;
`;

export default ({ text, to }) => (
  <Wrapper>
    <InternalLink  
      to={to}   
      css={css`
        color: ${_config.colorWhite};
        transition: 0.2s;
        &:hover {
          color: ${_config.colorSecondary};
          & + ${Underline} {
            width: 100%;
            background-color: ${_config.colorSecondary};
          }
        }
    `}>
      {text}
    </InternalLink>
    <Underline />
  </Wrapper>
);
