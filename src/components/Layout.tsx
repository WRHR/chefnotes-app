import React from "react";
import { NavBar } from "./NavBar";
import { Wrapper } from "./Wrapper";

interface LayoutProps {
  background:'primary'|'secondary'
}

export const Layout: React.FC<LayoutProps> = ({ children,  background }) => {
  return (
    <>
      <NavBar />
      <Wrapper background={background}>{children}</Wrapper>
    </>
  );
};
