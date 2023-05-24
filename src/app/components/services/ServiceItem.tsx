type Props = {
  name: string;
  description?: string;
  background?: "secondary-100" | "primary-100";
};

export default function ServiceItem({ name, description }: Props) {
  const overlayStyles = `p-5 absolute z-30 flex
    h-full w-full flex-col items-center justify-center
    whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90 rounded-2xl`;

  return (
    <li className="relative inline-block h-[280px] w-[280px] rounded-2xl bg-secondary-100">
      <div className={overlayStyles}>
        <p className="mt-5">{description}</p>
      </div>
      <div className="flex flex-col justify-center p-5 h-full w-full whitespace-break-spaces">
        <p className="text-3xl font-bold text-gray-900 ">{name}</p>
      </div>
    </li>
  );
}
