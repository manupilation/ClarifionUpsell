import { useContext } from "react";
import steps from "../../constants/Steps";
import Step from "../../elements/Step/Step";
import GenericMargin from "../../templates/GenericMargin";
import StepType from "../../types/StepType";
import StepListStyles from "./StepList.module.scss";
import { mobileContext } from "../../context/mobileContext";
import mobileSteps from "../../constants/MobileSteps";

const StepList = () => {
  const {isMobile} = useContext(mobileContext);

  if (isMobile) {
    return (
      <GenericMargin>
        <div className={StepListStyles.stepWrapper}>
          {
            mobileSteps.map((step: StepType) => 
              <Step
                text={step.text}
                className={StepListStyles.stepComponent}
                key={step.key}
              />)
          }
        </div>
      </GenericMargin>
    );
  }

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