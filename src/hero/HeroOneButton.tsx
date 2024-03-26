import type { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string | ReactNode;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center sm:text-left">
    <h1 className="whitespace-pre-line text-[2em] text-gray-900 sm:text-[4em] sm:leading-hero">
      {props.title}
    </h1>
    <div className="sm:text-2x mb-16 mt-4 text-2xl text-gray-500">{props.description}</div>
    {props.button}
  </header>
);

export { HeroOneButton };
