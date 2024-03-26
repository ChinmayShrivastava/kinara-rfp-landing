import '../styles/global.css';

import type { AppProps } from 'next/app';
import Link from 'next/link';

import { Grid } from '@/grideffect/GridEffect';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Background color="">
      <Grid rows={9} />
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/trytoday" className='rounded-full border-[2px] border-black px-4 py-2'>
              Try Today
            </Link>
          </li>
        </NavbarTwoColumns>
      </Section>
      <Component {...pageProps} />
    </Background>
    <Footer />
  </div>
);

export default MyApp;
