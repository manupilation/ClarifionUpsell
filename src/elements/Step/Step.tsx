import StepType from "../../types/StepType";

type StepProps = StepType & {
  className: string,
}

const Step = (props: StepProps) => {
  const { className, text } = props;

  return (
    <div className={className}>
      <h5>{text}</h5>
    </div>
  );
};

export default Step;
