import { SelectedPageEnum } from "@/app/shared/typesEnum";
import { ArrowUpIcon, RocketLaunchIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  title: string;
  description: string;
};

export default function Features({ title, description }: Props) {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const textShowStyle = !show ? "h-0 opacity-0" : "h-auto opacity-100 my-3";

  return (
    <motion.div
      variants={childVariant}
      className="relative cursor-pointer flex flex-col justify-center z-0 rounded-3xl bg-gray-100 hover:bg-gray-200 px-5 py-5 text-center transition-all"
      onClick={handleShow}
      aria-hidden
    >
      <h3 className="font-bold text-lg text-gray-900 mb-3 ">{title}</h3>
      <p
        className={`text-gray-900 overflow-hidden transition-all duration-300 ${textShowStyle}`}
      >
        {description}
      </p>
      {!show ? (
        <RocketLaunchIcon className="w-5 h-5 mx-auto fill-gray-900 transition-all duration-300" />
      ) : (
        <ArrowUpIcon className="w-5 h-5 mx-auto fill-gray-900 transition-all duration-300" />
      )}
    </motion.div>
  );
}
