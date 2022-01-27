import React, { FC, ReactNode } from "react";
import { Breakpoints } from "../shared/breakpointsv2";

export interface MobileOnlyProps {
  children: ReactNode;
  expand?: boolean;
  showUntil?: Breakpoints;
}

/**
 * Wrapper component to display content on mobile only
 * Content will be shown at MD breakpoint, or ${showUntil} breakpoint
 * if specified
 */
export const MobileOnly: FC<MobileOnlyProps> = ({
  children,
  expand,
  showUntil,
}) => {
  const hideAt: string = showUntil ? `d-${showUntil}-none` : "d-md-none";
  const sizing: string = expand ? "w-100 h-100" : "";
  return <div className={`d-block ${hideAt} ${sizing}`}>{children}</div>;
};
