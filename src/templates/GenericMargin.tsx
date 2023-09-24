import { ReactNode } from "react";

const genericMarginStyles = {padding: "0 128px"};

type GenericMarginProps = {
  children: ReactNode,
  classname?: string,
}

const GenericMargin = (props: GenericMarginProps) => {
  const { children } = props;

  if (props.classname) return (
    <div 
      style={genericMarginStyles}
      className={props.classname}
    >
      { children }
    </div>
  );

  return (
    <div style={genericMarginStyles}>
      { children }
    </div>
  );
};

export default GenericMargin;