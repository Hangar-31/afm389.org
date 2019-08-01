import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import { css } from "@emotion/core";

// Components
import { H31LayoutContainer } from "..";

const GoogleMap1 = props => {
  const { lat, lng, zoom } = props;
  return (
    <H31LayoutContainer
      css={css`
        padding: 0 !important;
      `}
      as="section"
      fluid
    >
      <div style={{ height: "500px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyA1Bv9KOS95RNxflm54fgkIENFb-dB-k9w"
          }}
          defaultCenter={{ lat: 28.544989, lng: -81.36003 }}
          defaultZoom={zoom}
        >
          <div
            css={css`
              width: 20px;
              height: 20px;
              background: red;
            `}
            lat={lat}
            lng={lng}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    </H31LayoutContainer>
  );
};

GoogleMap1.defaultProps = {
  lat: 28.5457854,
  lng: -81.34486,
  zoom: 15
};

GoogleMap1.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  zoom: PropTypes.number
};

export default GoogleMap1;
