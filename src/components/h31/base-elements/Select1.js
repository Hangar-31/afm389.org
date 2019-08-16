import styled from "@emotion/styled";
import baseConfig from "./_config";
import siteConfig from "../../_config";
import ImgDownCarrot from "../../../images/accents/down-carrot.svg";

export default styled.select`
  ${baseConfig}
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 28px;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 5px 5px;
  border: 1px solid #e5e5e5;

  color: ${siteConfig.colorLightGrey};
  font-family: ${siteConfig.fontPrimary};
  font-size: 0.75rem;
  font-weight: 300;

  background: url(${ImgDownCarrot}) no-repeat 98% center/10px, #ffffff;
  -webkit-appearance: button;

  option {
    color: ${siteConfig.colorDarkGrey};
    font-family: ${siteConfig.fontPrimary};
    font-size: 0.875rem;
    font-weight: 300;
  }
`;
