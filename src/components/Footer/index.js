import React from "react";
import { theme } from "../Utils/theme";
import { SectionGrid, SeparatorWide, Paragraph } from "../Shared";
import { Footer, FooterItem, List, ListItem, ListHeader } from "./style";

const Services = () => {
  return (
    <Footer>
      <SectionGrid columns='repeat(4, 1fr)'>
        <FooterItem>
          <List>
            <ListHeader color={theme.color.light}>Company</ListHeader>
            <ListItem>portfolio</ListItem>
            <ListItem>offers</ListItem>
            <ListItem>mission</ListItem>
            <ListItem>contact</ListItem>
            <ListItem>location</ListItem>
          </List>
        </FooterItem>
        <FooterItem>
          <List>
            <ListHeader color={theme.color.light}>About us</ListHeader>
            <ListItem>about us</ListItem>
            <ListItem>our services</ListItem>
            <ListItem>careers</ListItem>
            <ListItem>core values</ListItem>
            <ListItem>FAQ</ListItem>
          </List>
        </FooterItem>
        <FooterItem>
          <List>
            <ListHeader color={theme.color.light}>Services</ListHeader>
            <ListItem>pricacy policy</ListItem>
            <ListItem>environmental</ListItem>
            <ListItem>get in touch</ListItem>
            <ListItem>confidentality</ListItem>
            <ListItem>terms of use</ListItem>
          </List>
        </FooterItem>
        <FooterItem>
          <List>
            <ListHeader color={theme.color.light}>Social</ListHeader>
            <ListItem>facebook</ListItem>
            <ListItem>twitter</ListItem>
            <ListItem>google+</ListItem>
            <ListItem>dribble</ListItem>
            <ListItem>linkedin</ListItem>
          </List>
        </FooterItem>
      </SectionGrid>
      <SeparatorWide color={theme.color.secondary} />
      <Paragraph color={theme.color.secondary}>Media Devs 2019</Paragraph>
    </Footer>
  );
};

export default Services;
