import styled from "@emotion/styled";
import ImgFacebookShare from "../../../images/accents/social-facebook-share-button.png";

export default styled.a`
  cursor: pointer;
  width: 80px;
  height: 26px;
  font-size: 1em;
  font-weight: 500;
  transition: 0.2s;
  border-radius: 5px;
  background: url(${ImgFacebookShare}) no-repeat center/cover;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.4);
  }
`;
