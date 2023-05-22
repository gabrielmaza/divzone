import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../../../public/img/svg/logo_nav.svg";
import { SelectedPageEnum } from "@/app/shared/typesEnum";
import useMediaQuery from "@/app/hooks/useMediaQ";
import { motion } from "framer-motion";
import Image from "next/image";
import MyLink from "./MyLink";

type IndexProps = {
  isTopOfPage: boolean;
  selectedPage: SelectedPageEnum;
  setSelectedPage: (value: SelectedPageEnum) => void;
};

export default function Navbar({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}: IndexProps) {
  const flexBetween = "flex items-center justify-between";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-gray-700 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-50 w-full py-6 max-w-[1400px]`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side */}
            <Image src={Logo} alt="Logo" className="h-5 w-auto" />
            {/* Right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Home"
                  />
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Theme"
                  />
                  {/* <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Services" /> */}
                  <MyLink
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    page="Contact Us"
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <a
                    href="https://divzone-react-theme-docs.vercel.app/docs/intro"
                    target="_blank"
                    title="Docs link"
                    className={`transition duration-500 hover:text-gray-600`}
                  >
                    Docs
                  </a>
                  <a
                    href="https://github.com/gabrielmaza/divzone-nextjs-theme"
                    target="_blank"
                    title="Live demo link"
                    className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800"
                  >
                    <span className="inline-block">GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 ml-2 my-auto inline-block pb-[1px]"
                      viewBox="0 0 97.627 96"
                    >
                      <path
                        id="github-mark-white"
                        d="M48.854,0A49.266,49.266,0,0,0,33.4,95.907c2.427.49,3.316-1.059,3.316-2.362,0-1.141-.08-5.052-.08-9.127-13.59,2.934-16.42-5.867-16.42-5.867-2.184-5.7-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015,4.934.326,7.523,5.052,7.523,5.052,4.367,7.5,11.4,5.378,14.235,4.074a10.485,10.485,0,0,1,3.074-6.6c-10.839-1.141-22.243-5.378-22.243-24.283a19.268,19.268,0,0,1,5.014-13.2c-.485-1.222-2.184-6.275.486-13.038,0,0,4.125-1.3,13.426,5.052a46.573,46.573,0,0,1,24.427,0c9.3-6.356,13.427-5.052,13.427-5.052,2.67,6.763.97,11.816.485,13.038a18.9,18.9,0,0,1,5.015,13.2c0,18.905-11.4,23.06-22.324,24.283,1.78,1.548,3.316,4.481,3.316,9.126,0,6.6-.08,11.9-.08,13.526,0,1.3.89,2.853,3.316,2.364A49.267,49.267,0,0,0,48.854,0Z"
                        fill="#fff"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ) : (
              <motion.button
                className="rounded-full bg-secondary-400 p-2"
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsOpen(!isOpen)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </motion.button>
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu modal */}
      {!isAboveMediumScreens && isOpen && (
        <motion.div
          className="fixed bottom-0 right-0 top-0 z-50 w-[300px] bg-gray-800 drop-shadow-xl"
          initial="closed"
          whileInView="open"
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 0px)",
              opacity: 0.95,
              x: 0,
              transition: {
                type: "spring",
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              opacity: 0,
              x: 100,
              transition: { duration: 0.2 },
            },
          }}
        >
          {/*Close icon*/}
          <div className="flex justify-end p-8">
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <XMarkIcon className="w-6 h-6 text-white" />
            </motion.button>
          </div>
          {/*Menu items*/}
          <motion.div
            className="mx-[10%] flex flex-col gap-10 text-xl"
            variants={{
              open: {
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 300, damping: 24 },
              },
              closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
            }}
          >
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Home"
            />
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Theme"
            />
            {/* <MyLink selectedPage={selectedPage} setSelectedPage={setSelectedPage} page="Services" /> */}
            <MyLink
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              page="Contact Us"
            />
            <hr />
            <div className="flex flex-col gap-8">
              <a
                href="https://divzone-react-theme-docs.vercel.app/docs/intro"
                title="Sign in MyLink"
                className={`transition duration-500 hover:text-gray-600`}
              >
                Docs
              </a>
              <a
                href="https://github.com/gabrielmaza/divzone-nextjs-theme"
                className="rounded-md bg-transparent border-solid border border-white px-6 py-2 cursor-pointer transition duration-500 hover:bg-gray-800 text-center"
              >
                <span className="text-lg inline-block">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 ml-2 my-auto inline-block pb-[1px]"
                  viewBox="0 0 97.627 96"
                >
                  <path
                    id="github-mark-white"
                    d="M48.854,0A49.266,49.266,0,0,0,33.4,95.907c2.427.49,3.316-1.059,3.316-2.362,0-1.141-.08-5.052-.08-9.127-13.59,2.934-16.42-5.867-16.42-5.867-2.184-5.7-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015,4.934.326,7.523,5.052,7.523,5.052,4.367,7.5,11.4,5.378,14.235,4.074a10.485,10.485,0,0,1,3.074-6.6c-10.839-1.141-22.243-5.378-22.243-24.283a19.268,19.268,0,0,1,5.014-13.2c-.485-1.222-2.184-6.275.486-13.038,0,0,4.125-1.3,13.426,5.052a46.573,46.573,0,0,1,24.427,0c9.3-6.356,13.427-5.052,13.427-5.052,2.67,6.763.97,11.816.485,13.038a18.9,18.9,0,0,1,5.015,13.2c0,18.905-11.4,23.06-22.324,24.283,1.78,1.548,3.316,4.481,3.316,9.126,0,6.6-.08,11.9-.08,13.526,0,1.3.89,2.853,3.316,2.364A49.267,49.267,0,0,0,48.854,0Z"
                    fill="#fff"
                    fill-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </nav>
  );
}
