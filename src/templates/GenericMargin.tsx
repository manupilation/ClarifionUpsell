import { ReactNode } from "react";

const genericMarginStyles = {margin: "0 128px"};

type GenericMarginProps = {
  children: ReactNode,
}

const GenericMargin = (props: GenericMarginProps) => {
  const { children } = props;

  return (
    <div style={genericMarginStyles}>
      { children }
    </div>
  );
};

export default GenericMargin;