import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import React from 'react'

type Props = {
  label: string;
  link: string;
}

const FindUsBtn = ({ label, link }: Props) => {
  return (
    <a
      className="flex gap-3 justify-center items-center rounded-md bg-primary-300 px-10 py-2 cursor-pointer transition duration-500 hover:bg-primary-500 hover:text-white mb-4"
      href={link}
      target="_blank"
    >
      <span>{label}</span>
      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
    </a>
  )
}

export default FindUsBtn;