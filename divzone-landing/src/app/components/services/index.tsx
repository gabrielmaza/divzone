import { SelectedPageEnum, ServiceType } from "@/app/shared/typesEnum";
import { motion } from "framer-motion";
import HText from "@/app/shared/HText";
import ServiceItem from "./ServiceItem";
import {
    BenefitType,
} from "@/app/shared/typesEnum";
import { CheckCircleIcon, LifebuoyIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import Benefit from "./Benefit";


const benefits: Array<BenefitType> = [
    {
        icon: <CheckCircleIcon className="h-20 w-20 fill-primary-500" />,
        title: "Quality",
        description:
            "Discover top-quality pre-designed templates that elevate your website with stunning designs and flawless execution.",
    },
    {
        icon: <LifebuoyIcon className="h-20 w-20 fill-primary-500" />,
        title: "Support 24/7",
        description:
            "Enjoy round-the-clock support from our dedicated team, ensuring a seamless experience as you customize your template.",
    },
    {
        icon: <PlusCircleIcon className="h-20 w-20 fill-primary-500" />,
        title: "Value-added",
        description:
            "Unlock the full potential of our templates with advanced functionality and regular updates, delivering exceptional value for your investment.",
    },
];

const category: Array<ServiceType> = [
    {
        name: "Software development",
        description:
            "Experience the power of tailored software solutions crafted to perfection. Our expert team designs and develops versatile applications for desktop, mobile, and web platforms.",
    },
    {
        name: "Quality assurance",
        description:
            "Ensure your software meets the highest standards with our rigorous quality assurance testing. We meticulously verify functionality, performance, and compliance.",
    },
    {
        name: "Maintenance & support",
        description:
            "Stay worry-free with our comprehensive software maintenance and support services. Our dedicated team ensures smooth operations and promptly resolves any issues.",
    },
    {
        name: "Project management",
        description:
            "Streamline your development process with our efficient project management services. We ensure on-time delivery, adherence to budget, and top-notch quality.",
    },
    {
        name: "User experience (UX) design",
        description:
            "Deliver an exceptional user experience with our intuitive and user-friendly software designs. We prioritize usability, accessibility, and customer satisfaction.",
    },
    {
        name: "Consulting",
        description:
            "Unlock your software's potential with our expert consulting services. We offer strategic guidance on development strategies, project management, and seamless integration.",
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

export default function Services({ setSelectedPage }: Props) {

    return (
        <section id="services" className="w-full bg-gray-800 pt-24 pb-32">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPageEnum.Services)}
            >
                {/* BENEFITS */}
                <motion.div
                    className="mx-auto w-5/6 mb-12 items-center justify-between gap-1 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>
                            WHAT DO<span className="text-primary-100"> WE DO?</span>
                        </HText>
                        <p className="py-5">
                            Empowering Your Business with Custom React and Next.js Templates:
                            Revolutionizing Software Development and Delivering Tailored
                            Solutions.
                        </p>
                    </div>
                </motion.div>
                <div className="mt-10 mx-auto h-auto w-5/6">
                    <ul className="flex flex-wrap justify-center gap-1">
                        {category.map((item: ServiceType, index) => (
                            <ServiceItem
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
}
