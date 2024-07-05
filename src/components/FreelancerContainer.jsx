import BottomCard2 from "./BottomCard2";
import PropTypes from "prop-types";
import styles from "./FreelancerContainer.module.css";

const FreelancerContainer = ({ className = "" }) => {
  return (
    <footer className={[styles.freelancerContainer, className].join(" ")}>
      <BottomCard2
        rectangle428="pending_2:146"
        socialIconsMastercardWC="pending_2:148"
        mastercard="Freelancer"
        prop="+ $3300.00"
        propAlignSelf="unset"
        propFlex="1"
      />
    </footer>
  );
};

FreelancerContainer.propTypes = {
  className: PropTypes.string,
};

export default FreelancerContainer;
