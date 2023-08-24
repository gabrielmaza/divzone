import { SelectedPageEnum } from "@/app/shared/typesEnum";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPageEnum) => void;
};

export default function Benefit({
  icon,
  title,
  description,
  setSelectedPage,
}: Props) {
  return (
    <motion.div
      variants={childVariant}
      className="relative md:w-1/3 h-fit md:h-[400px] lg:h-[360px] z-0 mt-5 rounded-3xl bg-gray-100 px-5 py-10 text-center"
    >
      <div className="mb-4 flex justify-center">{icon}</div>

      <h3 className="font-bold text-xl text-gray-900">{title}</h3>
      <p className="my-3 text-gray-900">{description}</p>
      <a
        className="text-sm font-bold"
        onClick={() => setSelectedPage(SelectedPageEnum.ContactUs)}
        href={`#${SelectedPageEnum.ContactUs}`}
      >
        <span className="text-gray-800 hover:text-secondary-400 transition duration-500">
          Contact
        </span>
      </a>
    </motion.div>
  );
}
