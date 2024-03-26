import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  // bg should be a gradient from dark to light top to bottom
  <Background color="">
    <div className="relative">
      <Section yPadding="pt-20 pb-32">
        <HeroOneButton
          title={
            <>
              {'Respond to RFPs in hours,\n'}
              <span className="font-bold">not weeks.</span>
            </>
          }
          description="Designed for small businesses who don't have time to visit bidding websites multiple times a day and read through 100+ pages of solicitation documents."
          button={
            <Link href="https://calendly.com/rahuldey700/demo-nucleus">
              <Button xl>Request a Demo</Button>
            </Link>
          }
        />
      </Section>
    </div>
  </Background>
);

export { Hero };
