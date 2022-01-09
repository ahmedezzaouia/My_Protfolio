import React from "react";

import { Section, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi My Name is Ahmed, I'm a Web Developer specialist in shopify. I love knowing that my work makes people's
          lives better.
        </SectionText>
        <a href="#projects">
          <Button onClick={props.handleClick}>View Projects</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
