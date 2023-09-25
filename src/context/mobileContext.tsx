import { createContext, useState } from "react";

type MobileContextAPI = {
  isMobile: boolean,
  setIsMobile: React.Dispatch<React.SetStateAction<boolean>>,
}

type MobileContextProps = {
  children: React.ReactNode
}

export const mobileContext = createContext<MobileContextAPI>(null!);

const MobileContext = (props: MobileContextProps) => {
  const [isMobile, setIsMobile] = useState(false);

  const value = {
    isMobile,
    setIsMobile,
  };

  return (
    <mobileContext.Provider value={value}>
      {props.children}
    </mobileContext.Provider>
  );
};

export default MobileContext;
