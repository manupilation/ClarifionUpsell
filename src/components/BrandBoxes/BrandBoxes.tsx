import GenericMargin from "../../templates/GenericMargin";
import BrandStyles from "./BrandBoxes.module.scss";
import ClarifionLogo from "../../../public/images/600a41c73b670a97ae1d4f47_Clarifion_Logo 1.png";
import McAfeeLogo from "../../../public/svgs/McAfee.svg";
import Norton from "../../../public/svgs/Norton.svg";

const BrandBoxes = () => {
  return (
    <GenericMargin classname={BrandStyles.brandContainer}>
      <img src={ClarifionLogo} alt="Clarifion Logo" />

      <div className={BrandStyles.secures}>
        <img src={McAfeeLogo} alt="McAfee Logo" />
        <img src={Norton} alt="Norton Logo" />
      </div>
    </GenericMargin>
  );
};

export default BrandBoxes;
