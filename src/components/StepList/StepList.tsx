import steps from "../../constants/Steps";
import Step from "../../elements/Step/Step";
import GenericMargin from "../../templates/GenericMargin";
import StepType from "../../types/StepType";
import StepListStyles from "./StepList.module.scss";

const StepList = () => {
  return (
    <GenericMargin>
      <div className={StepListStyles.stepWrapper}>
        {
          steps.map((step: StepType) => 
            <Step
              text={step.text}
              className={StepListStyles.stepComponent}
              key={step.key}
            />)
        }
      </div>
    </GenericMargin>
  );
};

export default StepList;