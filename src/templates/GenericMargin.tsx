import { ReactNode, useContext, useEffect } from "react";
import { mobileContext } from "../context/mobileContext";

const genericMarginStyles = {padding: "0 128px"};
const genericMarginStylesMobile = {padding: "0 20px"};

type GenericMarginProps = {
  children: ReactNode,
  classname?: string,
}

const GenericMargin = (props: GenericMarginProps) => {
  const { children } = props;

  const {setIsMobile, isMobile} = useContext(mobileContext);
  
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

    if (newWidth < 750) setIsMobile(true);
    if (newWidth > 750) setIsMobile(false);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  if (isMobile) return (
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