import Image from "next/image";
import HText from "@/app/shared/HText";
import {
    FeatureType,
    PackageType,
    SelectedPageEnum,
} from "@/app/shared/typesEnum";
import { motion } from "framer-motion";
import DevicesGraphic from "../../../../public/img/devices.png";
import arrowRight from "../../../../public/img/svg/arrow.svg";
import Package from "./Package";
import Features from "./Features";
import FramerMotionLogo from "../../../../public/img/logos/framer_motion_logo.png";
import HeroIconsLogo from "../../../../public/img/logos/heroicons_logo.png";
import NextjsLogo from "../../../../public/img/logos/nextjs_logo.png";
import ReactHookFormLogo from "../../../../public/img/logos/react_hook_form_logo.png";
import TailwindLogo from "../../../../public/img/logos/tailwind_logo.png";
import TypescriptLogo from "../../../../public/img/logos/typescript_logo.png";

const packages: Array<PackageType> = [
    {
        icon: NextjsLogo,
        title: "Nextjs",
        description:
            "Boost web app performance with Next.js, offering SSR, static site generation, and API routes.",
    },
    {
        icon: TypescriptLogo,
        title: "Typescript",
        description:
            "Level up dev workflow with TypeScript, a reliable and scalable superset of JavaScript.",
    },
    {
        icon: TailwindLogo,
        title: "Tailwind",
        description:
            "Create stunning responsive UIs with Tailwind CSS, a fast and customizable utility-first framework.",
    },
    {
        icon: HeroIconsLogo,
        title: "Heroicons",
        description:
            "Enhance your web projects with high-quality icons from Heroicons for a visually appealing experience.",
    },
    {
        icon: FramerMotionLogo,
        title: "Framer Motion",
        description:
            "Elevate UX with captivating animations and interactive components powered by Framer Motion.",
    },
    {
        icon: ReactHookFormLogo,
        title: "React Hook Forms",
        description:
            "Simplify form handling in React apps with React Hook Forms' efficient and intuitive validation.",
    },
];

const features: Array<FeatureType> = [
    {
        title: "Dark Theme",
        description:
            "Immerse yourself in a captivating visual experience with a sleek and modern dark theme.",
    },
    {
        title: "Ready-Made Layout",
        description:
            "Get a head start with a professionally designed and ready-to-use layout, saving you time and effort.",
    },
    {
        title: "Easy Customization",
        description:
            "Easily customize your website to fit your needs, no advanced programming knowledge required.",
    },
    {
        title: "Comprehensive Documentation",
        description:
            "Extensive and easy-to-understand documentation guide to help you make the most out of your template.",
    },
    {
        title: "Pre-Designed Components",
        description:
            "Utilize pre-designed and ready-to-use components to build stunning pages with just a few clicks.",
    },
    {
        title: "Responsive Design",
        description:
            "Deliver a seamless user experience across all devices, whether it's mobile phones, tablets, or desktop computers.",
    },
    {
        title: "Adaptive Images",
        description:
            "Optimize images to load quickly and provide exceptional visual experience, automatically adjusting to different screen sizes.",
    },
    {
        title: "Smooth Section Transitions",
        description:
            "Enjoy smooth and elegant transitions between sections that bring your website to life and enhance user engagement.",
    },
    {
        title: "SEO-Optimized",
        description:
            "Optimized for search engines to improve visibility in search results and drive organic traffic.",
    },
];

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

type Props = {
    setSelectedPage: (value: SelectedPageEnum) => void;
};

export default function NextjsTheme({ setSelectedPage }: Props) {
    return (
        <section id="theme" className="mx-auto min-h-full w-5/6 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPageEnum.Theme)}
            >

                {/* GRAPHICS AND DESCRIPTION */}
                <div className=" mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* DESCRIPTION */}
                    <div className="w-full md:w-1/2">
                        {/* TITLE */}
                        <div className="relative">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50 },
                                    visible: { opacity: 1, x: 0 },
                                }}
                            >
                                <Image
                                    className="hidden md:block absolute top-[-2rem] left-[-5rem] z-[1] w-16 rotate-45 opacity-10"
                                    alt="contact arrow img"
                                    src={arrowRight}
                                />
                                <HText>
                                    DIVZONE NEXTJS <span className="text-primary-100">THEME</span>
                                </HText>
                            </motion.div>
                        </div>

                        {/* DESCRIPT */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5 leading-7">
                                Embrace the Versatility of DivZone Next.js Theme. Experience the
                                Lightning-Fast Performance of Next.js, the Seamless
                                Customization of Tailwind CSS, and the Scalability of
                                TypeScript.
                            </p>
                            <p className="my-5 leading-7">
                                Effortlessly Create Stunning Websites with Pre-Designed
                                Components and Optimize Your Workflow. Benefit from TypeScript&#39;s
                                Reliability and Early Error Detection. With Extensive
                                Documentation and 24/7 Support, Achieve Unparalleled Success.
                                Explore DivZone Next.js Theme and Revolutionize your Web
                                Development Journey.
                            </p>
                        </motion.div>

                        {/* BUTTON */}
                        <div className="relative mt-16 z-10">
                            <a
                                className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
                                title="DivZone nextjs theme live demo link"
                                href="https://divzone-nextjs-theme.vercel.app/"
                                target="_blank"
                            >
                                Live demo
                            </a>
                        </div>
                    </div>
                    {/* GRAPHIC */}
                    <Image
                        className="w-full sm:w-1/2 mx-auto mt-20 sm:mt-0"
                        alt="benefits-page-graphic"
                        src={DevicesGraphic}
                    />
                </div>

                {/* PACKAGES */}
                <motion.div
                    className="mt-20 flex flex-col items-center gap-1"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    <h2 className="font-bold text-3xl text-white">
                        Supercharge Your Project with this Packages
                    </h2>
                    <p className="my-3 text-white">Elevate Your Web Development Game.</p>
                    <div className="mt-5 grid md:grid-cols-3 gap-4">
                        {packages.map((packageElement: PackageType) => (
                            <Package
                                key={packageElement.title}
                                icon={packageElement.icon}
                                title={packageElement.title}
                                description={packageElement.description}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* FEATURES */}
                <motion.div
                    className="mt-20 flex flex-col items-center gap-1"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    <h2 className="font-bold text-3xl text-white">
                        Unleash the Power of Cutting-Edge Technology
                    </h2>
                    <p className="my-3 text-white">
                        Embrace Innovation and Stay Ahead with Our Futuristic Template.
                    </p>
                    <div className="mt-5 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {features.map((feature: FeatureType) => (
                            <Features
                                key={feature.title}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
