import '../styles/global.css';

import type { AppProps } from 'next/app';
import Link from 'next/link';

import { Grid } from '@/grideffect/GridEffect';
import { NavbarTwoColumns } from '@/navigation/NavbarTwoColumns';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Logo } from '../templates/Logo';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Background color="">
      <Grid columns={40} />
      <Section yPadding="py-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="/trytoday">Try Today</Link>
          </li>
        </NavbarTwoColumns>
      </Section>
      <Component {...pageProps} />
    </Background>
  </div>
);

export default MyApp;
