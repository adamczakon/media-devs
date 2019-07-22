import React from "react";
import { SectionBackground, Separator, Paragraph, H1, Button } from "../Shared";
import { CooperationWrapper } from "./style";
import showcase from "../../img/showcase3.jpg";
import { theme } from "../Utils/theme";

const Team = () => {
  return (
    <SectionBackground background={showcase}>
      <CooperationWrapper>
        <H1 color={theme.color.light}>Work with us</H1>
        <Separator color={theme.color.light} />
        <Paragraph marginBottom='4rem' color={theme.color.light} align='center'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </Paragraph>
        <Button marginX='auto'>Get Started</Button>
      </CooperationWrapper>
    </SectionBackground>
  );
};

export default Team;
