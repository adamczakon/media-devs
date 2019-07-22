import React, { useState, useEffect } from "react";
import {
  NavContainer,
  NavList,
  NavItem,
  MenuToggle,
  ToggleLine,
  SideMenu,
  MenuBackdrop,
  SideList,
  SideItem
} from "./style";
import { H2 } from "../Shared";
import { theme } from "../Utils/theme";

const Navbar = () => {
  const [scroll, setScroll] = useState();
  const [sideMenu, setSideMenu] = useState(false);

  const handleToggle = () => {
    setSideMenu(!sideMenu);
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setScroll(window.scrollY);
  }, []);

  return (
    <NavContainer
      height={scroll >= 200 ? "60px" : "70px"}
      navBackground={scroll >= 200 ? "#fff" : "transparent"}
      borderColor={scroll >= 200 ? theme.color.lightGrey : "transparent"}
    >
      <H2 color={scroll >= 200 ? theme.text.secondary : theme.text.light}>
        Media Devs
      </H2>
      <NavList
        textColor={scroll >= 200 ? theme.text.secondary : theme.text.light}
      >
        <NavItem>Home</NavItem>
        <NavItem>Blog</NavItem>
        <NavItem>Contact</NavItem>
      </NavList>
      <MenuToggle
        onClick={handleToggle}
        display={sideMenu ? "block" : "none"}
        color={scroll >= 200 ? theme.text.secondary : theme.text.light}
      >
        <ToggleLine
          color={scroll >= 200 ? theme.text.secondary : theme.text.light}
        />
        <ToggleLine
          color={scroll >= 200 ? theme.text.secondary : theme.text.light}
        />
        <ToggleLine
          color={scroll >= 200 ? theme.text.secondary : theme.text.light}
        />
      </MenuToggle>
      <MenuBackdrop
        onClick={handleToggle}
        transform={sideMenu ? "translateX(0)" : "translateX(100%)"}
      />
      <SideMenu transform={sideMenu ? "translateX(0)" : "translateX(100%)"}>
        <SideList textColor={theme.text.secondary}>
          <SideItem>Home</SideItem>
          <SideItem>Blog</SideItem>
          <SideItem>Contact</SideItem>
        </SideList>
      </SideMenu>
    </NavContainer>
  );
};

export default Navbar;
