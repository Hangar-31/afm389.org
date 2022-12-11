/* eslint-disable react/no-unknown-property */
/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";

// Components
import { H31LayoutContainer } from "..";

// Images
import ImgLocationMarker from "../../../images/accents/cfma-location-marker.png";

function GoogleMap1(props) {
  const { lat, lng, zoom } = props;
  return (
    <H31LayoutContainer
      css={css`
        padding: 0 !important;
        height: 100%;
      `}
      as="section"
      fluid
    >
      <div style={{ height: "100%", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyA1Bv9KOS95RNxflm54fgkIENFb-dB-k9w",
          }}
          defaultCenter={{ lat: 28.5457854, lng: -81.3470503 }}
          defaultZoom={zoom}
        >
          <img
            alt=""
            css={css`
              position: absolute;
              left: -25px;
              top: -76px;
            `}
            src={ImgLocationMarker}
            lat={lat}
            lng={lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </H31LayoutContainer>
  );
}

GoogleMap1.defaultProps = {
  lat: 28.5457854,
  lng: -81.34486,
  zoom: 14,
};

GoogleMap1.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number,
};

export default GoogleMap1;
