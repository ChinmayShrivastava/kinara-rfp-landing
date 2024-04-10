
import { Background } from '../background/Background';
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
              {'Apply to RFPs in hours\n'}
              <span className="font-bold">not weeks.</span>
            </>
          }
          description="Kinara uses your past applications to search best matches and generates drafts in minutes."
          button={
            <></>
            // <Link href="https://calendly.com/rahuldey700/demo-nucleus">
            //   <Button xl>Request a Demo</Button>
            // </Link>
          }
        />
        <div style={{ position: 'relative', paddingBottom: 'calc(59.863945578231295% + 41px)', height: 0, width: '100%' }}
        className='drop-shadow-2xl'
        >
          <iframe 
            src="https://demo.arcade.software/m8ORaocZRkM7oSfthJ8o?embed&show_copy_link=true"
            title="React App" 
            // frameBorder="0" 
            loading="lazy" 
            // webkitallowfullscreen
            // mozallowfullscreen 
            allowFullScreen 
            allow="clipboard-write" 
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', colorScheme: 'light' }}
          >
          </iframe>
        </div>
      </Section>
    </div>
  </Background>
);

export { Hero };
