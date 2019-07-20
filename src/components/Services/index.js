import React from "react";
import {
  Section,
  SectionGrid,
  GridItem,
  Separator,
  Paragraph,
  H3,
  H4,
  H1
} from "../Shared";

const Services = () => {
  return (
    <Section>
      <H4>We help You grow your business</H4>
      <Separator />
      <Paragraph secondary align='center'>
        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia
        deserunt mollit.
      </Paragraph>
      <SectionGrid>
        <GridItem>
          <H3 primary>
            <i className='fas fa-3x fa-chart-line' />
          </H3>
          <H3>Financials</H3>
          <Paragraph secondary align='center'>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia deserunt mollit.
          </Paragraph>
        </GridItem>
        <GridItem>
          <H3 primary>
            <i className='far fa-3x fa-address-card' />
          </H3>
          <H3>Financials</H3>
          <Paragraph secondary align='center'>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia deserunt mollit.
          </Paragraph>
        </GridItem>
        <GridItem>
          <H3 primary>
            <i className='fas fa-3x fa-chart-pie' />{" "}
          </H3>
          <H3>Financials</H3>
          <Paragraph secondary align='center'>
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia deserunt mollit.
          </Paragraph>
        </GridItem>
      </SectionGrid>
    </Section>
  );
};

export default Services;
