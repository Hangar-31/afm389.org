// Style Library
import styled from "@emotion/styled";

// Bootstrap Layout Components for Overwritting
import bRow from "react-bootstrap/Row";
import _config from "../../_config";

// ------ Layout Styles

export default styled(bRow)`
  max-width: ${_config.sizeXl}px!important;
  margin: 0 auto !important;
`;
