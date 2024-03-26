
import Image from 'next/image';

import { HeroOneButton } from '@/hero/HeroOneButton';

import { Background } from '../../background/Background';
import { TrialForm } from '../../form/trialform';
import { Section } from '../../layout/Section';

const Hero = () => (
  // bg should be a gradient from dark to light top to bottom
  <Background color="">
    <div className="relative">
      <Section yPadding="pt-20 pb-32">
        <div className='flex w-full flex-row justify-between'>
          <div className='flex w-1/2 flex-col justify-start'>
            <HeroOneButton
              title={
                <>
                  <span className="text-6xl">
                  {'Comprehensive Outlines generated in minutes.'}
                  </span>
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
            <div className="w-4/5">
              <TrialForm ispdf />
            </div>
          </div>
          <div className='relative flex w-1/2 flex-col justify-between'>
            <Image src='/assets/images/generated_outline.png' alt='hero' width='500' height='500' className='z-[-1]' />
            {/* gradient div over it */}
            <div className='absolute z-0 size-full bg-gradient-to-t from-white via-transparent to-transparent'></div>
          </div>
        </div>
      </Section>
    </div>
    <div className="relative">
      <Section yPadding="pt-20 pb-32">
        <div className='flex w-full flex-row'>
          <div className='flex w-1/2 flex-col justify-between'>
          </div>
          <div className='flex w-1/2 flex-col justify-start'>
            <HeroOneButton
              title={
                <>
                  {'Hand picked bids, delivered to your Inbox!'}
                </>
              }
              description={
                <>
                  {'Tell us a bit about what your company does and what kind of contracts you’re looking for. We’ll email you personalized bids every day. '}
                </>
              }
              button={
                <></>
              }
            />
            <div className="">
              <TrialForm istags />
            </div>
          </div>
        </div>
      </Section>
    </div>
  </Background>
);

export default Hero;
