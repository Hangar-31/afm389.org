import styled from "@emotion/styled";
import ImgTwitterTweet from "../../../images/accents/social-twitter-tweet-button.png";

export default styled.a`
  display: block;
  width: 80px;
  height: 26px;
  font-size: 1em;
  font-weight: 500;
  transition: 0.2s;
  border-radius: 5px;
  background: url(${ImgTwitterTweet}) no-repeat center/cover;
  cursor: pointer;
  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.4);
  }
  @media (max-width: 991px) {
    width: 60px;
    height: 20px;
  }
`;
