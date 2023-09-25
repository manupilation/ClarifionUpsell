import BenefitType from "../../types/BenefitType";
import Check from "../../../public/svgs/CheckBenefit.svg";

type BenefitProps = BenefitType;

const Benefit = (props: BenefitProps) => {
  const { text } = props;

  return (
    <div><img src={Check} alt="" />{text}</div>
  );
};

export default Benefit;
