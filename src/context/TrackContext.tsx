import { createContext, ReactNode, useContext, useState } from "react";
import {
  AuthContextType,
  Track,
  TrackContextFormat,
  TrackContextType,
  UserAuth,
} from "../types";

export const TrackContext = createContext<TrackContextType | null>(null);

export default function TrackProvider({ children }: { children: ReactNode }) {
  const [chosenTrack, setChosenTrack] = useState<TrackContextFormat | null>(
    null
  );

  // Create value object
  const value: TrackContextType = {
    chosenTrack,
    setChosenTrack,
    // Add other properties and methods
  };

  return (
    <TrackContext.Provider value={value}>{children}</TrackContext.Provider>
  );
}

export const useTrack = () => {
  const context = useContext(TrackContext);

  if (context === undefined) {
    throw new Error("useTrack must be used within an TrackProvider");
  }

  return context;
};
