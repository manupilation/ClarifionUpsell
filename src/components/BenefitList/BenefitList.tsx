import benefits from "../../constants/Benefits";
import BenefitComponent from "../../elements/Benefit/Benefit";

const BenefitList = () => {
  return (
    <ul>
      {benefits.map(({text, key}) => <BenefitComponent text={text} key={key}/>)}
    </ul>
  );
};

export default BenefitList;
