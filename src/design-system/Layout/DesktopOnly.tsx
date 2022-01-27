import React, { FC, ReactNode } from 'react';

export interface DesktopOnlyProps {
  children: ReactNode;
  expand?: boolean;
  absolute?: boolean;
}

/**
 * Wrapper component to display content on desktop only
 */
export const DesktopOnly: FC<DesktopOnlyProps> = ({
  children,
  expand,
  absolute,
}) => {
  const sizing: string = expand ? 'w-100 h-100' : '';
  return (
    <div
      className={`d-none d-md-block ${sizing}`}
      style={{ position: absolute ? 'absolute' : 'initial' }}
    >
      {children}
    </div>
  );
};
