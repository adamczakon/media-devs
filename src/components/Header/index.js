import React from "react";
import { HeaderWrapper, HeaderTitle, TitleWrapper, HeaderInfo } from "./style";
import { Separator, ButtonPrimary } from "../Shared";
import { theme } from "../Utils/theme";

const Header = () => {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <HeaderTitle>Media Devs</HeaderTitle>
        <HeaderInfo color={theme.color.light} marginY='2rem'>
          We help you start your business.
        </HeaderInfo>
        <Separator color={theme.color.light} />
      </TitleWrapper>
      <ButtonPrimary>Get Started</ButtonPrimary>
    </HeaderWrapper>
  );
};

export default Header;
