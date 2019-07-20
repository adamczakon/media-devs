import React, { useState, useEffect } from "react";
import { NavContainer, NavHeader } from "./NavContainer";
import { NavList, NavItem } from "./NavLinks";
import { theme } from "../Utils/theme";

const Navbar = () => {
  const [scroll, setScroll] = useState();

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <NavContainer
      height={scroll >= 200 ? "60px" : "70px"}
      navBackground={scroll >= 200 ? "#fff" : "transparent"}
      borderColor={scroll >= 200 ? theme.color.lightGrey : "transparent"}
    >
      <NavHeader
        textColor={scroll >= 200 ? theme.text.secondary : theme.text.light}
      >
        Energy Saves
      </NavHeader>
      <NavList
        textColor={scroll >= 200 ? theme.text.secondary : theme.text.light}
      >
        <NavItem>Home</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
