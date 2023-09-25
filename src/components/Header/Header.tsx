import GenericMargin from "../../templates/GenericMargin";
import HeaderStyles from "./Header.module.scss";
import Check from "../../../public/svgs/CheckHeader.svg";
import Truck from "../../../public/svgs/Delivery.svg";
import Heart from "../../../public/svgs/Heart.svg";
import Guarantee from "../../../public/svgs/GuaranteeHeader.svg";
import { useContext } from "react";
import { mobileContext } from "../../context/mobileContext";

const Header = () => {
  const {isMobile} = useContext(mobileContext);


  if (isMobile) {
    return (
      <GenericMargin classname={HeaderStyles.headerContainer}>
        <div className={HeaderStyles.headerWrapper}>
          <span>{"<"}</span>
          <p>
            <img src={Check} alt="" />
            30-DAY SATISFACTION GUARANTEE
          </p>
          <span>{">"}</span>
        </div>
      </GenericMargin>
    );
  }
  return (
    <GenericMargin classname={HeaderStyles.headerContainer}>
      <div className={HeaderStyles.headerWrapper}>
        <p>
          <img src={Check} alt="" />
          30-DAY SATISFACTION GUARANTEE
        </p>
        <p>
          <img src={Truck} alt="" />
          Free delivery on orders over $40.00
        </p>
        <p>
          <img src={Heart} alt="" />
          50.000+ HAPPY CUSTOMERS
        </p>
        <p>
          <img src={Guarantee} alt="" />
          100% Money Back Guarantee
        </p>
      </div>
    </GenericMargin>
  );
};

export default Header;