import PropTypes from "prop-types";
import useSiteSettings from "../../../hooks/useSiteSettings";

// Render prop so class components can use the CMS social links too.
function SiteSocials({ children }) {
  const { socials } = useSiteSettings();
  return children(socials);
}

SiteSocials.propTypes = {
  children: PropTypes.func.isRequired,
};

export default SiteSocials;
