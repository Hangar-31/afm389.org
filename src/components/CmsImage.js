import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

// An image chosen in the CMS. Renders nothing if the file is missing, so a
// removed image can't break the site build.
export default function CmsImage({ image, alt, loading, className }) {
  const fluid = image?.childImageSharp?.fluid;
  if (!fluid) return null;
  return <Img className={className} alt={alt} loading={loading} fluid={fluid} />;
}

CmsImage.defaultProps = {
  image: null,
  alt: "",
  loading: "lazy",
  className: undefined,
};

CmsImage.propTypes = {
  image: PropTypes.shape({ childImageSharp: PropTypes.shape({}) }),
  alt: PropTypes.string,
  loading: PropTypes.string,
  className: PropTypes.string,
};
