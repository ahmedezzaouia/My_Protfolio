import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
} from "./TimeLineStyles";
import { Section, SectionDivider, SectionText, SectionTitle } from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";

const Timeline = () => {
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        Hi There, I'm a Web Developer who is quick to learn new things, Always interested in keeping up with the web and
        learning new technologies. I love knowing that my work makes people's lives better. I specialized in Shopify
        theme development, building Themes with VueJs and working with custom codes and template modifications, building
        Theme Customizer via Schema blocks, and sections programming with Shopify Liquid Templating as well as
        integrating third-party applications and plug-ins and focusing more on developing engaging user experience (UX)
        and gorgeous user interfaces (UI).
      </SectionText>
    </Section>
  );
};

export default Timeline;
