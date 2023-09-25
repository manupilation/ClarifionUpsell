import GuaranteeSeal from "../../../public/images/GuaranteeSeal.png";
import GuaranteeStyles from "./Guarantee.module.scss";

const Guarantee = () => {
  return (
    <div className={GuaranteeStyles.guaranteeWrapper}>
      <img src={GuaranteeSeal} alt="Seal of quality" />
      <p>If you are not completely thrilled with your Clarifion - We have a <span>30 day satisfaction guarantee.</span> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
    </div>
  );
};

export default Guarantee;
