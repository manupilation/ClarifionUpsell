import DiscountSection from "../../elements/DiscountSection/DiscountSection";
import Guarantee from "../../elements/Guarantee/Guarantee";
import Product from "../../elements/Product/Product";
import BenefitList from "../BenefitList/BenefitList";

const ProductInfoSection = (props: {classname: string}) => {
  const {classname} = props;

  return (
    <section className={classname}>
      <h3>
        <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for only <span>$14 each</span> ($84.00 total!)
      </h3>

      <Product />

      <BenefitList />

      <DiscountSection />

      <Guarantee />
    </section>
  );
};

export default ProductInfoSection;
