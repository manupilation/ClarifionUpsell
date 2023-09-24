import GenericMargin from "../../templates/GenericMargin";
import HeaderStyles from "./Header.module.scss";

const Header = () => {
  return (
    <GenericMargin>
      <div className={HeaderStyles.headerWrapper}>
        <p>30-DAY SATISFACTION GUARANTEE</p>
        <p>Free delivery on orders over $40.00</p>
        <p>50.000+ HAPPY CUSTOMERS</p>
        <p>100% Money Back Guarantee</p>
      </div>
    </GenericMargin>
  );
};

export default Header;