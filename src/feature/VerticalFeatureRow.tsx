import className from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
    'p-4 border-[2px] rounded-md shadow-xl sm:h-[400px] flex flex-row justify-between items-center bg-white',
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="align-start flex w-full flex-col items-start justify-start px-6 py-16 text-center sm:w-1/2 sm:py-0">
        <h3 className="px-4 text-left text-xl text-gray-900 sm:text-2xl">{props.title}</h3>
        <div className="mt-2 px-4 text-left text-lg leading-9 sm:text-xl">
          {props.description}
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center rounded-md p-6 sm:h-full sm:w-1/2">
        <Image src={`${router.basePath}${props.image}`} alt={props.imageAlt}
        width={400} height={400}
        />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
