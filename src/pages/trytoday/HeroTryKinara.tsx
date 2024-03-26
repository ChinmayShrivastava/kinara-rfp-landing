

import { HeroOneButton } from '@/hero/HeroOneButton';

import { Background } from '../../background/Background';
import { TrialForm } from '../../form/trialform';
import { Section } from '../../layout/Section';

const Hero = () => (
  // bg should be a gradient from dark to light top to bottom
  <Background color="">
    <div className="relative">
      <Section yPadding="pt-20 pb-32">
        <div className='flex w-full flex-col justify-between'>
          <HeroOneButton
            title={
              <>
                {'Start using Kinara today!'}
              </>
            }
            description={
              <>
                {'Generate an outline for your RFP and start drafting your application today!'}
              </>
            }
            button={
              <></>
            }
          />
          <div className="">
            <TrialForm ispdf />
          </div>
        </div>
      </Section>
    </div>
  </Background>
);

export { Hero };
