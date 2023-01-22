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
  overflow-y: hidden;
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
  justify-content: center;
  align-items: space-between;

  > iframe {
    z-index: 1 !important;
    margin: 0 15px !important;
  }
`;

const instIds = ["CnnbdEdtE2S", "Cm3KDtzsn1s", "CmxI55FMd8B", "CmxHxNNL5KV"];

function InstagramSection() {
  // const [instaItems, setInstaItems] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch(
  //       "https://crossorigin.me/https://www.instagram.com/cfma389/"
  //     );
  //     const body = await res.text();
  //     console.log(body);
  //   };
  //   fetchData();
  // }, []);

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
