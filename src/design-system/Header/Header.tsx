import React from "react";
import { Flex } from "../index";
import styled from "styled-components";

const HeaderContainer = styled.div`
   {
    height: 75px;
    width: 100%;
  }
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Flex justify="center" align="center" expand>
        Header
      </Flex>
    </HeaderContainer>
  );
};
