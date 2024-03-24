import { Background } from '../background/Background';
import { CenteredFooter } from '../footer/CenteredFooter';
import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Footer = () => (
  // background should be a gradient from transparent to white
  <Background color="bg-gradient-to-b from-transparent to-[#F6F5F5]">
    <Section>
      <CenteredFooter logo={<Logo />}>
        <></>
        <p style={{ color: 'darkgrey' }}>Made in America by engineers from Brown University and Microsoft </p>
      </CenteredFooter>
    </Section>
  </Background>
);

export { Footer };
