
import { SelectedPageEnum } from "@/app/shared/typesEnum";
import ActionButton from '@/app/shared/ActionButton';
import { motion } from 'framer-motion';
import Image from 'next/image';
import backgroundSparkles from '../../../../public/img/background_sparkles.png';

type Props = {
    setSelectedPage: (value: SelectedPageEnum) => void;
}

export default function Main({ setSelectedPage }: Props) {

    return (
        <section
            id='home'
            className="gap-16 bg-gray-950 pb-10 pt-[90px] md:h-full md:pb-0"
        >
            {/* Image and main header */}
            <motion.div
                className='mx-auto w-5/6 items-center justify-center md:flex md:h-[480px]'
                onViewportEnter={() => setSelectedPage(SelectedPageEnum.Home)}
            >
                {/* Main header */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* Headings */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className="relative">
                            <Image className="absolute w-full scale-150 top-[-6rem] left-[-6rem] z-[-1] opacity-50" src={backgroundSparkles} alt={"background sparkles img"} />
                            <div className="text-center flex flex-col justify-center items-center">
                                <span className="font-extrabold text-3xl sm:text-6xl sm:leading-[4rem] text-center">Multipurpose React themes</span>
                            </div>
                        </div>
                        <h1 className="mt-8 font-light text-md sm:text-3xl text-center">
                            Transforming your digital vision into a reality through innovative solutions.
                        </h1>
                    </motion.div>
                    {/* Action buttons */}
                    <motion.div
                        className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <a
                            className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
                            target="_blank"
                            href="https://divzone-nextjs-theme.vercel.app/"
                            title="Discover our theme link"
                        >
                            Discover our theme
                        </a>
                        <ActionButton
                            setSelectedPage={setSelectedPage}
                            page={SelectedPageEnum.ContactUs}
                            label="Contact Us"
                        />

                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}