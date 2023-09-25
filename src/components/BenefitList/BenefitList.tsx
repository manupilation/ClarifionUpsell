import benefits from "../../constants/Benefits";
import BenefitComponent from "../../elements/Benefit/Benefit";
import BenefitListStyles from "./BenefitList.module.scss";

const BenefitList = () => {
  return (
    <ul className={BenefitListStyles.benefitsWrapper}>
      {benefits.map(({text, key}) => <BenefitComponent text={text} key={key}/>)}
    </ul>
  );
};

export default BenefitList;
