import { SelectedPageEnum } from "@/app/shared/typesEnum";
import { motion } from "framer-motion";
import Image from "next/image";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: string;
    title: string;
    description: string;
};

export default function Package({ icon, title, description }: Props) {
    return (
        <motion.div
            variants={childVariant}
            className="relative z-0 rounded-3xl border border-solid border-gray-200 px-5 py-5 text-center"
        >
            <div className="mb-4 flex justify-center">
                <Image className="w-20 h-20 p-4" src={icon} alt={`${title} img`} />
            </div>
            <h3 className="font-bold text-lg text-gray-200">{title}</h3>
            <p className="my-3 text-gray-200">{description}</p>
        </motion.div>
    );
};
