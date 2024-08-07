// Style Library
/** @jsx jsx */
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";

// Bootstrap Layout Components for Overwritting
import Container from "react-bootstrap/Container";
import _config from "../../_config";

// ------ Layout Styles

export default styled(Container)`
  position: relative;
  padding: ${_config.padding / 2}px 0px !important;
  @media (max-width: 575px) {
    padding: 0px !important;
  }
`;
