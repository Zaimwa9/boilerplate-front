import React, { FC, ReactNode } from "react";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { theme } from "../shared/theme";
import { Alignments, Positions } from "../shared/flex";
import {
  BreakpointsSpacing,
  ConvertedSpacing,
  printBreakpointRules,
  convertSpacing,
  ConvertedAlignments,
  BreakpointsAlignments,
  getAlignments,
} from "../shared/responsive";
import { lg } from "../shared/mediav2";
// Props
export interface BRowProps {
  position?: Positions;
  align?: Alignments;
  justify?: Alignments;
  wrap?: string;
  marginBottom?: BreakpointsSpacing;
  marginTop?: BreakpointsSpacing;
  marginRight?: BreakpointsSpacing;
  marginLeft?: BreakpointsSpacing;
  alignBreakpoints?: BreakpointsAlignments;
  overflowX?: string;
  fullHeight?: boolean;
  fullWidth?: boolean;
  children: ReactNode;
}

// Styled row props
interface StyledRowProps {
  position?: string;
  alignment: string;
  justification: string;
  wrap?: string;
  marginBottom: ConvertedSpacing;
  marginTop: ConvertedSpacing;
  marginLeft: ConvertedSpacing;
  marginRight: ConvertedSpacing;
  overflowX?: string;
  alignBreakpoints?: ConvertedAlignments;
  fullHeight?: boolean;
  fullWidth?: boolean;
}

// Styled row
const StyledRow = styled(Row)<StyledRowProps>`
  position: ${(props) => props.$position};
  justify-content: ${(props) => props.$justification};
  align-items: ${(props) => props.$alignment};
  flex-wrap: ${(props) => props.$wrap};
  overflow-x: ${(props) => props.$overflowX};
  ${(props) => props.$fullHeight && `height: 100%`};

  ${(props) => printBreakpointRules(props.$marginTop)};
  ${(props) => printBreakpointRules(props.$marginBottom)};
  ${(props) => printBreakpointRules(props.$marginLeft)};
  ${(props) => printBreakpointRules(props.$marginRight)};
  ${(props) => printBreakpointRules(props.$alignBreakpoints)};

  ${(props) =>
    lg(`
      ${props.$fullWidth && `width: 100%`};
    `)}
`;

// Row
export const BRow: FC<BRowProps> = ({
  position,
  align,
  justify,
  alignBreakpoints,
  wrap,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  overflowX = "none",
  fullHeight = false,
  fullWidth,
  children,
}) => {
  return (
    <StyledRow
      $alignBreakpoints={getAlignments(alignBreakpoints)}
      $position={position && theme.positions[position]}
      $justification={theme.alignments[justify || "start"]}
      $alignment={theme.alignments[align || "start"]}
      $wrap={wrap}
      $marginTop={convertSpacing("margin-top", marginTop)}
      $marginBottom={convertSpacing("margin-bottom", marginBottom)}
      $marginLeft={convertSpacing("margin-left", marginLeft)}
      $marginRight={convertSpacing("margin-right", marginRight)}
      $overflowX={overflowX}
      $fullHeight={fullHeight}
      $fullWidth={fullWidth}
    >
      {children}
    </StyledRow>
  );
};
