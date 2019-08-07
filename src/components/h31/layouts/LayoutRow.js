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
