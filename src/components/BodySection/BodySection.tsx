import GenericMargin from "../../templates/GenericMargin";
import BodySectionStyles from "./BodySection.module.scss";
import ClarifionProduct from "../../../public/images/ClarifionProduct.png";
import ProductInfoSection from "../ProductInfoSection/ProductInfoSection";
import Profile from "../../elements/Profile/Profile";

const BodySection = () => {
  return (
    <GenericMargin classname={BodySectionStyles.bodySectionContainer}>
      <div className={BodySectionStyles.bodySectionWrapper}>
        <img src={ClarifionProduct} alt="" />

        <Profile classname={BodySectionStyles.profileWrapper}/>

        <ProductInfoSection classname={BodySectionStyles.productInfoWrapper}/>
      </div>
    </GenericMargin>
  );
};

export default BodySection;
