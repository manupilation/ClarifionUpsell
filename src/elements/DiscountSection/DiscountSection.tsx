import DiscountStyles from "./Discount.module.scss";
import Percentage from "../../../public/svgs/Percent.svg";
import Arrow from "../../../public/svgs/Arrow.svg";
import Lock from "../../../public/svgs/Lock.svg";
import amex from "../../../public/svg.flags/amex.svg";
import apple from "../../../public/svg.flags/apple-pay.svg";
import gpay from "../../../public/svg.flags/gpay.svg";
import mastercard from "../../../public/svg.flags/mastercard.svg";
import paypal from "../../../public/svg.flags/paypal.svg";
import shoppay from "../../../public/svg.flags/shop-pay.svg";
import visa from "../../../public/svg.flags/visa.svg";

const DiscountSection = () => {
  return (
    <div className={DiscountStyles.discountWrapper}>
      <p>
        <img src={Percentage} alt="" />
        Save 53% and get 6 extra Clarifision for only $14 Each.
      </p>

      <button type="button" className={DiscountStyles.discountBtn}>
        Yes - Claim my discount<img src={Arrow} alt="" /></button>

      <div className={DiscountStyles.flagsSection}>
        <p>Free shipping</p>
        <p><img src={Lock} alt=""/>Secure 256-bit SSL encryption.</p>

        <div className={DiscountStyles.flags}>
          <img src={visa} alt="" />
          <img src={shoppay} alt="" />
          <img src={paypal} alt="" />
          <img src={mastercard} alt="" />
          <img src={gpay} alt="" />
          <img src={apple} alt="" />
          <img src={amex} alt="" />
        </div>
      </div>

      <button type="button" className={DiscountStyles.negativeButton}>No thanks, I don`t want this.</button>
    </div>
  );
};

export default DiscountSection;
