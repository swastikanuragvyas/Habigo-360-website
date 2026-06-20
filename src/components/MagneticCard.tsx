import React from "react";
import { useMagnetic } from "../hooks/useMagnetic";

interface MagneticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  intensity?: number;
}

export function MagneticCard({ children, intensity = 10, className = "", ...props }: MagneticCardProps) {
  const ref = useMagnetic<HTMLDivElement>(intensity);

  return (
    <div ref={ref} className={`transform-gpu ${className}`} {...props}>
      {children}
    </div>
  );
}
