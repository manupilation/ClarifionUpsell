import { ReactNode, useContext, useEffect, useState } from "react";
import { mobileContext } from "../context/mobileContext";

const genericMarginStyles = {padding: "0 128px"};
const genericMarginStylesMinor = {padding: "0 64px"};
const genericMarginStylesMobile = {padding: "0 20px"};

type GenericMarginProps = {
  children: ReactNode,
  classname?: string,
}

const GenericMargin = (props: GenericMarginProps) => {
  const { children } = props;
  const [width, setWidth] = useState(0);

  const {setIsMobile} = useContext(mobileContext);
  
  if (props.classname) return (
    <div 
      style={genericMarginStyles}
      className={props.classname}
    >
      { children }
    </div>
  );

  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);

    if (newWidth < 750) setIsMobile(true);
    if (newWidth > 750) setIsMobile(false);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  if (width < 1200) return (
    <div style={genericMarginStylesMinor}>
      { children }
    </div>
  );

  if (width < 700) return (
    <div style={genericMarginStylesMobile}>
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