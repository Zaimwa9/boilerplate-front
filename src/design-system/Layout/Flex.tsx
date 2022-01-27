import React, { FC, ReactNode } from "react";
import { Alignments, Directions, Positions } from "../shared/flex";
import styled from "styled-components/macro";
import { theme } from "../shared/theme";
import {
  BreakpointsSpacing,
  ConvertedSpacing,
  printBreakpointRules,
  convertSpacing,
} from "../shared/responsive";
import { lg, md, xl } from "../shared/mediav2";

// Flex props
interface FlexProps {
  direction?: Directions;
  align?: Alignments;
  justify?: Alignments;
  flex?: number;
  wrap?: string;
  expand?: boolean;
  position?: Positions;
  desktopOnly?: boolean;
  mobileOnly?: boolean;
  lgOnly?: boolean;
  children: ReactNode;
  paddingBottom?: BreakpointsSpacing;
  paddingTop?: BreakpointsSpacing;
  paddingLeft?: BreakpointsSpacing;
  paddingRight?: BreakpointsSpacing;
  marginBottom?: BreakpointsSpacing;
  marginTop?: BreakpointsSpacing;
  marginLeft?: BreakpointsSpacing;
  marginRight?: BreakpointsSpacing;
}

// Styled props
interface StyledFlexProps {
  direction: string;
  align: string;
  justify: string;
  position: string;
  flex?: number;
  wrap?: string;
  expand?: boolean;
  desktopOnly?: boolean;
  mobileOnly?: boolean;
  lgOnly?: boolean;
  paddingBottom: ConvertedSpacing;
  paddingTop: ConvertedSpacing;
  paddingLeft: ConvertedSpacing;
  paddingRight: ConvertedSpacing;
  marginBottom: ConvertedSpacing;
  marginTop: ConvertedSpacing;
  marginLeft: ConvertedSpacing;
  marginRight: ConvertedSpacing;
}

// Styled component
const StyledFlex = styled.div<StyledFlexProps>`
  display: ${(props) => (props.desktopOnly || props.lgOnly ? "none" : "flex")};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-wrap: ${(props) => props.wrap};
  position: ${(props) => props.position};
  ${(props) => typeof props.flex === "number" && `flex: ${props.flex}`}
  ${(props) => printBreakpointRules(props.paddingTop)};
  ${(props) => printBreakpointRules(props.paddingBottom)};
  ${(props) => printBreakpointRules(props.paddingLeft)};
  ${(props) => printBreakpointRules(props.paddingRight)};
  ${(props) => printBreakpointRules(props.marginTop)};
  ${(props) => printBreakpointRules(props.marginBottom)};
  ${(props) => printBreakpointRules(props.marginLeft)};
  ${(props) => printBreakpointRules(props.marginRight)};
  ${(props) =>
    props.expand &&
    `
    width: 100%;
    height: 100%;
  `}
  ${(props) =>
    md(`
      display: ${props.mobileOnly || props.lgOnly ? "none" : "flex"};
    `)}
  ${(props) =>
    lg(`
      display: ${props.mobileOnly ? "none" : "flex"};
    `)}
    ${(props) =>
    xl(`
      flex-direction: ${props.direction};
    `)}
`;

// Flex component
export const Flex: FC<FlexProps> = ({
  direction,
  justify,
  align,
  flex,
  wrap,
  expand,
  position,
  desktopOnly,
  mobileOnly,
  lgOnly,
  children,
  paddingBottom,
  paddingTop,
  paddingLeft,
  paddingRight,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
}) => {
  return (
    <StyledFlex
      direction={direction || "row"}
      align={theme.alignments[align || "start"]}
      justify={theme.alignments[justify || "start"]}
      flex={flex}
      wrap={wrap}
      expand={expand}
      position={theme.positions[position || "relative"]}
      desktopOnly={desktopOnly}
      mobileOnly={mobileOnly}
      lgOnly={lgOnly}
      paddingTop={convertSpacing("padding-top", paddingTop)}
      paddingBottom={convertSpacing("padding-bottom", paddingBottom)}
      paddingRight={convertSpacing("padding-right", paddingRight)}
      paddingLeft={convertSpacing("padding-left", paddingLeft)}
      marginTop={convertSpacing("margin-top", marginTop)}
      marginBottom={convertSpacing("margin-bottom", marginBottom)}
      marginRight={convertSpacing("margin-right", marginRight)}
      marginLeft={convertSpacing("margin-left", marginLeft)}
    >
      {children}
    </StyledFlex>
  );
};
