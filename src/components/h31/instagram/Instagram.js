/* eslint-disable no-undef */
/* eslint-disable react/no-unused-state */
/** @jsx jsx */
import React, { useEffect } from "react";
import { jsx } from "@emotion/react";
import styled from "@emotion/styled/macro";

import _config from "../../_config";
import InstagramEmbed from "../instagramEmbed/InstagramEmbed";

const MasterContainer = styled.section`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  z-index: 0;
  left: 0;
  top: 15px;
  width: 100%;
  height: calc(100% - 50px);
  background: linear-gradient(90deg, #6da55f 0%, #164f4b 100%);
  @media (max-width: 767px) {
    height: calc(100% - 65px);
  }
`;

const Wrapper = styled.section`
  display: flex;
  max-width: 1440px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 83.33%;
  }

  > iframe:nth-of-type(3) {
    @media (max-width: 1440px) {
      display: none !important;
    }
  }

  > iframe:nth-of-type(2) {
    @media (max-width: 1070px) {
      display: none !important;
    }
  }

  > iframe:nth-of-type(1) {
    @media (max-width: 680px) {
      display: none !important;
    }
  }

  > iframe {
    z-index: 1 !important;
    margin: 0 15px !important;
    min-width: 260px !important;
  }
`;

const instIds = ["C_nlaG3srfH", "C_su_oBvA80", "C_vT0CDCmzW", "C-dPzWggFSi"];

function InstagramSection() {
  return (
    <MasterContainer>
      <Background />
      <Wrapper>
        {instIds.map((instaId) => (
          <InstagramEmbed key={instaId} instaId={instaId} />
        ))}
      </Wrapper>
    </MasterContainer>
  );
}

export default InstagramSection;
