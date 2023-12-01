'use client'
import { SectionName } from "@/lib/types";
import { useContext } from "react"

import { createContext,  useState } from "react";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);
function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        timeOfLastClick,
        setActiveSection,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext(){
  const context =useContext(ActiveSectionContext)
   if(context===null){
    throw new Error("useActiveSectionContext must be sued within an AcctiveSectionContextProvider")
   }
   return context
}



export default ActiveSectionContextProvider;
