// Style Library
import styled from "@emotion/styled";

// Bootstrap Layout Components for Overwritting
import Row from "react-bootstrap/Row";
import _config from "../../_config";

// ------ Layout Styles

export default styled(Row)`
  max-width: ${_config.sizeXl}px;
  margin-left: auto !important;
  margin-right: auto !important;
`;
// @media (min-width: ${_config.sizeXl}px) {
//   max-width: ${_config.sizeXl}px!important;
//   padding: ${_config.padding / 2}px 0px !important;
// }
// @media (min-width: ${_config.sizeLg}px) and (max-width: ${_config.sizeXl}) {
//   max-width: ${_config.sizeLg}px!important;
//   padding: ${_config.padding / 2}px 0px !important;
// }
// @media (min-width: ${_config.sizeMd}px) and (max-width: ${_config.sizeLg}) {
//   max-width: ${_config.sizeMd}px!important;
//   padding: ${_config.padding / 2}px 0px !important;
// }
// @media (min-width: ${_config.sizeSm}px) and (max-width: ${_config.sizeMd}) {
//   max-width: ${_config.sizeSm}px!important;
//   padding: ${_config.padding / 2}px 0px !important;
// }
// @media (min-width: ${_config.sizeXs}px) and (max-width: ${_config.sizeSm}) {
//   max-width: ${_config.sizeXs}px!important;
// }
// @media (max-width: ${_config.sizeXs}px) {
//   max-width: ${_config.sizeXXs}px!important;
//   margin: 0 auto !important;
//   padding: 0 !important;
// }
