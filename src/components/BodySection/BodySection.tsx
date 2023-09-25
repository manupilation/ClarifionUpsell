import GenericMargin from "../../templates/GenericMargin";
import BodySectionStyles from "./BodySection.module.scss";
import ProductInfoSection from "../ProductInfoSection/ProductInfoSection";
import Profile from "../../elements/Profile/Profile";

const BodySection = () => {
  return (
    <GenericMargin classname={BodySectionStyles.bodySectionContainer}>
      <div className={BodySectionStyles.bodySectionWrapper}>

        <Profile classname={BodySectionStyles.profileWrapper}/>

        <ProductInfoSection classname={BodySectionStyles.productInfoWrapper}/>
      </div>
    </GenericMargin>
  );
};

export default BodySection;
