import React from "react";
import { theme } from "../Utils/theme";
import { Section, SectionGrid, Separator, Paragraph, H2, H1 } from "../Shared";
import { ClientCard, ClientImage } from "./style.js";
import client1 from "../../img/client1.jpg";
import client2 from "../../img/client2.jpg";

const Services = () => {
  return (
    <Section>
      <H1>What our clients say?</H1>
      <Separator color={theme.color.primary} />
      <SectionGrid columns='repeat(2, 1fr)'>
        <ClientCard>
          <Paragraph color={theme.color.secondary} align='center'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </Paragraph>
          <ClientImage src={client1} />
          <H2 marginBottom='0.5rem'>Martin Barnes</H2>
          <Paragraph color={theme.color.secondary} align='center'>
            Designer
          </Paragraph>
        </ClientCard>
        <ClientCard>
          <Paragraph color={theme.color.secondary} align='center'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat."
          </Paragraph>
          <ClientImage src={client2} />
          <H2 marginBottom='0.5rem'>Lana Reynolds</H2>
          <Paragraph color={theme.color.secondary} align='center'>
            Developer
          </Paragraph>
        </ClientCard>
      </SectionGrid>
    </Section>
  );
};

export default Services;
