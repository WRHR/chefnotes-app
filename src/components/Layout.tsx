import React from "react";
import { NavBar } from "./NavBar";
import { Wrapper } from "./Wrapper";

interface LayoutProps {
  background:string
}

export const Layout: React.FC<LayoutProps> = ({ children,  background }) => {
  return (
    <>
      <NavBar />
      <Wrapper background={background}>{children}</Wrapper>
    </>
  );
};
