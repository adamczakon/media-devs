import React from "react";
import { theme } from "../Utils/theme";
import {
  Section,
  SectionGrid,
  GridItem,
  Separator,
  Paragraph,
  H3,
  H2,
  H1
} from "../Shared";

const Services = () => {
  return (
    <Section>
      <H1>Get your business started!</H1>
      <Separator color={theme.color.primary} />
      <Paragraph color={theme.color.secondary} align='center'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </Paragraph>
      <SectionGrid columns='repeat(3, 1fr)'>
        <GridItem>
          <H3 color={theme.color.primary}>
            <i className='fas fa-3x fa-chart-line' />
          </H3>
          <H2 margin='1rem'>Financial Planning</H2>
          <Paragraph color={theme.color.secondary} align='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </GridItem>
        <GridItem>
          <H3 color={theme.color.primary}>
            <i className='far fa-3x fa-address-card' />
          </H3>
          <H2 margin='1rem'>Consulting</H2>
          <Paragraph color={theme.color.secondary} align='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </GridItem>
        <GridItem>
          <H3 color={theme.color.primary}>
            <i className='fas fa-3x fa-chart-pie' />{" "}
          </H3>
          <H2 margin='1rem'>Business Support</H2>
          <Paragraph color={theme.color.secondary} align='center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Paragraph>
        </GridItem>
      </SectionGrid>
    </Section>
  );
};

export default Services;
