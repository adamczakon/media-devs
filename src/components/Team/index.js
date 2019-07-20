import React from "react";
import {
  SectionBackground,
  SectionGrid,
  GridItem,
  Separator,
  Paragraph,
  H3,
  H1
} from "../Shared";
import { Card, CardImage, CardDescription, ProfileImage } from "./style.js";
import { theme } from "../Utils/theme";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import showcase from "../../img/showcase2.jpg";

const Team = () => {
  return (
    <SectionBackground background={showcase}>
      <H1 color={theme.color.light}>Our Team</H1>
      <Separator color={theme.color.primary} />
      <Paragraph color={theme.color.light} align='center'>
        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia
        deserunt mollit.
      </Paragraph>
      <SectionGrid>
        <Card>
          <CardImage>
            <ProfileImage src={profile1} />
          </CardImage>
          <CardDescription>
            <H3 marginBottom='0.2rem'>John Doe</H3>
            <Paragraph color={theme.color.secondary} margin='0'>
              Front-end Developer
            </Paragraph>
          </CardDescription>
        </Card>
        <Card>
          <CardImage>
            <ProfileImage src={profile2} />
          </CardImage>
          <CardDescription>
            <H3 marginBottom='0.2rem'>John Doe</H3>
            <Paragraph color={theme.color.secondary} margin='0'>
              Front-end Developer
            </Paragraph>
          </CardDescription>
        </Card>
        <Card>
          <CardImage>
            <ProfileImage src={profile3} />
          </CardImage>
          <CardDescription>
            <H3 marginBottom='0.2rem'>John Doe</H3>
            <Paragraph color={theme.color.secondary} margin='0'>
              Front-end Developer
            </Paragraph>
          </CardDescription>
        </Card>
      </SectionGrid>
    </SectionBackground>
  );
};

export default Team;
