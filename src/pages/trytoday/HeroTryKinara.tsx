
import { motion } from 'framer-motion';
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
        <div className='flex w-full flex-col justify-between lg:flex-row'>
          <div className='flex w-full flex-col justify-center lg:w-1/2'>
            <HeroOneButton
              title={
                <>
                  <span className="text-4xl lg:text-6xl">
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
            <div className="w-full lg:w-4/5">
              <TrialForm ispdf />
            </div>
          </div>
          <div className='relative mt-16 flex flex-col items-end justify-between lg:mt-0 lg:w-1/2'>
            <motion.div
            // slide up
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='flex w-full items-center justify-center'>
              <Image src='/assets/images/generated_outline.png' alt='hero' width='1024' height='600' className='z-[-1]' />
            </motion.div>
            {/* gradient div over it */}
            <div className='absolute z-0 size-full bg-gradient-to-t from-white via-transparent to-transparent'></div>
          </div>
        </div>
      </Section>
    </div>
    <div className="relative">
      <Section yPadding="pt-20 pb-32">
        <div className='flex w-full flex-col lg:flex-row'>
          <div className='flex w-full flex-col justify-between lg:w-1/2'>
          </div>
          <div className='flex w-full flex-col justify-start lg:w-1/2'>
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
