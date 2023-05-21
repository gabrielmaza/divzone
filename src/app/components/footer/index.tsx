import Logo from "../../../../public/img/svg/logo_nav.svg";

import { EnvelopeIcon, LinkIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <Image alt="logo" src={Logo} className="h-5 w-auto" />
          <p className="my-5 text-gray-600">
            Transforming your digital vision into a reality through innovative
            solutions.
          </p>
          <p>
            {" "}
            {`Copyright © ${new Date().getFullYear()}. Built with DivZone.`}
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <LinkIcon className="w-5 h-5" />
            <h4 className="font-bold">Links</h4>
          </div>
          <a
            href="https://divzone-nextjs-theme.vercel.app/"
            title="Divzone nextjs demo theme footer link"
            className="hover:text-primary-100 transition duration-500"
          >
            Demo
          </a>
          <a
            href="https://divzone-react-theme-docs.vercel.app/docs/intro"
            title="DivZone Nextjs Theme Docs footer link"
            className="hover:text-primary-100 transition duration-500"
          >
            Docs
          </a>
          <a
            href="https://github.com/gabrielmaza/divzone-react-theme"
            title="DivZone Nextjs Theme GitHub footer link"
            className="hover:text-primary-100 transition duration-500"
          >
            GitHub
          </a>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="w-5 h-5" />
            <h4 className="font-bold">Send us an email</h4>
          </div>
          <a
            href="mailto:help@div.zone"
            title="Email us footer link"
            className="hover:text-primary-100 transition duration-500"
          >
            help@div.zone
          </a>
        </div>
      </div>
    </footer>
  );
}
