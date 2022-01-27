import React, { FC, ReactNode } from "react";
import Col from "react-bootstrap/Col";
import cn from "classnames";
import styled from "styled-components/macro";

import { theme } from "../shared/theme";
import { Alignments, Positions } from "../shared/flex";
import {
  BreakpointsSpacing,
  ConvertedSpacing,
  printBreakpointRules,
  convertSpacing,
} from "../shared/responsive";

// Col size
type ColNumber = "auto" | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// Bootstrap Custom Col Props
export interface BColProps {
  position?: Positions; // TODO not sure about that
  vertical?: boolean;
  align?: Alignments;
  justify?: Alignments;
  marginTop?: BreakpointsSpacing;
  marginBottom?: BreakpointsSpacing;
  marginLeft?: BreakpointsSpacing;
  marginRight?: BreakpointsSpacing;
  paddingTop?: BreakpointsSpacing;
  paddingBottom?: BreakpointsSpacing;
  paddingLeft?: BreakpointsSpacing;
  paddingRight?: BreakpointsSpacing;
  padding?: BreakpointsSpacing;
  xs?: ColNumber;
  sm?: ColNumber;
  md?: ColNumber;
  lg?: ColNumber;
  xl?: ColNumber;
  mobileOnly?: boolean;
  desktopOnly?: boolean;
  lgPlusOnly?: boolean;
  children: ReactNode;
  alignSelf?: string;
}

// Styled component props
interface StyledColProps {
  position?: string;
  vertical?: boolean;
  align: string;
  justify: string;
  marginTop: ConvertedSpacing;
  marginBottom: ConvertedSpacing;
  marginLeft: ConvertedSpacing;
  marginRight: ConvertedSpacing;
  paddingTop: ConvertedSpacing;
  paddingBottom: ConvertedSpacing;
  paddingLeft: ConvertedSpacing;
  paddingRight: ConvertedSpacing;
  padding: ConvertedSpacing;
  alignSelf: string;
}

// Styled component
const StyledCol = styled(Col)<StyledColProps>`
  display: flex;
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};
  align-self: ${(props) => props.$alignSelf};
  position: ${(props) => props.$position};
  ${(props) =>
    props.$vertical &&
    `
    flex-direction: column;
  `}

  ${(props) => printBreakpointRules(props.$marginTop)};
  ${(props) => printBreakpointRules(props.$marginBottom)};
  ${(props) => printBreakpointRules(props.$marginLeft)};
  ${(props) => printBreakpointRules(props.$marginRight)};
  ${(props) => printBreakpointRules(props.$paddingTop)};
  ${(props) => printBreakpointRules(props.$paddingBottom)};
  ${(props) => printBreakpointRules(props.$paddingLeft)};
  ${(props) => printBreakpointRules(props.$paddingRight)};
  ${(props) => printBreakpointRules(props.$padding)};
`;

// Bootstrap Custom Col Component
export const BCol: FC<BColProps> = ({
  position,
  vertical,
  align,
  justify,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  xs,
  sm,
  md,
  lg,
  xl,
  mobileOnly,
  desktopOnly,
  lgPlusOnly,
  children,
  padding,
  alignSelf,
}) => {
  return (
    <StyledCol
      $position={position && theme.positions[position]}
      $vertical={vertical}
      $align={theme.alignments[align || "start"]}
      $justify={theme.alignments[justify || "start"]}
      $marginTop={convertSpacing("margin-top", marginTop)}
      $marginBottom={convertSpacing("margin-bottom", marginBottom)}
      $marginLeft={convertSpacing("margin-left", marginLeft)}
      $marginRight={convertSpacing("margin-right", marginRight)}
      $paddingTop={convertSpacing("padding-top", paddingTop)}
      $paddingBottom={convertSpacing("padding-bottom", paddingBottom)}
      $paddingLeft={convertSpacing("padding-left", paddingLeft)}
      $paddingRight={convertSpacing("padding-right", paddingRight)}
      $padding={convertSpacing("padding", padding)}
      $alignSelf={alignSelf || "normal"}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      className={cn({
        "d-block d-md-none": mobileOnly,
        "d-none d-md-block": desktopOnly,
        "d-none d-lg-block": lgPlusOnly,
      })}
    >
      {children}
    </StyledCol>
  );
};
