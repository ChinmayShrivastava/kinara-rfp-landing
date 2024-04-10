import '../styles/global.css';

import type { AppProps } from 'next/app';
import Link from 'next/link';

import { Grid } from '@/grideffect/GridEffect';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Background color="">
      <Grid rows={8} />
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://calendly.com/rahuldey700/demo-nucleus">
              <Button>
                Try Today
              </Button>
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
