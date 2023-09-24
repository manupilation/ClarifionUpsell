import BenefitType from "../../types/BenefitType";

type BenefitProps = BenefitType;

const Benefit = (props: BenefitProps) => {
  const { text } = props;

  return (
    <div>{text}</div>
  );
};

export default Benefit;
