import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string | ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="mb-16 w-full text-center sm:text-left">
    <h1 className="whitespace-pre-line text-center text-[2em] text-gray-900 sm:text-[5em] sm:leading-none">
      {props.title}
    </h1>
    {/* <div className="mb-8 mt-4 text-center text-xl text-gray-500 sm:text-3xl">{props.description}</div> */}
  </header>
);

export { HeroOneButton };
