import ClarifionP from "../../../public/images/Clarifion.png";
import ProductStyles from "./Product.module.scss";
import FiveStars from "../../../public/svgs/RoundStars.svg";
import Dot from "../../../public/svgs/Dot.svg";

const Product = () => {
  return (
    <div className={ProductStyles.productWrapper}>
      <img src={ClarifionP} alt="" />

      <div className={ProductStyles.productDetails}>
        <div>
          <h4>Clarifion Air Ionizer</h4>

          <div className={ProductStyles.productPrices}>
            <p>$180</p>
            <span>$84</span>
          </div>
        </div>

        <img src={FiveStars} alt="" className={ProductStyles.productRate}/>

        <p className={ProductStyles.stock}><img src={Dot} alt="" />12 left in Stock</p>

        <p className={ProductStyles.explanation}>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
      </div>
    </div>
  );
};

export default Product;
